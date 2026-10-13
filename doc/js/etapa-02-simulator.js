/**
 * SCADA-Graph Logistics & Fluid Network Simulator
 * Etapa 02: Teoria dos Grafos Aplicada à Automação Industrial e Logística
 * UNIFEI - ECAA08 Automática (2026.2)
 *
 * Implements:
 * 1. Dijkstra Shortest Path for Hydraulic Routing
 * 2. Dynamic Leak Simulation & Automatic Failover Rerouting
 * 3. Eulerian Circuit Inspection (Hierholzer Algorithm)
 * 4. Hamiltonian AGV Dispatch (TSP: Nearest Neighbor + 2-Opt)
 * 5. Material Flow DAG & Topological Sort (Kahn's Algorithm)
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // 1. TOPOLOGICAL MODEL: NODES & EDGES (PLANT & LOGISTICS)
  // -------------------------------------------------------------

  const NODES = {
    // P&ID Process & Fluid Nodes (Setor 100/300)
    'TK-301': { id: 'TK-301', label: 'TK-301 (NH3)', x: 70, y: 70, type: 'fluid-tank', layer: 'fluid', tag: 'TK-301', desc: 'Tanque Amônia Anidra' },
    'TK-302': { id: 'TK-302', label: 'TK-302 (H3PO4)', x: 70, y: 220, type: 'fluid-tank', layer: 'fluid', tag: 'TK-302', desc: 'Tanque Ácido Fosfórico' },
    'MAN-101': { id: 'MAN-101', label: 'MAN-101', x: 210, y: 145, type: 'manifold', layer: 'fluid', tag: 'MAN-101', desc: 'Manifold de Mistura/Sucção' },
    'P-101': { id: 'P-101', label: 'P-101 (Bomba A)', x: 330, y: 90, type: 'pump', layer: 'fluid', tag: 'P-101', desc: 'Bomba Principal de Slurry' },
    'P-102': { id: 'P-102', label: 'P-102 (Bomba B)', x: 330, y: 200, type: 'pump', layer: 'fluid', tag: 'P-102', desc: 'Bomba Reserva de Slurry' },
    'R-101': { id: 'R-101', label: 'R-101 (Reator)', x: 470, y: 145, type: 'reactor', layer: 'fluid', tag: 'R-101', desc: 'Reator de Neutralização' },
    'TK-303': { id: 'TK-303', label: 'TK-303 (Pulmão)', x: 590, y: 60, type: 'fluid-tank', layer: 'fluid', tag: 'TK-303', desc: 'Tanque Pulmão / Contingência' },
    'GRAN-201': { id: 'GRAN-201', label: 'GRAN-201 (Granulador)', x: 710, y: 145, type: 'process', layer: 'fluid', tag: 'GRAN-201', desc: 'Linha Granulação & Secagem' },

    // Logistic & Yard Nodes (Setor Logístico Externo/Interno)
    'PORT': { id: 'PORT', label: 'Portaria & Balança', x: 120, y: 350, type: 'logistic', layer: 'vehicle', tag: 'PORT-01', desc: 'Entrada/Pesagem Veículos' },
    'GALP_A': { id: 'GALP_A', label: 'Galpão A (Insumos)', x: 290, y: 350, type: 'warehouse', layer: 'vehicle', tag: 'WH-A', desc: 'Boxes Ureia, MAP, KCl, Líquidos' },
    'MOEGA': { id: 'MOEGA', label: 'Moega & Silos Dosagem', x: 470, y: 350, type: 'process', layer: 'vehicle', tag: 'MOEG-01', desc: 'Descarga e Dosagem Automática' },
    'GALP_B': { id: 'GALP_B', label: 'Galpão B (Acabados)', x: 650, y: 350, type: 'warehouse', layer: 'vehicle', tag: 'WH-B', desc: 'Armazenamento NPK 04-14-08 e 10-10-10' },
    'DOCAS': { id: 'DOCAS', label: 'Docas de Expedição', x: 790, y: 350, type: 'logistic', layer: 'vehicle', tag: 'DOCK-01', desc: 'Carregamento e Saída de Caminhões' }
  };

  // Fluid Pipes Network: Directed Edges (u -> v) with physical distances (meters) and valve tags
  const FLUID_EDGES = [
    { id: 'e1', u: 'TK-301', v: 'MAN-101', weight: 15, valve: 'XV-301', status: 'normal' },
    { id: 'e2', u: 'TK-302', v: 'MAN-101', weight: 12, valve: 'XV-302', status: 'normal' },
    { id: 'e3', u: 'MAN-101', v: 'P-101', weight: 8, valve: 'XV-101A', status: 'normal' },
    { id: 'e4', u: 'MAN-101', v: 'P-102', weight: 10, valve: 'XV-101B', status: 'normal' },
    { id: 'e5', u: 'P-101', v: 'R-101', weight: 25, valve: 'XV-102A', status: 'normal' },
    { id: 'e6', u: 'P-102', v: 'R-101', weight: 22, valve: 'XV-102B', status: 'normal' },
    { id: 'e7', u: 'R-101', v: 'GRAN-201', weight: 30, valve: 'XV-201', status: 'normal' },
    { id: 'e8', u: 'R-101', v: 'TK-303', weight: 18, valve: 'XV-202', status: 'normal' },
    { id: 'e9', u: 'TK-303', v: 'GRAN-201', weight: 20, valve: 'XV-203', status: 'normal' }
  ];

  // Logistic Corridors for AGVs / Vehicles: Undirected Graph with distances (meters)
  const LOGISTIC_EDGES = [
    { id: 'lv1', u: 'PORT', v: 'GALP_A', weight: 45, type: 'road' },
    { id: 'lv2', u: 'GALP_A', v: 'MOEGA', weight: 35, type: 'road' },
    { id: 'lv3', u: 'MOEGA', v: 'R-101', weight: 40, type: 'agv' },
    { id: 'lv4', u: 'R-101', v: 'GALP_B', weight: 50, type: 'agv' },
    { id: 'lv5', u: 'GRAN-201', v: 'GALP_B', weight: 30, type: 'conveyor' },
    { id: 'lv6', u: 'GALP_B', v: 'DOCAS', weight: 25, type: 'road' },
    { id: 'lv7', u: 'PORT', v: 'MOEGA', weight: 70, type: 'road' },
    { id: 'lv8', u: 'GALP_A', v: 'GALP_B', weight: 80, type: 'road' },
    { id: 'lv9', u: 'DOCAS', v: 'PORT', weight: 95, type: 'ring-road' }
  ];

  // DAG of Material Transformation Flow (Aula 18)
  const MATERIAL_DAG = [
    { u: 'PORT', v: 'GALP_A', label: 'Descarga de Insumos Brutos' },
    { u: 'GALP_A', v: 'MOEGA', label: 'Alimentação de Moega & Silos' },
    { u: 'TK-301', v: 'R-101', label: 'Amônia Anidra Líquida' },
    { u: 'TK-302', v: 'R-101', label: 'Ácido Fosfórico' },
    { u: 'MOEGA', v: 'R-101', label: 'Dosagem de Macronutrientes Sólidos' },
    { u: 'R-101', v: 'GRAN-201', label: 'Slurry de MAP Neutralizado' },
    { u: 'GRAN-201', v: 'GALP_B', label: 'Fertilizante Granulado & Ensacado' },
    { u: 'GALP_B', v: 'DOCAS', label: 'Paletes Expedidos para Clientes' }
  ];

  // -------------------------------------------------------------
  // 2. STATE MANAGER
  // -------------------------------------------------------------

  const simState = {
    activeMode: 'dijkstra', // 'dijkstra', 'leak', 'euler', 'hamilton', 'dag'
    selectedSource: 'TK-301',
    selectedTarget: 'GRAN-201',
    leakingEdge: null,
    activeRoute: [],
    highlightedEdges: [],
    visitedNodes: [],
    inspectionEdges: [],
    animating: false,
    animTimer: null,
    agvPosition: null,
    valves: {
      'XV-301': 'CLOSED',
      'XV-302': 'CLOSED',
      'XV-101A': 'CLOSED',
      'XV-101B': 'CLOSED',
      'XV-102A': 'CLOSED',
      'XV-102B': 'CLOSED',
      'XV-201': 'CLOSED',
      'XV-202': 'CLOSED',
      'XV-203': 'CLOSED'
    },
    pumps: {
      'P-101': 'STOPPED',
      'P-102': 'STOPPED'
    },
    kpi: {
      distance: 0,
      decisionTimeMs: 0,
      statusMessage: 'Sistema em prontidão operacional.',
      statusLevel: 'info' // 'info', 'success', 'warning', 'danger'
    }
  };

  // -------------------------------------------------------------
  // 3. CORE GRAPH ALGORITHMS
  // -------------------------------------------------------------

  /**
   * Dijkstra Shortest Path on Fluid Graph
   * Takes into account blocked/leaking edges (weight = Infinity)
   */
  function runDijkstra(sourceId, targetId, blockedEdgeId = null) {
    const t0 = performance.now();
    const dist = {};
    const prev = {};
    const visited = new Set();
    const unvisited = [];

    // Filter relevant nodes for fluid routing
    const fluidNodeIds = ['TK-301', 'TK-302', 'MAN-101', 'P-101', 'P-102', 'R-101', 'TK-303', 'GRAN-201'];
    fluidNodeIds.forEach(id => {
      dist[id] = Infinity;
      prev[id] = null;
      unvisited.push(id);
    });

    if (!dist.hasOwnProperty(sourceId)) {
      dist[sourceId] = Infinity;
      unvisited.push(sourceId);
    }
    dist[sourceId] = 0;

    // Build adjacency list
    const adj = {};
    fluidNodeIds.forEach(id => { adj[id] = []; });
    FLUID_EDGES.forEach(edge => {
      const isBlocked = (edge.id === blockedEdgeId) || (edge.status === 'leaking');
      const w = isBlocked ? Infinity : edge.weight;
      if (adj[edge.u]) {
        adj[edge.u].push({ v: edge.v, weight: w, edgeId: edge.id, valve: edge.valve });
      }
    });

    while (unvisited.length > 0) {
      // Find unvisited node with smallest distance
      unvisited.sort((a, b) => dist[a] - dist[b]);
      const u = unvisited.shift();

      if (dist[u] === Infinity) break; // unreachable remaining
      if (u === targetId) break;

      visited.add(u);

      const neighbors = adj[u] || [];
      for (const edge of neighbors) {
        if (visited.has(edge.v) || edge.weight === Infinity) continue;
        const alt = dist[u] + edge.weight;
        if (alt < dist[edge.v]) {
          dist[edge.v] = alt;
          prev[edge.v] = { u, edgeId: edge.edgeId, valve: edge.valve };
        }
      }
    }

    const t1 = performance.now();
    const decisionTimeMs = Math.round((t1 - t0) * 1000) / 1000;

    // Reconstruct path
    const pathNodes = [];
    const pathEdges = [];
    let curr = targetId;
    if (dist[targetId] !== Infinity) {
      while (curr) {
        pathNodes.unshift(curr);
        const p = prev[curr];
        if (p) {
          pathEdges.unshift(p.edgeId);
          curr = p.u;
        } else {
          curr = null;
        }
      }
    }

    return {
      success: dist[targetId] !== Infinity,
      distance: dist[targetId],
      pathNodes,
      pathEdges,
      decisionTimeMs
    };
  }

  /**
   * Hierholzer's Algorithm for Eulerian Circuit / Trail
   * Runs on undirected piping subnetwork connecting MAN-101, P-101, P-102, R-101, TK-303, GRAN-201
   */
  function runHierholzer() {
    const t0 = performance.now();
    // Build undirected multi-adjacency
    const adj = {};
    const edgesCopy = [];

    FLUID_EDGES.forEach(e => {
      if (!adj[e.u]) adj[e.u] = [];
      if (!adj[e.v]) adj[e.v] = [];
      const edgeObj = { id: e.id, u: e.u, v: e.v, used: false };
      edgesCopy.push(edgeObj);
      adj[e.u].push(edgeObj);
      adj[e.v].push(edgeObj);
    });

    // Check vertex degrees
    const oddVertices = [];
    for (const v in adj) {
      if (adj[v].length % 2 !== 0) {
        oddVertices.push(v);
      }
    }

    // Start at odd vertex if exists (Eulerian Trail), or any vertex if circuit
    const startNode = oddVertices.length > 0 ? oddVertices[0] : 'MAN-101';

    const stack = [startNode];
    const circuit = [];
    const usedEdgeIds = [];

    while (stack.length > 0) {
      const u = stack[stack.length - 1];
      // Find unused edge from u
      const nextEdge = (adj[u] || []).find(e => !e.used);
      if (nextEdge) {
        nextEdge.used = true;
        const nextVertex = (nextEdge.u === u) ? nextEdge.v : nextEdge.u;
        stack.push(nextVertex);
        usedEdgeIds.push(nextEdge.id);
      } else {
        circuit.push(stack.pop());
      }
    }

    circuit.reverse();
    const t1 = performance.now();

    return {
      circuit,
      edgeSequence: usedEdgeIds,
      isPerfectCircuit: oddVertices.length === 0,
      oddVertices,
      decisionTimeMs: Math.round((t1 - t0) * 1000) / 1000
    };
  }

  /**
   * Traveling Salesperson Problem (TSP) for AGV Routing (Aula 17)
   * Nearest Neighbor Heuristic + 2-Opt Local Search
   */
  function runTSP() {
    const t0 = performance.now();
    const targets = ['PORT', 'GALP_A', 'MOEGA', 'R-101', 'GALP_B', 'DOCAS'];
    const n = targets.length;

    // Build distance matrix using Euclidean + layout weights
    const distMatrix = {};
    targets.forEach(u => {
      distMatrix[u] = {};
      targets.forEach(v => {
        if (u === v) {
          distMatrix[u][v] = 0;
        } else {
          // Direct edge in logistic graph if exists, else euclidean estimation
          const direct = LOGISTIC_EDGES.find(e => (e.u === u && e.v === v) || (e.u === v && e.v === u));
          if (direct) {
            distMatrix[u][v] = direct.weight;
          } else {
            const n1 = NODES[u];
            const n2 = NODES[v];
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            distMatrix[u][v] = Math.round(Math.sqrt(dx * dx + dy * dy) * 0.4);
          }
        }
      });
    });

    // 1. Nearest Neighbor Heuristic
    const visited = new Set();
    let current = targets[0];
    const nnTour = [current];
    visited.add(current);

    while (visited.size < n) {
      let nearest = null;
      let minDist = Infinity;
      targets.forEach(candidate => {
        if (!visited.has(candidate)) {
          const d = distMatrix[current][candidate];
          if (d < minDist) {
            minDist = d;
            nearest = candidate;
          }
        }
      });
      if (nearest) {
        nnTour.push(nearest);
        visited.add(nearest);
        current = nearest;
      }
    }
    nnTour.push(nnTour[0]); // Return to base

    function calcTourDist(tour) {
      let d = 0;
      for (let i = 0; i < tour.length - 1; i++) {
        d += distMatrix[tour[i]][tour[i + 1]];
      }
      return d;
    }

    const nnCost = calcTourDist(nnTour);

    // 2. 2-Opt Local Search Optimization
    let bestTour = [...nnTour];
    let improved = true;
    let iterations = 0;

    while (improved && iterations < 50) {
      improved = false;
      iterations++;
      for (let i = 1; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
          const newTour = [
            ...bestTour.slice(0, i),
            ...bestTour.slice(i, j + 1).reverse(),
            ...bestTour.slice(j + 1)
          ];
          const newCost = calcTourDist(newTour);
          if (newCost < calcTourDist(bestTour)) {
            bestTour = newTour;
            improved = true;
            break;
          }
        }
        if (improved) break;
      }
    }

    const optCost = calcTourDist(bestTour);
    const t1 = performance.now();

    return {
      tour: bestTour,
      nnCost,
      optCost,
      improvementPct: Math.round(((nnCost - optCost) / nnCost) * 100),
      decisionTimeMs: Math.round((t1 - t0) * 1000) / 1000
    };
  }

  /**
   * Kahn's Algorithm for DAG Topological Sort (Aula 18)
   */
  function runKahn() {
    const t0 = performance.now();
    const inDegree = {};
    const adj = {};
    const allNodes = new Set();

    MATERIAL_DAG.forEach(edge => {
      allNodes.add(edge.u);
      allNodes.add(edge.v);
      if (!adj[edge.u]) adj[edge.u] = [];
      adj[edge.u].push(edge.v);
      inDegree[edge.v] = (inDegree[edge.v] || 0) + 1;
      if (!inDegree[edge.u]) inDegree[edge.u] = 0;
    });

    const queue = [];
    allNodes.forEach(node => {
      if ((inDegree[node] || 0) === 0) {
        queue.push(node);
      }
    });

    const topoOrder = [];
    while (queue.length > 0) {
      const u = queue.shift();
      topoOrder.push(u);

      const neighbors = adj[u] || [];
      neighbors.forEach(v => {
        inDegree[v]--;
        if (inDegree[v] === 0) {
          queue.push(v);
        }
      });
    }

    const isDAG = topoOrder.length === allNodes.size;
    const t1 = performance.now();

    return {
      isDAG,
      topoOrder,
      steps: MATERIAL_DAG,
      decisionTimeMs: Math.round((t1 - t0) * 1000) / 1000
    };
  }

  // -------------------------------------------------------------
  // 4. GUI & SVG SYNOPTIC RENDERER
  // -------------------------------------------------------------

  function renderSynoptic() {
    const svg = document.getElementById('scada-graph-svg');
    if (!svg) return;

    let svgHtml = '';

    // Defs: Markers & Gradients
    svgHtml += `
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
        </marker>
        <marker id="arrow-active" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
        </marker>
        <marker id="arrow-leak" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
        </marker>
        <linearGradient id="tankGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e3a8a" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    `;

    // 1. Draw Logistic Yard Backdrop
    svgHtml += `
      <rect x="20" y="300" width="840" height="95" rx="10" fill="#0c162c" stroke="#1e3a5f" stroke-width="1.5" />
      <text x="35" y="320" fill="#64748b" font-size="10" font-family="monospace" font-weight="bold">CORREDOR LOGÍSTICO TERRESTRE (CAMINHÕES & AGVs)</text>
      
      <rect x="20" y="20" width="840" height="260" rx="10" fill="#081024" stroke="#1e2d4d" stroke-width="1.5" />
      <text x="35" y="40" fill="#64748b" font-size="10" font-family="monospace" font-weight="bold">MALHA DE PROCESSO & TUBULAÇÕES HIDRÁULICAS (SETOR 100/300)</text>
    `;

    // 2. Draw Logistic Corridors (Roads)
    LOGISTIC_EDGES.forEach(le => {
      const u = NODES[le.u];
      const v = NODES[le.v];
      const isTour = (simState.activeMode === 'hamilton') &&
        (simState.activeRoute.includes(le.u) && simState.activeRoute.includes(le.v));
      const strokeColor = isTour ? '#f59e0b' : '#334155';
      const strokeWidth = isTour ? 4 : 2;
      const strokeDash = isTour ? 'none' : '4,4';

      svgHtml += `
        <line x1="${u.x}" y1="${u.y}" x2="${v.x}" y2="${v.y}"
              stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="${strokeDash}" />
      `;
    });

    // 3. Draw Fluid Pipes
    FLUID_EDGES.forEach(edge => {
      const u = NODES[edge.u];
      const v = NODES[edge.v];
      const isRoute = simState.highlightedEdges.includes(edge.id);
      const isLeak = (edge.status === 'leaking') || (simState.leakingEdge === edge.id);

      let stroke = '#1e40af';
      let strokeWidth = 3;
      let marker = 'url(#arrow)';
      let filter = '';
      let dasharray = 'none';

      if (isLeak) {
        stroke = '#ef4444';
        strokeWidth = 5;
        marker = 'url(#arrow-leak)';
        dasharray = '6,3';
        filter = 'filter="url(#glow)"';
      } else if (isRoute) {
        stroke = '#10b981';
        strokeWidth = 5;
        marker = 'url(#arrow-active)';
        filter = 'filter="url(#glow)"';
      }

      svgHtml += `
        <line id="svg-edge-${edge.id}" x1="${u.x}" y1="${u.y}" x2="${v.x}" y2="${v.y}"
              stroke="${stroke}" stroke-width="${strokeWidth}" stroke-dasharray="${dasharray}"
              marker-end="${marker}" ${filter} class="pipe-line" data-edge="${edge.id}" style="cursor: pointer;" />
      `;

      // Valve indicator at edge midpoint
      const mx = (u.x + v.x) / 2;
      const my = (u.y + v.y) / 2;
      const valveState = simState.valves[edge.valve] || 'CLOSED';
      const valveFill = isLeak ? '#ef4444' : (valveState === 'OPEN' ? '#10b981' : '#64748b');

      svgHtml += `
        <g transform="translate(${mx}, ${my})">
          <circle r="7" fill="${valveFill}" stroke="#ffffff" stroke-width="1.2" />
          <text y="3" fill="#ffffff" font-size="7" font-family="monospace" text-anchor="middle" font-weight="bold">${edge.valve ? edge.valve.replace('XV-', '') : ''}</text>
          <text y="-10" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">${edge.weight}m</text>
        </g>
      `;

      // Flashing alert badge for leak
      if (isLeak) {
        svgHtml += `
          <g transform="translate(${mx}, ${my - 22})">
            <rect x="-35" y="-10" width="70" height="18" rx="4" fill="#ef4444" stroke="#ffffff" stroke-width="1" />
            <text y="3" fill="#ffffff" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">⚠️ VAZAMENTO</text>
          </g>
        `;
      }
    });

    // 4. Draw Nodes
    Object.values(NODES).forEach(node => {
      const isSelectedSource = (simState.selectedSource === node.id);
      const isSelectedTarget = (simState.selectedTarget === node.id);
      const isInRoute = simState.activeRoute.includes(node.id);

      let stroke = '#38bdf8';
      let strokeWidth = 2;
      let fill = '#0f172a';

      if (isSelectedSource) {
        stroke = '#38bdf8';
        strokeWidth = 4;
        fill = '#0284c7';
      } else if (isSelectedTarget) {
        stroke = '#10b981';
        strokeWidth = 4;
        fill = '#059669';
      } else if (isInRoute) {
        stroke = '#34d399';
        strokeWidth = 3;
      }

      if (node.type === 'fluid-tank') {
        svgHtml += `
          <g class="graph-node" data-id="${node.id}" style="cursor: pointer;">
            <rect x="${node.x - 30}" y="${node.y - 25}" width="60" height="50" rx="8"
                  fill="url(#tankGrad)" stroke="${stroke}" stroke-width="${strokeWidth}" />
            <text x="${node.x}" y="${node.y - 4}" fill="#ffffff" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">${node.id}</text>
            <text x="${node.x}" y="${node.y + 10}" fill="#94a3b8" font-size="7" font-family="monospace" text-anchor="middle">${node.desc.split(' ')[0]}</text>
          </g>
        `;
      } else if (node.type === 'pump') {
        const pStatus = simState.pumps[node.id] || 'STOPPED';
        const pColor = pStatus === 'RUNNING' ? '#10b981' : '#64748b';
        svgHtml += `
          <g class="graph-node" data-id="${node.id}" style="cursor: pointer;">
            <circle cx="${node.x}" cy="${node.y}" r="22" fill="#0f172a" stroke="${stroke}" stroke-width="${strokeWidth}" />
            <circle cx="${node.x}" cy="${node.y}" r="12" fill="${pColor}" opacity="0.85" />
            <text x="${node.x}" y="${node.y + 3}" fill="#ffffff" font-size="8" font-family="monospace" font-weight="bold" text-anchor="middle">${node.id}</text>
          </g>
        `;
      } else if (node.type === 'reactor') {
        svgHtml += `
          <g class="graph-node" data-id="${node.id}" style="cursor: pointer;">
            <rect x="${node.x - 32}" y="${node.y - 35}" width="64" height="70" rx="14"
                  fill="#0c2340" stroke="${stroke}" stroke-width="${strokeWidth}" />
            <line x1="${node.x}" y1="${node.y - 40}" x2="${node.x}" y2="${node.y}" stroke="#94a3b8" stroke-width="2.5" />
            <ellipse cx="${node.x}" cy="${node.y + 10}" rx="14" ry="4" fill="#67e8f9" opacity="0.8" />
            <text x="${node.x}" y="${node.y - 12}" fill="#ffffff" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">R-101</text>
            <text x="${node.x}" y="${node.y + 24}" fill="#38bdf8" font-size="7" font-family="monospace" text-anchor="middle">Neutralizador</text>
          </g>
        `;
      } else if (node.type === 'warehouse' || node.type === 'process' || node.type === 'logistic') {
        const isLogisticRow = (node.y > 300);
        const w = isLogisticRow ? 90 : 64;
        const h = isLogisticRow ? 42 : 46;
        svgHtml += `
          <g class="graph-node" data-id="${node.id}" style="cursor: pointer;">
            <rect x="${node.x - w / 2}" y="${node.y - h / 2}" width="${w}" height="${h}" rx="6"
                  fill="#111c35" stroke="${stroke}" stroke-width="${strokeWidth}" />
            <text x="${node.x}" y="${node.y - 2}" fill="#ffffff" font-size="8.5" font-family="monospace" font-weight="bold" text-anchor="middle">${node.id}</text>
            <text x="${node.x}" y="${node.y + 11}" fill="#94a3b8" font-size="7" font-family="monospace" text-anchor="middle">${node.label.split(' ')[0]}</text>
          </g>
        `;
      } else {
        svgHtml += `
          <g class="graph-node" data-id="${node.id}" style="cursor: pointer;">
            <circle cx="${node.x}" cy="${node.y}" r="20" fill="#0f172a" stroke="${stroke}" stroke-width="${strokeWidth}" />
            <text x="${node.x}" y="${node.y + 3}" fill="#ffffff" font-size="8" font-family="monospace" font-weight="bold" text-anchor="middle">${node.id}</text>
          </g>
        `;
      }
    });

    // 5. Draw AGV / Inspection Mobile Token
    if (simState.agvPosition) {
      svgHtml += `
        <g transform="translate(${simState.agvPosition.x}, ${simState.agvPosition.y})" filter="url(#glow)">
          <circle r="14" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
          <text y="4" fill="#000000" font-size="10" text-anchor="middle">🤖</text>
        </g>
      `;
    }

    svg.innerHTML = svgHtml;

    // Attach click events to nodes
    const nodeElements = svg.querySelectorAll('.graph-node');
    nodeElements.forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        handleNodeClick(id);
      });
    });

    // Attach click events to pipes
    const pipeElements = svg.querySelectorAll('.pipe-line');
    pipeElements.forEach(el => {
      el.addEventListener('click', () => {
        const edgeId = el.getAttribute('data-edge');
        handlePipeClick(edgeId);
      });
    });
  }

  // -------------------------------------------------------------
  // 5. SIMULATION CONTROLLERS & EVENT HANDLERS
  // -------------------------------------------------------------

  function handleNodeClick(nodeId) {
    if (simState.activeMode === 'dijkstra' || simState.activeMode === 'leak') {
      if (!simState.selectedSource || (simState.selectedSource && simState.selectedTarget)) {
        simState.selectedSource = nodeId;
        simState.selectedTarget = null;
        logConsole(`📍 Origem definida: ${nodeId}. Selecione o destino.`);
      } else {
        simState.selectedTarget = nodeId;
        logConsole(`🎯 Destino definido: ${nodeId}. Executando Dijkstra...`);
        executeDijkstraRouting();
      }
      updateUI();
    }
  }

  function handlePipeClick(edgeId) {
    const edge = FLUID_EDGES.find(e => e.id === edgeId);
    if (!edge) return;

    if (edge.status === 'leaking') {
      edge.status = 'normal';
      simState.leakingEdge = null;
      logConsole(`🛠️ Vazamento reparado na tubulação ${edge.id} (${edge.u} ➔ ${edge.v}). Válvula ${edge.valve} normalizada.`);
    } else {
      edge.status = 'leaking';
      simState.leakingEdge = edge.id;
      logConsole(`🚨 VAZAMENTO INJETADO na tubulação ${edge.id} (${edge.u} ➔ ${edge.v})! Acionando SIS IEC 61511...`);
    }

    if (simState.activeMode === 'leak' || simState.activeMode === 'dijkstra') {
      executeFailoverRerouting();
    } else {
      updateUI();
    }
  }

  function executeDijkstraRouting() {
    const src = simState.selectedSource || 'TK-301';
    const tgt = simState.selectedTarget || 'GRAN-201';

    const result = runDijkstra(src, tgt, simState.leakingEdge);

    if (result.success) {
      simState.activeRoute = result.pathNodes;
      simState.highlightedEdges = result.pathEdges;
      simState.kpi.distance = result.distance;
      simState.kpi.decisionTimeMs = result.decisionTimeMs;
      simState.kpi.statusMessage = `Rota ótima calculada via Dijkstra: ${result.distance}m (${result.pathNodes.join(' ➔ ')})`;
      simState.kpi.statusLevel = 'success';

      // Actuate valves
      Object.keys(simState.valves).forEach(k => { simState.valves[k] = 'CLOSED'; });
      simState.pumps['P-101'] = 'STOPPED';
      simState.pumps['P-102'] = 'STOPPED';

      result.pathEdges.forEach(eid => {
        const e = FLUID_EDGES.find(x => x.id === eid);
        if (e && e.valve) simState.valves[e.valve] = 'OPEN';
        if (e && (e.u === 'P-101' || e.v === 'P-101')) simState.pumps['P-101'] = 'RUNNING';
        if (e && (e.u === 'P-102' || e.v === 'P-102')) simState.pumps['P-102'] = 'RUNNING';
      });

      logConsole(`⚡ Dijkstra: Caminho ótimo ${src} ➔ ${tgt} [Dist: ${result.distance}m | t_dec: ${result.decisionTimeMs}ms]`);
      animateRouteToken(result.pathNodes);
    } else {
      simState.activeRoute = [];
      simState.highlightedEdges = [];
      simState.kpi.distance = Infinity;
      simState.kpi.decisionTimeMs = result.decisionTimeMs;
      simState.kpi.statusMessage = `❌ NENHUM CAMINHO DISPONÍVEL entre ${src} e ${tgt}! Sistema intertravado.`;
      simState.kpi.statusLevel = 'danger';
      logConsole(`🛑 ERRO: Destino inalcançável devido a bloqueios/vazamento.`);
    }

    updateUI();
  }

  function executeFailoverRerouting() {
    const src = simState.selectedSource || 'TK-301';
    const tgt = simState.selectedTarget || 'GRAN-201';

    logConsole(`🔄 SIS IEC 61511: Reponderação de Grafo W(${simState.leakingEdge}) ➔ ∞. Recalculando desvio dinâmico...`);
    const result = runDijkstra(src, tgt, simState.leakingEdge);

    if (result.success) {
      simState.activeRoute = result.pathNodes;
      simState.highlightedEdges = result.pathEdges;
      simState.kpi.distance = result.distance;
      simState.kpi.decisionTimeMs = result.decisionTimeMs;
      simState.kpi.statusMessage = `🛡️ Desvio Automático Efetuado: ${result.distance}m via ${result.pathNodes.join(' ➔ ')}`;
      simState.kpi.statusLevel = 'warning';

      // Update valves
      Object.keys(simState.valves).forEach(k => { simState.valves[k] = 'CLOSED'; });
      simState.pumps['P-101'] = 'STOPPED';
      simState.pumps['P-102'] = 'STOPPED';

      result.pathEdges.forEach(eid => {
        const e = FLUID_EDGES.find(x => x.id === eid);
        if (e && e.valve) simState.valves[e.valve] = 'OPEN';
        if (e && (e.u === 'P-101' || e.v === 'P-101')) simState.pumps['P-101'] = 'RUNNING';
        if (e && (e.u === 'P-102' || e.v === 'P-102')) simState.pumps['P-102'] = 'RUNNING';
      });

      logConsole(`✅ ROTA DE CONTINGÊNCIA ATIVADA: Duto isolado com sucesso em ${result.decisionTimeMs}ms.`);
      animateRouteToken(result.pathNodes);
    } else {
      simState.activeRoute = [];
      simState.highlightedEdges = [];
      simState.kpi.distance = Infinity;
      simState.kpi.statusMessage = `🚨 PONTE CRÍTICA ROMPIDA! O trecho isolado desconectou a planta. ESD Ativado!`;
      simState.kpi.statusLevel = 'danger';
      logConsole(`🛑 ALARME SIS: Falha em ponte estrutural. Parada de emergência geral.`);
    }

    updateUI();
  }

  function executeHierholzerInspection() {
    simState.activeMode = 'euler';
    const result = runHierholzer();

    simState.activeRoute = result.circuit;
    simState.highlightedEdges = result.edgeSequence;
    simState.kpi.distance = result.circuit.length * 15;
    simState.kpi.decisionTimeMs = result.decisionTimeMs;
    simState.kpi.statusMessage = `🔍 Varredura Euleriana: ${result.circuit.length} nós percorridos (${result.circuit.join(' ➔ ')})`;
    simState.kpi.statusLevel = 'info';

    logConsole(`🤖 Hierholzer: Circuito de inspeção calculado em ${result.decisionTimeMs}ms (${result.edgeSequence.length} dutos inspecionados sem repetição).`);
    animateRouteToken(result.circuit);
    updateUI();
  }

  function executeTSPARouting() {
    simState.activeMode = 'hamilton';
    const result = runTSP();

    simState.activeRoute = result.tour;
    simState.highlightedEdges = [];
    simState.kpi.distance = result.optCost;
    simState.kpi.decisionTimeMs = result.decisionTimeMs;
    simState.kpi.statusMessage = `🚜 Rota de AGV Otimizada (TSP 2-Opt): ${result.optCost}m (-${result.improvementPct}% vs NN inicial)`;
    simState.kpi.statusLevel = 'success';

    logConsole(`🚜 TSP Otimizado: Rota fechada ${result.tour.join(' ➔ ')} [Custo: ${result.optCost}m | Ganho 2-Opt: ${result.improvementPct}%]`);
    animateRouteToken(result.tour);
    updateUI();
  }

  function executeDAGFlow() {
    simState.activeMode = 'dag';
    const result = runKahn();

    simState.activeRoute = result.topoOrder;
    simState.highlightedEdges = FLUID_EDGES.map(e => e.id);
    simState.kpi.distance = result.topoOrder.length;
    simState.kpi.decisionTimeMs = result.decisionTimeMs;
    simState.kpi.statusMessage = `📦 Ordem Topológica de Produção (Kahn): ${result.topoOrder.join(' ➔ ')}`;
    simState.kpi.statusLevel = 'info';

    logConsole(`📦 Algoritmo de Kahn: O grafo de processo é um DAG válido. Ordem de produção respeitada.`);
    animateRouteToken(result.topoOrder);
    updateUI();
  }

  // -------------------------------------------------------------
  // 6. ANIMATION HELPER
  // -------------------------------------------------------------

  function animateRouteToken(nodeSequence) {
    if (!nodeSequence || nodeSequence.length === 0) return;
    if (simState.animTimer) clearInterval(simState.animTimer);

    simState.animating = true;
    let step = 0;
    const totalSteps = nodeSequence.length;

    simState.animTimer = setInterval(() => {
      if (step >= totalSteps) {
        clearInterval(simState.animTimer);
        simState.animating = false;
        simState.agvPosition = null;
        renderSynoptic();
        return;
      }

      const currNodeId = nodeSequence[step];
      const node = NODES[currNodeId];
      if (node) {
        simState.agvPosition = { x: node.x, y: node.y };
        renderSynoptic();
      }
      step++;
    }, 600);
  }

  // -------------------------------------------------------------
  // 7. UI SYNC & LOGGING
  // -------------------------------------------------------------

  function logConsole(msg) {
    const consoleBox = document.getElementById('scada-console-output');
    if (!consoleBox) return;

    const timeStr = new Date().toLocaleTimeString('pt-BR', { hour12: false });
    const line = document.createElement('div');
    line.className = 'scada-log-entry';

    const timeSpan = document.createElement('span');
    timeSpan.style.color = '#64748b';
    timeSpan.textContent = `[${timeStr}] `;

    const msgSpan = document.createElement('span');
    msgSpan.textContent = msg;

    line.appendChild(timeSpan);
    line.appendChild(msgSpan);
    consoleBox.appendChild(line);
    consoleBox.scrollTop = consoleBox.scrollHeight;
  }

  function updateUI() {
    renderSynoptic();

    // Update Status banner
    const statusBanner = document.getElementById('scada-status-banner');
    if (statusBanner) {
      statusBanner.textContent = simState.kpi.statusMessage;
      statusBanner.className = `callout callout-${simState.kpi.statusLevel}`;
      statusBanner.style.margin = '0.5rem 0';
      statusBanner.style.padding = '0.75rem 1rem';
      statusBanner.style.fontSize = '0.9rem';
    }

    // Update KPIs
    const elDist = document.getElementById('kpi-distance');
    if (elDist) {
      elDist.textContent = (simState.kpi.distance === Infinity) ? '∞ (Bloqueado)' : `${simState.kpi.distance} m`;
    }

    const elTime = document.getElementById('kpi-latency');
    if (elTime) {
      elTime.textContent = `${simState.kpi.decisionTimeMs} ms`;
    }

    const elRoute = document.getElementById('kpi-route');
    if (elRoute) {
      elRoute.textContent = simState.activeRoute.length > 0 ? simState.activeRoute.join(' ➔ ') : 'Nenhuma rota ativa';
    }

    // Update Valve table/badges
    const valveGrid = document.getElementById('scada-valves-display');
    if (valveGrid) {
      let vHtml = '';
      Object.keys(simState.valves).forEach(tag => {
        const st = simState.valves[tag];
        const color = st === 'OPEN' ? '#10b981' : '#64748b';
        vHtml += `<span style="background:${color}22; border:1px solid ${color}; color:${color}; padding:0.2rem 0.5rem; border-radius:4px; font-size:0.78rem; font-family:monospace; margin:2px; display:inline-block;">${tag}: <strong>${st}</strong></span>`;
      });
      valveGrid.innerHTML = vHtml;
    }
  }

  // -------------------------------------------------------------
  // 8. PRESET BUTTONS BINDING & INITIALIZATION
  // -------------------------------------------------------------

  function initSimulator() {
    const btnRunDijkstra = document.getElementById('btn-run-dijkstra');
    const btnInjectLeak = document.getElementById('btn-inject-leak');
    const btnHierholzer = document.getElementById('btn-hierholzer');
    const btnTSP = document.getElementById('btn-tsp');
    const btnDAG = document.getElementById('btn-dag');
    const btnReset = document.getElementById('btn-reset-sim');

    // Presets
    const presetNominal = document.getElementById('preset-g2-nominal');
    const presetLeak = document.getElementById('preset-g2-leak');
    const presetPumpFail = document.getElementById('preset-g2-pump-fail');
    const presetAGV = document.getElementById('preset-g2-agv');
    const presetEuler = document.getElementById('preset-g2-euler');

    if (btnRunDijkstra) {
      btnRunDijkstra.addEventListener('click', () => {
        simState.activeMode = 'dijkstra';
        executeDijkstraRouting();
      });
    }

    if (btnInjectLeak) {
      btnInjectLeak.addEventListener('click', () => {
        // Toggle leak on critical pipe e7 (R-101 -> GRAN-201)
        handlePipeClick('e7');
      });
    }

    if (btnHierholzer) {
      btnHierholzer.addEventListener('click', () => {
        executeHierholzerInspection();
      });
    }

    if (btnTSP) {
      btnTSP.addEventListener('click', () => {
        executeTSPARouting();
      });
    }

    if (btnDAG) {
      btnDAG.addEventListener('click', () => {
        executeDAGFlow();
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        FLUID_EDGES.forEach(e => { e.status = 'normal'; });
        simState.leakingEdge = null;
        simState.activeRoute = [];
        simState.highlightedEdges = [];
        simState.selectedSource = 'TK-301';
        simState.selectedTarget = 'GRAN-201';
        Object.keys(simState.valves).forEach(k => { simState.valves[k] = 'CLOSED'; });
        simState.pumps['P-101'] = 'STOPPED';
        simState.pumps['P-102'] = 'STOPPED';
        simState.kpi.distance = 0;
        simState.kpi.decisionTimeMs = 0;
        simState.kpi.statusMessage = 'Simulador reinicializado para estado de repouso.';
        simState.kpi.statusLevel = 'info';
        logConsole('🔄 Simulador reiniciado. Malha em estado nominal.');
        updateUI();
      });
    }

    // Presets Handlers
    if (presetNominal) {
      presetNominal.addEventListener('click', () => {
        FLUID_EDGES.forEach(e => { e.status = 'normal'; });
        simState.leakingEdge = null;
        simState.selectedSource = 'TK-301';
        simState.selectedTarget = 'GRAN-201';
        simState.activeMode = 'dijkstra';
        logConsole('🟢 Cenário 1: Operação nominal de produção acionada.');
        executeDijkstraRouting();
      });
    }

    if (presetLeak) {
      presetLeak.addEventListener('click', () => {
        const e7 = FLUID_EDGES.find(e => e.id === 'e7');
        if (e7) e7.status = 'leaking';
        simState.leakingEdge = 'e7';
        simState.selectedSource = 'TK-301';
        simState.selectedTarget = 'GRAN-201';
        simState.activeMode = 'leak';
        logConsole('🔴 Cenário 2: Vazamento catastrófico injetado no duto R-101 ➔ GRAN-201.');
        executeFailoverRerouting();
      });
    }

    if (presetPumpFail) {
      presetPumpFail.addEventListener('click', () => {
        const e5 = FLUID_EDGES.find(e => e.id === 'e5');
        if (e5) e5.status = 'leaking';
        simState.leakingEdge = 'e5';
        simState.selectedSource = 'TK-301';
        simState.selectedTarget = 'GRAN-201';
        simState.activeMode = 'leak';
        logConsole('⚡ Cenário 3: Falha na Bomba A (P-101) - Comutação de fluxo para Bomba B (P-102).');
        executeFailoverRerouting();
      });
    }

    if (presetAGV) {
      presetAGV.addEventListener('click', () => {
        logConsole('🚜 Cenário 4: Despacho de AGV para coleta de amostras e pesagem.');
        executeTSPARouting();
      });
    }

    if (presetEuler) {
      presetEuler.addEventListener('click', () => {
        logConsole('🔍 Cenário 5: Robô inspetor iniciando varredura de corrosão em dutos.');
        executeHierholzerInspection();
      });
    }

    // Initial draw
    updateUI();
    logConsole('🚀 Motor SCADA-Graph inicializado com sucesso.');
    logConsole('💡 Selecione um cenário acima ou clique em qualquer tubulação para injetar um vazamento.');
  }

  // Auto-init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSimulator);
  } else {
    initSimulator();
  }

  // Export to window if needed
  window.ScadaGraphSim = {
    runDijkstra,
    runHierholzer,
    runTSP,
    runKahn,
    simState
  };

})();
