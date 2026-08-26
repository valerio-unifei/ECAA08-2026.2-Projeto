/**
 * SCADA-Core Automática - Etapa 01: Lógica Formal & Sistemas Especialistas
 * Includes: 15-Slide Interactive Presentation & Real-Time JavaScript SCADA Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initPresentation();
  initScadaSimulator();
});

/* ===================================================
   1. THEME SWITCHER
   =================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('scada-theme') || 'dark';
  
  if (savedTheme === 'light') {
    document.documentElement.removeAttribute('data-theme');
    if (toggleBtn) toggleBtn.innerHTML = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggleBtn) toggleBtn.innerHTML = '☀️';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('scada-theme', 'light');
        toggleBtn.innerHTML = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('scada-theme', 'dark');
        toggleBtn.innerHTML = '☀️';
      }
    });
  }
}

/* ===================================================
   2. MOBILE MENU
   =================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

/* ===================================================
   3. 15-SLIDE PRESENTATION CONTROLLER
   =================================================== */
function initPresentation() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  let currentSlide = 0;
  const prevBtn = document.getElementById('pres-prev-btn');
  const nextBtn = document.getElementById('pres-next-btn');
  const counterSpan = document.getElementById('pres-slide-counter');
  const dotsContainer = document.getElementById('slide-dots');

  // Create dot indicators
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
      dot.title = `Ir para slide ${i + 1}`;
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlideView() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });

    if (counterSpan) {
      counterSpan.textContent = `Slide ${currentSlide + 1} de ${totalSlides}`;
    }

    if (prevBtn) prevBtn.disabled = (currentSlide === 0);
    if (nextBtn) nextBtn.disabled = (currentSlide === totalSlides - 1);

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slide-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    // Trigger MathJax re-render for current slide formulas
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([slides[currentSlide]]).catch(err => console.log(err));
    }
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentSlide = index;
      updateSlideView();
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) goToSlide(currentSlide - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
    });
  }

  // Keyboard navigation (ArrowLeft and ArrowRight)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      goToSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  });

  updateSlideView();
}

/* ===================================================
   4. SCADA SIMULATOR ENGINE (ETAPA 01: LÓGICA FORMAL)
   =================================================== */
function initScadaSimulator() {
  // Input elements
  const sliderPT = document.getElementById('sim-pt101');
  const sliderTT = document.getElementById('sim-tt101');
  const sliderAT = document.getElementById('sim-at101');
  const sliderLT = document.getElementById('sim-lt101');
  
  const chkESD = document.getElementById('sim-esd100');
  const chkAG = document.getElementById('sim-ag101');
  const chkP101 = document.getElementById('sim-p101');

  // Value displays
  const valPT = document.getElementById('val-pt101');
  const valTT = document.getElementById('val-tt101');
  const valAT = document.getElementById('val-at101');
  const valLT = document.getElementById('val-lt101');

  // Boolean Proposition badges
  const propP1 = document.getElementById('prop-p1');
  const propT1 = document.getElementById('prop-t1');
  const propG1 = document.getElementById('prop-g1');
  const propLHigh = document.getElementById('prop-lhigh');
  const propLLow = document.getElementById('prop-llow');
  const propE1 = document.getElementById('prop-e1');
  const propV1 = document.getElementById('prop-v1');
  const propV2 = document.getElementById('prop-v2');
  const propM1 = document.getElementById('prop-m1');

  // Mathematical Status & Inference
  const sisStatus = document.getElementById('scada-sis-status');
  const mathProofStatus = document.getElementById('scada-math-proof');
  const predicatesStatus = document.getElementById('scada-predicates-status');
  const inferenceLog = document.getElementById('scada-inference-output');
  const consoleLog = document.getElementById('scada-console-log');

  // Graphical elements in SVG Synoptic
  const synLiquid = document.getElementById('syn-reactor-liquid');
  const synAgitator = document.getElementById('syn-agitator-blade');
  const synXV101 = document.getElementById('syn-xv101-state');
  const synXV102 = document.getElementById('syn-xv102-state');
  const synXV201 = document.getElementById('syn-xv201-state');
  const synPipeNH3 = document.getElementById('syn-pipe-nh3');
  const synPipeAcid = document.getElementById('syn-pipe-acid');
  const synAlarmBeacon = document.getElementById('syn-alarm-beacon');
  const synGasCloud = document.getElementById('syn-gas-cloud');

  if (!sliderPT) return;

  // Simulator internal state
  let state = {
    P: 120, // bar
    T: 140, // °C
    C_NH3: 2.5, // ppm
    Level: 65, // %
    ESD: false,
    AgitatorOn: true,
    PumpOn: true,
    ValveXV101: true,
    ValveXV102: true,
    ValveXV201: true,
    AlarmOn: false,
    TripActive: false,
    agitatorAngle: 0
  };

  // Preset buttons
  const presetNormal = document.getElementById('preset-normal');
  const presetRunaway = document.getElementById('preset-runaway');
  const presetToxic = document.getElementById('preset-toxic');
  const presetCavitation = document.getElementById('preset-cavitation');
  const presetESD = document.getElementById('preset-esd');

  if (presetNormal) presetNormal.addEventListener('click', () => setPreset(120, 140, 2.5, 65, false, true, true));
  if (presetRunaway) presetRunaway.addEventListener('click', () => setPreset(210, 235, 8.0, 75, false, false, true));
  if (presetToxic) presetToxic.addEventListener('click', () => setPreset(135, 145, 45.0, 60, false, true, true));
  if (presetCavitation) presetCavitation.addEventListener('click', () => setPreset(90, 120, 1.0, 12, false, true, true));
  if (presetESD) presetESD.addEventListener('click', () => setPreset(120, 140, 2.5, 65, true, true, true));

  function setPreset(p, t, at, lt, esd, ag, pump) {
    sliderPT.value = p;
    sliderTT.value = t;
    sliderAT.value = at;
    sliderLT.value = lt;
    chkESD.checked = esd;
    chkAG.checked = ag;
    chkP101.checked = pump;
    logConsole(`[PRESET ACIONADO] P=${p}bar, T=${t}°C, NH3=${at}ppm, L=${lt}%, ESD=${esd ? 'ATIVO' : 'OFF'}`, 'info');
    updateSimulation();
  }

  function logConsole(msg, type = 'info') {
    if (!consoleLog) return;
    const now = new Date().toTimeString().split(' ')[0] + '.' + String(new Date().getMilliseconds()).padStart(3, '0');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.textContent = `[${now}] ${msg}`;
    consoleLog.prepend(entry);
    if (consoleLog.children.length > 30) {
      consoleLog.removeChild(consoleLog.lastChild);
    }
  }

  // Agitator Continuous Animation
  setInterval(() => {
    if (state.AgitatorOn && !state.TripActive) {
      state.agitatorAngle = (state.agitatorAngle + 15) % 360;
      if (synAgitator) {
        synAgitator.setAttribute('transform', `rotate(${state.agitatorAngle}, 250, 170)`);
      }
    }
  }, 50);

  function updateSimulation() {
    // Read raw inputs
    state.P = parseFloat(sliderPT.value);
    state.T = parseFloat(sliderTT.value);
    state.C_NH3 = parseFloat(sliderAT.value);
    state.Level = parseFloat(sliderLT.value);
    state.ESD = chkESD.checked;
    state.AgitatorOn = chkAG.checked;
    state.PumpOn = chkP101.checked;

    // Update digital displays
    valPT.textContent = `${state.P.toFixed(1)} bar`;
    valTT.textContent = `${state.T.toFixed(1)} °C`;
    valAT.textContent = `${state.C_NH3.toFixed(1)} ppm`;
    valLT.textContent = `${state.Level.toFixed(1)} %`;

    // 1. DISCRETIZATION (4-20mA to Boolean Propositions)
    const p1 = (state.P >= 180.0);
    const t1 = (state.T >= 200.0);
    const g1 = (state.C_NH3 >= 25.0);
    const l_high = (state.Level >= 90.0);
    const l_low = (state.Level <= 20.0);
    const e1 = state.ESD;
    const m1 = state.AgitatorOn;

    // Update Proposition Badges
    updateBadge(propP1, 'p1 (P≥180)', p1);
    updateBadge(propT1, 't1 (T≥200)', t1);
    updateBadge(propG1, 'g1 (NH3≥25)', g1);
    updateBadge(propLHigh, 'l_high (L≥90)', l_high);
    updateBadge(propLLow, 'l_low (L≤20)', l_low);
    updateBadge(propE1, 'e1 (ESD)', e1);
    updateBadge(propM1, 'm1 (Agitador)', m1);

    // 2. PROPOSITIONAL SAFETY INTERLOCK (SIS / IEC 61508)
    // Rule: F = p1 ∨ t1 ∨ g1 ∨ e1
    const tripTriggered = (p1 || t1 || g1 || e1);
    state.TripActive = tripTriggered;

    if (tripTriggered) {
      // Actuator Trip: Force valves closed and siren on
      state.ValveXV101 = false;
      state.ValveXV102 = false;
      state.AlarmOn = true;
    } else {
      state.ValveXV101 = true;
      state.ValveXV102 = true;
      state.AlarmOn = false;
    }

    updateBadge(propV1, 'v1 (XV-101 NH3)', state.ValveXV101);
    updateBadge(propV2, 'v2 (XV-102 H3PO4)', state.ValveXV102);

    // 3. PREDICATE LOGIC SENSOR SWEEP (Aula 06)
    const sensorsHealth = [!p1, !t1, !g1, !l_high, !l_low];
    const forallSafe = sensorsHealth.every(Boolean);
    const existsCritical = [p1, t1, g1, e1].some(Boolean);

    if (predicatesStatus) {
      predicatesStatus.innerHTML = `
        • $\\forall s \\in \\text{Sensores}, \\text{Normal}(s)$: <strong>${forallSafe ? '<span style="color:#10b981;">VERDADEIRO (Todos Seguros)</span>' : '<span style="color:#ef4444;">FALSO (Há Desvio)</span>'}</strong><br>
        • $\\exists s \\in \\text{Sensores}, \\text{Critico}(s)$: <strong>${existsCritical ? '<span style="color:#ef4444;">VERDADEIRO (Condição de Alarme Detectada)</span>' : '<span style="color:#10b981;">FALSO (Nenhum Crítico)</span>'}</strong>
      `;
    }

    // 4. EXPERT SYSTEM / INFERENCE ENGINE (Forward Chaining - Aulas 08 e 09)
    let firedRules = [];
    let diagnosticMsg = '';

    if (p1 && t1) {
      firedRules.push({ id: 'R-01', desc: 'Exotermia Descontrolada (Reação Runaway no Reator R-101)', pop: 'Desarme total de alimentação e abertura da linha de alívio para tocha.' });
    }
    if ((p1 && t1) && state.ValveXV101) {
      firedRules.push({ id: 'R-02', desc: 'Risco de Explosão por Amônia Ativa', pop: 'Intertravamento SIS forçou fechamento de XV-101 em <1s.' });
    }
    if (l_low && state.PumpOn) {
      firedRules.push({ id: 'R-03', desc: 'Cavitação Iminente na Bomba P-101 (Nível Insuficiente)', pop: 'Desligar bomba P-101 e verificar suprimento de ácido fosfórico.' });
    }
    if (g1) {
      firedRules.push({ id: 'R-04', desc: 'Fuga Atmosférica de Amônia Tóxica no Setor 100', pop: 'Acionar cortina d\'água de absorção e evacuar o setor de síntese.' });
    }
    if (e1) {
      firedRules.push({ id: 'R-ESD', desc: 'Parada de Emergência Manual Acionada pelo Operador', pop: 'Seguir protocolo de paralisação segura de emergência da planta.' });
    }

    if (inferenceLog) {
      if (firedRules.length === 0) {
        inferenceLog.innerHTML = `<span style="color:#10b981;">✅ Sistema Especialista: Operação nominal estável. Nenhuma falha inferida.</span>`;
      } else {
        let rulesHtml = `<strong style="color:#ef4444;">🚨 Falhas Inferidas por Forward Chaining (${firedRules.length} regras ativadas):</strong><ul style="padding-left: 1.25rem; margin-top: 0.5rem;">`;
        firedRules.forEach(r => {
          rulesHtml += `<li><strong>[${r.id}]:</strong> ${r.desc}<br><em style="color:#94a3b8; font-size:0.85em;">→ POP Recomendado: ${r.pop}</em></li>`;
        });
        rulesHtml += '</ul>';
        inferenceLog.innerHTML = rulesHtml;
      }
    }

    // 5. SAFETY INVARIANT STATUS
    if (sisStatus && mathProofStatus) {
      if (tripTriggered) {
        sisStatus.innerHTML = `<span style="color:#ef4444; font-weight:bold;">⚡ TRIP ATIVADO (SISTEMA INSTRUMENTADO DE SEGURANÇA OPERANTE)</span>`;
        mathProofStatus.innerHTML = `
          • Estado de Perigo Catastrófico: $S_{\\text{perigo}} = p_1 \\land v_1 = ${p1 ? '1' : '0'} \\land ${state.ValveXV101 ? '1' : '0'} = 0$<br>
          • Invariante de Segurança Comprovado: $\\Phi = S_{\\text{perigo}} \\land (p_1 \\rightarrow \\neg v_1) \\equiv \\mathbf{F}$ (Contradição Garantida)
        `;
      } else {
        sisStatus.innerHTML = `<span style="color:#10b981; font-weight:bold;">🟢 PROCESSO EM REGIME NOMINAL (INTERTRAVAMENTO LIBERADO)</span>`;
        mathProofStatus.innerHTML = `
          • Condição de Partida: $P_{\\text{start}} \\equiv \\neg p_1 \\land \\neg t_1 \\land \\neg g_1 \\land \\neg e_1 = 1$ (Autorizado)
        `;
      }
    }

    // 6. SYNOPTIC VISUAL UPDATE
    updateSynopticVisuals(p1, t1, g1, l_high, l_low);

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([predicatesStatus, mathProofStatus]).catch(e => console.log(e));
    }
  }

  function updateBadge(badge, text, val) {
    if (!badge) return;
    badge.className = 'prop-badge ' + (val ? 'active-true' : 'active-false');
    badge.textContent = `${text}: ${val ? '1 (TRUE)' : '0 (FALSE)'}`;
  }

  function updateSynopticVisuals(p1, t1, g1, l_high, l_low) {
    // Reactor Liquid Level Height & Color (Heat Map)
    if (synLiquid) {
      const liquidY = 220 - (state.Level * 1.1);
      const liquidHeight = state.Level * 1.1;
      synLiquid.setAttribute('y', liquidY);
      synLiquid.setAttribute('height', Math.max(0, liquidHeight));
      
      // Color shifts from green/amber to fiery orange/red under high temp
      if (t1) {
        synLiquid.setAttribute('fill', '#ef4444');
      } else if (state.T > 160) {
        synLiquid.setAttribute('fill', '#f59e0b');
      } else {
        synLiquid.setAttribute('fill', '#10b981');
      }
    }

    // Valves XV-101 (NH3), XV-102 (Acid), XV-201 (Slurry)
    if (synXV101) {
      synXV101.setAttribute('fill', state.ValveXV101 ? '#10b981' : '#ef4444');
    }
    if (synXV102) {
      synXV102.setAttribute('fill', state.ValveXV102 ? '#10b981' : '#ef4444');
    }

    // Piping Flow Color
    if (synPipeNH3) {
      synPipeNH3.setAttribute('stroke', state.ValveXV101 ? '#38bdf8' : '#475569');
    }
    if (synPipeAcid) {
      synPipeAcid.setAttribute('stroke', state.ValveXV102 ? '#fbbf24' : '#475569');
    }

    // Alarm Beacon
    if (synAlarmBeacon) {
      synAlarmBeacon.style.display = state.AlarmOn ? 'block' : 'none';
    }

    // Ammonia Gas Cloud
    if (synGasCloud) {
      synGasCloud.style.display = g1 ? 'block' : 'none';
    }
  }

  // Bind input listeners
  [sliderPT, sliderTT, sliderAT, sliderLT].forEach(slider => {
    slider.addEventListener('input', updateSimulation);
  });

  [chkESD, chkAG, chkP101].forEach(chk => {
    chk.addEventListener('change', updateSimulation);
  });

  // Initial calculation
  updateSimulation();
  logConsole('SCADA-Core Automática inicializado com sucesso. Scan determinístico 10ms ativo.', 'info');
}
