/* ============================================================
   MOTOR DE NOVELA VISUAL — Héroes de Colombia
   ============================================================ */

const Engine = (() => {

  // ── Estado del juego ──────────────────────────────────────
  const state = {
    nodeId:      'start',
    lineIndex:   0,
    flags:       new Set(),
    fidelity:    60,
    patriotTrust: 50,
    suspicion:   20,
    choices:     [],
    notes:       [],
    actId:       'act1',
    heroId:      'pola',
    isTyping:    false,
    inputLocked: false,
  };

  let currentNode   = null;
  let typewriterTimer = null;

  // ── DOM ───────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const DOM = {};

  function initDOM() {
    DOM.sceneBg        = $('scene-bg');
    DOM.charSilhouette = $('character-silhouette');
    DOM.charContainer  = $('character-container');
    DOM.dlgPanel       = $('dialogue-panel');
    DOM.speakerPortrait= $('speaker-portrait');
    DOM.speakerName    = $('speaker-name');
    DOM.speakerRole    = $('speaker-role');
    DOM.dlgText        = $('dialogue-text');
    DOM.continueArrow  = $('continue-arrow');
    DOM.choicePanel    = $('choice-panel');
    DOM.choiceQuestion = $('choice-question');
    DOM.choiceContext  = $('choice-context');
    DOM.choicesWrap    = $('choices-wrap');
    DOM.notePanel      = $('note-panel');
    DOM.noteYear       = $('note-year');
    DOM.noteTitle      = $('note-title');
    DOM.noteBody       = $('note-body');
    DOM.noteClose      = $('note-close');
    DOM.actIntro       = $('act-intro');
    DOM.actNumber      = $('act-number');
    DOM.actTitle       = $('act-title');
    DOM.actHistorical  = $('act-historical');
    DOM.actContinue    = $('act-continue');
    DOM.endingScreen   = $('ending-screen');
    DOM.endingType     = $('ending-type');
    DOM.endingTitle    = $('ending-title');
    DOM.endingBody     = $('ending-body');
    DOM.endingQuote    = $('ending-quote');
    DOM.endingRestart  = $('ending-restart');
    DOM.mainMenu       = $('main-menu');
    DOM.fadeOverlay    = $('fade-overlay');
    DOM.pauseMenu      = $('pause-menu');
    DOM.fidelityBar    = $('fidelity-bar');
    DOM.noteToast      = $('note-toast');
    DOM.noteToastText  = $('note-toast-text');
    DOM.hudTitle       = $('hud-title');
    DOM.bgImage        = $('bg-image');
    DOM.charImage      = $('char-image');
    DOM.heroesPanel    = $('heroes-panel');
    DOM.heroesClose    = $('heroes-close');
    DOM.heroesGrid     = $('heroes-grid');
    DOM.logrosPanel    = $('logros-panel');
    DOM.logrosClose    = $('logros-close');
    DOM.logrosContent  = $('logros-content');
    // Minijuego
    DOM.mgOverlay      = $('minigame-overlay');
    DOM.mgTitle        = $('mg-title');
    DOM.mgTimer        = $('mg-timer');
    DOM.mgInstr        = $('mg-instructions');
    DOM.mgArena        = $('mg-arena');
    DOM.mgResult       = $('mg-result');
    // Panel minijuegos
    DOM.mgpPanel       = $('minigames-panel');
    DOM.mgpClose       = $('mgp-close');
    DOM.mgpList        = $('mgp-list');
    // Panel selector de héroe
    DOM.hsPanel        = $('hero-select-panel');
    DOM.hsClose        = $('hs-close');
    DOM.hsList         = $('hs-list');
  }

  // ── Typewriter ────────────────────────────────────────────
  function typewrite(text, className, cb) {
    if (typewriterTimer) clearInterval(typewriterTimer);
    DOM.dlgText.className = className || '';
    DOM.dlgText.textContent = '';
    DOM.continueArrow.classList.remove('visible');
    state.isTyping = true;

    let i = 0;
    const full = text;
    const delay = (c) => {
      if (c === '.' || c === '!' || c === '?') return 55;
      if (c === ',' || c === ';' || c === ':') return 30;
      if (c === '—' || c === '…')              return 60;
      return 28;
    };

    function tick() {
      if (i >= full.length) {
        state.isTyping = false;
        DOM.continueArrow.classList.add('visible');
        if (cb) cb();
        return;
      }
      DOM.dlgText.textContent = full.slice(0, i + 1);
      i++;
      typewriterTimer = setTimeout(tick, delay(full[i - 1]));
    }
    tick();
  }

  function skipTypewrite() {
    if (!state.isTyping) return false;
    if (typewriterTimer) clearTimeout(typewriterTimer);
    const node = currentNode;
    if (!node) return false;
    const line = node.lines[state.lineIndex];
    DOM.dlgText.textContent = line.text;
    state.isTyping = false;
    DOM.continueArrow.classList.add('visible');
    return true;
  }

  // ── Fondo de escena ───────────────────────────────────────
  function setBackground(bg) {
    DOM.sceneBg.className = bg ? `bg-${bg}` : '';
  }

  let _currentBgSrc = '';
  function setBackgroundImage(src) {
    if (!DOM.bgImage) return;
    if (!src) {
      DOM.bgImage.classList.remove('visible');
      _currentBgSrc = '';
      return;
    }
    if (src === _currentBgSrc) return;
    _currentBgSrc = src;
    DOM.bgImage.classList.remove('visible');
    DOM.bgImage.src = src;
    DOM.bgImage.onload  = () => DOM.bgImage.classList.add('visible');
    DOM.bgImage.onerror = () => DOM.bgImage.classList.remove('visible');
  }

  let _currentCharSrc = '';
  function setCharacterImage(src) {
    if (!DOM.charImage) return;
    if (!src) {
      DOM.charImage.classList.remove('visible');
      _currentCharSrc = '';
      return;
    }
    if (src === _currentCharSrc) return;
    _currentCharSrc = src;
    DOM.charImage.classList.remove('visible');
    DOM.charImage.src = src;
    DOM.charImage.onload  = () => DOM.charImage.classList.add('visible');
    DOM.charImage.onerror = () => DOM.charImage.classList.remove('visible');
  }

  // ── Speakers ──────────────────────────────────────────────
  const SPEAKERS = {
    // La Pola
    pola:       { name: 'Policarpa',     role: 'La Pola',                emoji: '👤', color: '#d4943a' },
    alejo:      { name: 'Alejo',         role: 'Alejo Sabaraín',         emoji: '🗣', color: '#7ab8a0' },
    dominga:    { name: 'Dominga',       role: 'Lavandera patriota',     emoji: '🗣', color: '#b0a070' },
    padreM:     { name: 'Padre Marcos',  role: 'Sacerdote',              emoji: '✝', color: '#a0a8c0' },
    coronel:    { name: 'Cnel. González',role: 'Ejército Realista',      emoji: '⚔', color: '#8a5050' },
    samano:     { name: 'Virrey Sámano', role: 'Virrey de Nueva Granada',emoji: '👑', color: '#6a3030' },
    dona:       { name: 'Doña Inés',     role: 'Patriota encubierta',    emoji: '🗣', color: '#b09070' },
    miguel:     { name: 'Miguel',        role: 'Campesino',              emoji: '🗣', color: '#908060' },
    joaquin:    { name: 'Joaquín',       role: 'Patriota',               emoji: '🗣', color: '#70a080' },
    soldado:    { name: 'Soldado',       role: 'Ejército Realista',      emoji: '⚔', color: '#7a5050' },
    // Bolívar
    bolivar_sp: { name: 'Simón Bolívar', role: 'El Libertador',          emoji: '⚔', color: '#c0a030' },
    soublette:  { name: 'Soublette',     role: 'Coronel patriota',       emoji: '🗣', color: '#80a090' },
    rondon:     { name: 'Rondón',        role: 'Mayor de caballería',    emoji: '🐴', color: '#a07040' },
    paez:       { name: 'Páez',          role: 'General de los llanos',  emoji: '🗣', color: '#907050' },
    // Nariño
    narino_sp:  { name: 'Antonio Nariño',role: 'El Precursor',           emoji: '📜', color: '#80b0c0' },
    amigo_narino:{ name: 'Pedro',        role: 'Amigo de confianza',     emoji: '🗣', color: '#708090' },
    fiscal_narino:{ name: 'Fiscal',      role: 'Tribunal colonial',      emoji: '⚖', color: '#806050' },
    restrepo:   { name: 'Restrepo',      role: 'Secretario de Estado',   emoji: '🗣', color: '#708070' },
    // Beltrán
    beltran_sp: { name: 'Manuela',       role: 'La Chispa',              emoji: '🔥', color: '#c06030' },
    galan_sp:   { name: 'José Galán',    role: 'Líder comunero',         emoji: '⚔', color: '#a05030' },
    corregidor_sp:{ name: 'Corregidor', role: 'Autoridad colonial',      emoji: '👑', color: '#706050' },
    comunero_sp:{ name: 'Vecino',        role: 'Comunero del Socorro',   emoji: '🗣', color: '#907050' },
    // Santander
    santander_sp:{ name: 'Santander',   role: 'El Hombre de las Leyes', emoji: '⚖', color: '#8090b0' },
    congresista:{ name: 'Congresista',   role: 'Congreso de la República',emoji: '🗣', color: '#708080' },
    // Genéricos
    narrador:   { name: '',              role: 'Narrador',               emoji: '📜', color: '#8899bb' },
    pensar:     { name: '',              role: 'Pensamiento interior',   emoji: '💭', color: '#a090c0' },
  };

  // ── Metadatos por héroe ───────────────────────────────────
  const HEROES_META = {
    pola: {
      name:      'Policarpa Salavarrieta',
      alias:     'La Pola · Bogotá, 1817',
      thumb:     'images/pola_neutral.svg',
      cardImg:   'images/pola_decidida.svg',
      logrosKey: 'pola_logros',
      startNode: 'act1_intro',
      unlocked:  true,
      endings: [
        { id: 'ending_canon',      icon: '🕯', title: 'La Mártir',          desc: 'Murió con dignidad histórica en la Plaza Mayor' },
        { id: 'ending_victoria',   icon: '⚔', title: 'Victoria Silenciosa', desc: 'Completó la misión con plena fidelidad patriota' },
        { id: 'ending_fuga',       icon: '🌿', title: 'La Fuga',             desc: 'Escapó de Bogotá hacia la libertad' },
        { id: 'ending_sacrificio', icon: '⚖', title: 'El Sacrificio',       desc: 'Suplicó clemencia ante el tribunal realista' },
        { id: 'ending_doble',      icon: '🎭', title: 'La Doble Agente',     desc: 'Engañó al Coronel González con información falsa' },
      ],
    },
    bolivar: {
      name:      'Simón Bolívar',
      alias:     'El Libertador · 1819',
      thumb:     'images/bolivar_lider.svg',
      cardImg:   'images/bolivar_lider.svg',
      logrosKey: 'bolivar_logros',
      startNode: 'bolivar_intro',
      unlocked:  true,
      endings: [
        { id: 'bolivar_ending_libertador',  icon: '★', title: 'El Libertador',       desc: 'Liberó cinco naciones con fidelidad épica' },
        { id: 'bolivar_ending_canon',       icon: '⚔', title: 'Victoria de Boyacá',  desc: 'La batalla decisiva de la independencia' },
        { id: 'bolivar_ending_tirano',      icon: '⚠', title: 'El Precio del Poder', desc: 'La victoria ensombrecida por decisiones duras' },
        { id: 'bolivar_ending_sombra',      icon: '🌑', title: 'La Sombra del Héroe', desc: 'Victoria incompleta, conciencia cargada' },
        { id: 'bolivar_ending_diplomatico', icon: '🕊', title: 'La Paz Negociada',    desc: 'Independencia sin la batalla definitiva' },
      ],
    },
    narino: {
      name:      'Antonio Nariño',
      alias:     'El Precursor · 1794',
      thumb:     'images/narino_leyendo.svg',
      cardImg:   'images/narino_imprenta.svg',
      logrosKey: 'narino_logros',
      startNode: 'narino_intro',
      unlocked:  true,
      endings: [
        { id: 'narino_ending_canon',      icon: '📜', title: 'El Precursor',          desc: 'Las ideas que imprimió sembraron la independencia' },
        { id: 'narino_ending_revolucion', icon: '🔥', title: 'Revolución de las Ideas',desc: 'Cien copias, un juicio y un escape legendario' },
        { id: 'narino_ending_martir',     icon: '⛓', title: 'El Precio de las Ideas', desc: 'La prisión como martirio y mayor sermón' },
        { id: 'narino_ending_silencio',   icon: '🤐', title: 'La Prudencia',           desc: 'Sobrevivir con el silencio impuesto' },
        { id: 'narino_ending_exilio',     icon: '🌊', title: 'La Semilla en el Viento',desc: 'Ideas enviadas desde el exilio europeo' },
      ],
    },
    beltran: {
      name:      'Manuela Beltrán',
      alias:     'La Chispa · 1781',
      thumb:     'images/beltran_desafiante.svg',
      cardImg:   'images/beltran_marchando.svg',
      logrosKey: 'beltran_logros',
      startNode: 'beltran_intro',
      unlocked:  true,
      endings: [
        { id: 'beltran_ending_canon',       icon: '🔥', title: 'La Chispa',            desc: 'El gesto que encendió la primera gran rebelión' },
        { id: 'beltran_ending_llama',       icon: '⚡', title: 'El Fuego Incontenible', desc: 'La llama que tardó cuarenta años en apagar el Imperio' },
        { id: 'beltran_ending_traicion',    icon: '😔', title: 'Las Capitulaciones',    desc: 'La firma que traicionó la rebelión' },
        { id: 'beltran_ending_prudencia',   icon: '🕊', title: 'La Organización',       desc: 'La red secreta que creció silenciosa' },
        { id: 'beltran_ending_negociacion', icon: '🤝', title: 'La Presión Permanente', desc: 'Negociar sin disolver el ejército' },
      ],
    },
    santander: {
      name:      'Francisco de Paula Santander',
      alias:     'El Hombre de las Leyes · 1821',
      thumb:     'images/santander_estadista.svg',
      cardImg:   'images/santander_estadista.svg',
      logrosKey: 'santander_logros',
      startNode: 'santander_intro',
      unlocked:  true,
      endings: [
        { id: 'santander_ending_canon',      icon: '⚖', title: 'El Hombre de las Leyes',desc: 'Construyó la república con leyes y escuelas' },
        { id: 'santander_ending_republica',  icon: '🏛', title: 'La República Perfecta', desc: 'La tradición constitucional más sólida del siglo XIX' },
        { id: 'santander_ending_lealtad',    icon: '🛡', title: 'La Lealtad al Libertador',desc: 'Apoyó a Bolívar y pagó el costo político' },
        { id: 'santander_ending_pragmatico', icon: '⚔', title: 'El Costo de lo Posible', desc: 'Pragmatismo en tiempos imposibles' },
        { id: 'santander_ending_exilio',     icon: '🌊', title: 'El Exilio Honorable',    desc: 'Exiliado por defender la constitución' },
      ],
    },
  };

  // ── Claves de guardado por héroe ─────────────────────────
  const SAVE_KEY = heroId => `heroes_save_${heroId}`;

  // ── Metadatos de minijuegos (para el panel libre) ─────────
  const MINIGAMES_META = [
    {
      id:        'boyaca_puente',
      heroId:    'bolivar',
      heroName:  'Simón Bolívar',
      icon:      '⚔',
      title:     'El Puente de Boyacá',
      desc:      'Apunta el cañón y dispara: 6 balas, 4 impactos para ganar. Los realistas marchan — ¡no los dejes cruzar el puente!',
      scoreKey:  'mg_score_boyaca',
      scoreLabel(raw) {
        if (!raw) return null;
        const s = JSON.parse(raw);
        return `Mejor: ${s.best} impactos · Victorias: ${s.wins}`;
      },
      instructions: 'Arrastra el dedo para apuntar el cañón, suelta para disparar. ¡Impacta a los soldados realistas!',
    },
    {
      id:        'la_imprenta',
      heroId:    'narino',
      heroName:  'Antonio Nariño',
      icon:      '📜',
      title:     'La Imprenta Clandestina',
      desc:      'Encuentra los 6 pares de Derechos del Hombre en 45 segundos. Los soldados se acercan — ¡no falles!',
      scoreKey:  'mg_score_imprenta',
      scoreLabel(raw) {
        if (!raw) return null;
        const s = JSON.parse(raw);
        return `Victorias: ${s.wins} · Mejor: ${s.best ?? 0}/6 pares`;
      },
      instructions: 'Toca dos cartas para voltearlas. Si son iguales, ¡par encontrado! Encuentra los 6 pares antes de que lleguen.',
    },
    {
      id:        'convoca_al_pueblo',
      heroId:    'beltran',
      heroName:  'Manuela Beltrán',
      icon:      '🔥',
      title:     'Convoca al Pueblo',
      desc:      'Coloca 3 chispas estratégicamente e inicia la revolución. El fuego se propaga — necesitas convencer 14 de 20 vecinos.',
      scoreKey:  'mg_score_convoca',
      scoreLabel(raw) {
        if (!raw) return null;
        const s = JSON.parse(raw);
        return `Mejor: ${s.best}/20 convencidos · Victorias: ${s.wins}`;
      },
      instructions: 'Elige bien dónde colocar las chispas: 🟢 fácil, 🟡 medio, 🔴 difícil. Luego inicia la revolución.',
    },
  ];

  // ── Scores de minijuegos (localStorage) ──────────────────
  function getMgScore(meta) {
    try { return localStorage.getItem(meta.scoreKey); }
    catch(e) { return null; }
  }

  function saveMgScore(meta, win, data) {
    try {
      const raw  = localStorage.getItem(meta.scoreKey);
      const prev = raw ? JSON.parse(raw) : { wins: 0, plays: 0, best: 0 };
      prev.plays++;
      if (win) prev.wins++;
      if (data.score !== undefined && data.score > prev.best) prev.best = data.score;
      localStorage.setItem(meta.scoreKey, JSON.stringify(prev));
    } catch(e) {}
  }

  // ── Panel Minijuegos ──────────────────────────────────────
  let _mgFromPanel = false;   // true cuando se juega desde el panel libre

  function openMinigamesPanel() {
    if (!DOM.mgpList) return;
    DOM.mgpList.innerHTML = '';

    MINIGAMES_META.forEach(meta => {
      const raw   = getMgScore(meta);
      const label = meta.scoreLabel(raw);

      const card = document.createElement('div');
      card.className = 'mgp-card';
      card.innerHTML = `
        <div class="mgp-card-top">
          <div class="mgp-icon">${meta.icon}</div>
          <div class="mgp-info">
            <div class="mgp-name">${meta.title}</div>
            <div class="mgp-hero">${meta.heroName}</div>
            <div class="mgp-desc">${meta.desc}</div>
            <div class="mgp-score ${label ? '' : 'no-score'}">${label || 'Aún no jugado'}</div>
          </div>
        </div>
        <div class="mgp-card-footer">
          <button class="mgp-play-btn" data-mg="${meta.id}">▶ Jugar</button>
        </div>`;
      DOM.mgpList.appendChild(card);
    });

    DOM.mgpList.addEventListener('click', _mgpClickHandler);
    DOM.mgpPanel.classList.add('visible');
  }

  function _mgpClickHandler(e) {
    const btn = e.target.closest('[data-mg]');
    if (!btn) return;
    const mgId = btn.dataset.mg;
    const meta = MINIGAMES_META.find(m => m.id === mgId);
    if (!meta) return;

    DOM.mgpList.removeEventListener('click', _mgpClickHandler);
    DOM.mgpPanel.classList.remove('visible');

    _mgFromPanel = true;
    const mg = {
      id:           meta.id,
      title:        meta.icon + ' ' + meta.title,
      instructions: meta.instructions,
      _meta:        meta,
      onSuccess:    { _panel: true },
      onFail:       { _panel: true },
    };
    startMinigame(mg);
  }

  function closeMinigamesPanel() {
    DOM.mgpPanel.classList.remove('visible');
    DOM.mgpList.removeEventListener('click', _mgpClickHandler);
  }

  // ── Logros — persisten entre partidas ────────────────────
  function getLogros(heroId) {
    try { return JSON.parse(localStorage.getItem(HEROES_META[heroId].logrosKey) || '[]'); }
    catch(e) { return []; }
  }

  function unlockEnding(endingId) {
    if (!endingId) return false;
    const hid  = state.heroId;
    const meta = HEROES_META[hid];
    if (!meta) return false;
    const list = getLogros(hid);
    if (list.includes(endingId)) return false;
    list.push(endingId);
    localStorage.setItem(meta.logrosKey, JSON.stringify(list));
    return true;
  }

  // ── Panel selector de héroe (jugar) ──────────────────────
  function openHeroSelectPanel() {
    if (!DOM.hsList) return;
    DOM.hsList.innerHTML = '';

    Object.entries(HEROES_META).forEach(([hid, meta]) => {
      const hasSave = !!localStorage.getItem(SAVE_KEY(hid));
      const logros  = getLogros(hid);
      const total   = (meta.endings || []).length;
      const found   = logros.length;

      const card = document.createElement('div');
      card.className = 'hs-card';
      card.innerHTML = `
        <div class="hs-card-art">
          <img src="${meta.cardImg}" class="hs-card-img"
               onerror="this.style.display='none'">
        </div>
        <div class="hs-card-info">
          <div class="hs-card-name">${meta.name}</div>
          <div class="hs-card-alias">${meta.alias}</div>
          ${hasSave  ? '<div class="hs-save-badge">Partida guardada</div>' : ''}
          ${found > 0 ? `<div class="hs-card-alias" style="color:var(--gold);margin-top:2px">${found}/${total} finales</div>` : ''}
        </div>
        <div class="hs-btns">
          ${hasSave ? `<button class="hs-btn primary"   data-action="continue" data-hero="${hid}">▶ Continuar</button>` : ''}
          <button class="hs-btn ${hasSave ? 'secondary' : 'primary'}" data-action="new" data-hero="${hid}">
            ${hasSave ? '↺ Nueva' : '▶ Jugar'}
          </button>
        </div>`;
      DOM.hsList.appendChild(card);
    });

    // Delegar eventos en el contenedor para evitar listeners huérfanos
    DOM.hsList.addEventListener('click', _hsClickHandler);
    DOM.hsPanel.classList.add('visible');
  }

  function _hsClickHandler(e) {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const hid    = btn.dataset.hero;
    const action = btn.dataset.action;

    DOM.hsList.removeEventListener('click', _hsClickHandler);
    closeHeroSelectPanel();
    hideMainMenu();

    if (action === 'continue') {
      fadeOut(() => {
        if (loadGame(hid)) loadNode(state.nodeId);
        else               startHero(hid);
      });
    } else {
      // Nueva partida — borra el save de ese héroe
      localStorage.removeItem(SAVE_KEY(hid));
      fadeOut(() => startHero(hid));
    }
  }

  function closeHeroSelectPanel() {
    DOM.hsPanel.classList.remove('visible');
    DOM.hsList.removeEventListener('click', _hsClickHandler);
  }

  // ── Panel Héroes (galería / logros) ──────────────────────
  function openHeroesPanel() {
    if (!DOM.heroesGrid) return;
    DOM.heroesGrid.innerHTML = '';

    Object.entries(HEROES_META).forEach(([hid, meta]) => {
      const logros  = getLogros(hid);
      const endings = meta.endings || [];
      const dots    = endings.map(e =>
        `<span class="ending-dot ${logros.includes(e.id) ? 'found' : ''}" title="${logros.includes(e.id) ? e.title : '?'}">●</span>`
      ).join('');

      const card = document.createElement('div');
      card.className = 'hero-card unlocked';
      card.dataset.heroId = hid;
      card.innerHTML = `
        <div class="hero-card-art">
          <img src="${meta.cardImg}" alt="${meta.name}" class="hero-card-img"
               onerror="this.style.display='none'">
        </div>
        <div class="hero-card-body">
          <div class="hero-card-name">${meta.name}</div>
          <div class="hero-card-alias">${meta.alias}</div>
          <div class="hero-card-dots">${dots}</div>
        </div>`;
      // La galería de Héroes es informativa — no inicia partida
    card.style.cursor = 'default';
      DOM.heroesGrid.appendChild(card);
    });

    DOM.heroesPanel.classList.add('visible');
  }

  function closeHeroesPanel() {
    DOM.heroesPanel.classList.remove('visible');
  }

  // ── Panel Logros ──────────────────────────────────────────
  function openLogrosPanel() {
    if (!DOM.logrosContent) return;
    DOM.logrosContent.innerHTML = '';

    Object.entries(HEROES_META).forEach(([hid, meta]) => {
      const logros  = getLogros(hid);
      const endings = meta.endings || [];
      const count   = endings.filter(e => logros.includes(e.id)).length;

      const sec = document.createElement('div');
      sec.className = 'logro-hero-section';

      const items = endings.map(e => {
        const found = logros.includes(e.id);
        return `<div class="logro-item ${found ? 'unlocked' : 'locked'}">
          <span class="logro-icon">${e.icon}</span>
          <div class="logro-info">
            <div class="logro-title">${found ? e.title : '???'}</div>
            <div class="logro-desc">${found ? e.desc : 'Completa la historia para descubrir este final'}</div>
          </div>
          <span class="logro-status">${found ? '✓' : '○'}</span>
        </div>`;
      }).join('');

      sec.innerHTML = `
        <div class="logro-hero-head">
          <img src="${meta.thumb}" alt="${meta.name}" class="logro-hero-thumb"
               onerror="this.style.display='none'">
          <div class="logro-hero-meta">
            <div class="logro-hero-name">${meta.name}</div>
            <div class="logro-hero-sub">${meta.alias}</div>
            <div class="logro-hero-count">${count} / ${endings.length} finales</div>
          </div>
        </div>
        ${items}`;
      DOM.logrosContent.appendChild(sec);
    });

    DOM.logrosPanel.classList.add('visible');
  }

  function closeLogrosPanel() {
    DOM.logrosPanel.classList.remove('visible');
  }

  // ── Speaker styling ───────────────────────────────────────
  function applySpeaker(speakerId) {
    const sp = SPEAKERS[speakerId] || { name: speakerId, role: '', emoji: '🗣', color: '#d4943a' };
    DOM.speakerPortrait.textContent   = sp.emoji;
    DOM.speakerPortrait.style.borderColor = sp.color;
    DOM.speakerName.textContent       = sp.name;
    DOM.speakerName.style.color       = sp.color;
    DOM.speakerRole.textContent       = sp.role;
    if (speakerId === 'narrador') return 'narrator';
    if (speakerId === 'pensar')   return 'thought';
    return '';
  }

  // ── Mostrar línea ─────────────────────────────────────────
  function showLine() {
    if (!currentNode || state.lineIndex >= currentNode.lines.length) return;
    const line = currentNode.lines[state.lineIndex];
    const cls  = applySpeaker(line.speaker);
    if (line.bg)              setBackground(line.bg);
    if ('bgImg' in line)      setBackgroundImage(line.bgImg);
    if ('char'  in line)      setCharacterImage(line.char);
    if (line.flags)           line.flags.forEach(f => applyFlag(f));
    if (line.note)            setTimeout(() => showNoteToast(line.note), 800);
    typewrite(line.text, cls);
  }

  // ── Avanzar ───────────────────────────────────────────────
  function advance() {
    if (state.inputLocked) return;
    if (state.isTyping) { skipTypewrite(); return; }
    state.lineIndex++;
    if (state.lineIndex >= currentNode.lines.length) {
      finishNode();
    } else {
      showLine();
    }
  }

  // ── Finalizar nodo ────────────────────────────────────────
  function finishNode() {
    const node = currentNode;
    if (node.noteOnExit) showNote(node.noteOnExit);

    // ¿Minijuego?
    if (node.minigame) { startMinigame(node.minigame); return; }

    // ¿Elecciones?
    if (node.choices && node.choices.length > 0) {
      const available = node.choices.filter(c => {
        if (c.require && !state.flags.has(c.require)) return false;
        if (c.block   &&  state.flags.has(c.block))   return false;
        return true;
      });
      if (available.length > 0) { showChoices(available, node); return; }
    }

    if (node.next) {
      const nextId = typeof node.next === 'function' ? node.next(state) : node.next;
      loadNode(nextId);
    }
  }

  // ── Elecciones ────────────────────────────────────────────
  function showChoices(choices, node) {
    state.inputLocked = true;
    DOM.continueArrow.classList.remove('visible');
    DOM.choiceQuestion.textContent = node.choiceQuestion || '¿Qué decides?';
    DOM.choiceContext.textContent  = node.choiceContext  || '';
    DOM.choicesWrap.innerHTML = '';

    choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = c.text + (c.hint ? `<span class="choice-hint">★ ${c.hint}</span>` : '');
      btn.addEventListener('click', () => selectChoice(c));
      DOM.choicesWrap.appendChild(btn);
      setTimeout(() => btn.classList.add('animated'), 80 + i * 120);
    });

    DOM.choicePanel.classList.add('visible');
  }

  function selectChoice(choice) {
    DOM.choicePanel.classList.remove('visible');
    state.inputLocked = false;
    state.choices.push(choice.id);
    if (choice.fidelity)  modifyFidelity(choice.fidelity);
    if (choice.trust)     state.patriotTrust = clamp(state.patriotTrust + choice.trust, 0, 100);
    if (choice.suspicion) state.suspicion    = clamp(state.suspicion + choice.suspicion, 0, 100);
    if (choice.setFlag)   [].concat(choice.setFlag).forEach(f => state.flags.add(f));
    if (choice.rmFlag)    [].concat(choice.rmFlag) .forEach(f => state.flags.delete(f));

    if (choice.reaction) {
      loadNodeDirect({
        id: '__reaction',
        lines: [{ speaker: 'narrador', text: choice.reaction }],
        next: choice.next,
      });
    } else {
      loadNode(choice.next);
    }
  }

  // ── Flags ─────────────────────────────────────────────────
  function applyFlag(f) {
    if (f.startsWith('-')) state.flags.delete(f.slice(1));
    else                   state.flags.add(f);
  }

  // ── Fidelidad ─────────────────────────────────────────────
  function modifyFidelity(delta) {
    state.fidelity = clamp(state.fidelity + delta, 0, 100);
    updateFidelityUI();
  }

  function updateFidelityUI() {
    const f = state.fidelity;
    let color;
    if      (f >= 80) color = 'linear-gradient(180deg, #d4943a 0%, #a06820 100%)';
    else if (f >= 60) color = 'linear-gradient(180deg, #a09050 0%, #706040 100%)';
    else if (f >= 40) color = 'linear-gradient(180deg, #707090 0%, #505060 100%)';
    else              color = 'linear-gradient(180deg, #604040 0%, #401818 100%)';
    DOM.fidelityBar.style.background = color;
  }

  // ── Cargar nodo ───────────────────────────────────────────
  function loadNode(nodeId) {
    if (!nodeId) return;
    const node = Story.nodes[nodeId];
    if (!node) { console.error('Nodo no encontrado:', nodeId); return; }
    loadNodeDirect(node);
  }

  function loadNodeDirect(node) {
    currentNode       = node;
    state.nodeId      = node.id;
    state.lineIndex   = 0;
    state.inputLocked = false;

    if (node.actIntro) { showActIntro(node.actIntro, () => showLine()); return; }
    if (node.ending)   { showEnding(node.ending, node.id); return; }
    if (node.note)     showNoteToast(node.note);

    showLine();
    saveGame();
  }

  // ── Intro de acto ─────────────────────────────────────────
  function showActIntro(data, cb) {
    state.inputLocked = true;
    DOM.actNumber.textContent     = data.number;
    DOM.actTitle.textContent      = data.title;
    DOM.actHistorical.textContent = data.historical;
    DOM.actContinue.classList.remove('visible');
    DOM.actIntro.classList.add('visible');
    setTimeout(() => {
      DOM.actContinue.classList.add('visible');
      DOM.actContinue.onclick = () => {
        DOM.actIntro.classList.remove('visible');
        state.inputLocked = false;
        cb();
      };
    }, 2800);
  }

  // ── Nota histórica ────────────────────────────────────────
  function showNote(note) {
    if (state.notes.includes(note.id)) return;
    state.notes.push(note.id);
    state.inputLocked = true;
    DOM.noteYear.textContent  = note.year  || 'Bogotá, 1817';
    DOM.noteTitle.textContent = note.title;
    DOM.noteBody.textContent  = note.body;
    DOM.notePanel.classList.add('visible');
    DOM.noteClose.onclick = () => {
      DOM.notePanel.classList.remove('visible');
      state.inputLocked = false;
    };
  }

  function showNoteToast(note) {
    if (state.notes.includes(note.id)) return;
    state.notes.push(note.id);
    DOM.noteToastText.textContent = `"${note.title}"`;
    DOM.noteToast.classList.add('visible');
    setTimeout(() => DOM.noteToast.classList.remove('visible'), 3500);
  }

  // ── Ending ────────────────────────────────────────────────
  function showEnding(ending, endingId) {
    const isNew = unlockEnding(endingId);
    setTimeout(() => {
      DOM.endingType.textContent  = ending.type;
      DOM.endingTitle.textContent = ending.title;
      DOM.endingBody.textContent  = ending.body;
      DOM.endingQuote.textContent = ending.quote || '';

      const oldBadge = DOM.endingScreen.querySelector('.logro-nuevo');
      if (oldBadge) oldBadge.remove();

      if (isNew) {
        const heroMeta = HEROES_META[state.heroId];
        const meta = heroMeta && heroMeta.endings.find(e => e.id === endingId);
        if (meta) {
          const badge = document.createElement('div');
          badge.className = 'logro-nuevo';
          badge.innerHTML = `${meta.icon} &nbsp;¡Nuevo final desbloqueado: <strong>${meta.title}</strong>!`;
          DOM.endingScreen.appendChild(badge);
        }
      }

      DOM.endingScreen.classList.add('visible');
    }, 600);
  }

  // ─────────────────────────────────────────────────────────
  // ── MINIJUEGOS ───────────────────────────────────────────
  // ─────────────────────────────────────────────────────────

  let _mgTimer    = null;
  let _mgInterval = null;
  let _mgRaf      = null;

  function clearMgTimers() {
    if (_mgTimer)    clearTimeout(_mgTimer);
    if (_mgInterval) clearInterval(_mgInterval);
    _mgTimer = _mgInterval = null;
  }

  function closeMinigame() {
    clearMgTimers();
    if (_mgRaf) { cancelAnimationFrame(_mgRaf); _mgRaf = null; }
    DOM.mgOverlay.classList.remove('visible');
    state.inputLocked = false;
  }

  function minigameEnd(success, mg, scoreData) {
    clearMgTimers();
    const outcome = success ? mg.onSuccess : mg.onFail;

    // Guardar score si viene del panel
    if (mg._meta) saveMgScore(mg._meta, success, scoreData || {});

    const winText  = success ? '⚔ ¡Victoria!' : '💨 Derrota…';
    const scoreStr = scoreData ? _scoreStr(mg.id, scoreData) : '';
    DOM.mgResult.innerHTML =
      `<div class="${success ? 'mg-result-win' : 'mg-result-fail'}">${winText}</div>` +
      (scoreStr ? `<div class="mg-result-score">${scoreStr}</div>` : '');
    DOM.mgResult.classList.add('visible');

    if (outcome._panel) {
      // Modo libre — volver al panel después de 2.2s
      _mgTimer = setTimeout(() => {
        closeMinigame();
        _mgFromPanel = false;
        openMinigamesPanel();
      }, 2200);
    } else {
      // Modo historia — continuar el nodo
      _mgTimer = setTimeout(() => {
        closeMinigame();
        if (outcome.fidelity) modifyFidelity(outcome.fidelity);
        if (outcome.setFlag)  state.flags.add(outcome.setFlag);
        loadNode(outcome.next);
      }, 1600);
    }
  }

  function _scoreStr(id, d) {
    if (id === 'boyaca_puente')     return `${d.hits ?? 0} impactos · ${d.shots ?? '?'} disparos`;
    if (id === 'la_imprenta')       return d.score === 6 ? `¡Todos los pares! · ${d.time ?? 0}s` : `${d.score ?? 0} / 6 pares`;
    if (id === 'convoca_al_pueblo') return `${d.score ?? 0} / 20 convencidos`;
    return '';
  }

  // ── Minijuego 1: El Puente de Boyacá — Cañón de física ──
  // Canvas: apunta arrastrando, suelta para disparar. 6 balas, 4 impactos para ganar.
  function startBoyaca(mg) {
    const W = 380, H = 360;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    canvas.style.cssText = 'width:100%;height:auto;display:block;touch-action:none;';
    DOM.mgArena.innerHTML = '';
    DOM.mgArena.style.cssText = 'padding:0;background:#060810;border-radius:6px;overflow:hidden;display:block;';
    DOM.mgArena.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const SHOTS_MAX = 6, WIN_HITS = 4, GRAVITY = 260, MARCH = 22;
    const CANNON = { x: 52, y: H - 52 };

    let shotsLeft = SHOTS_MAX, hits = 0;
    let ball = null;       // { x,y,vx,vy,r,trail:[] }
    let particles = [];    // { x,y,vx,vy,r,life,color }
    let aimPos = null;     // pointer position while aiming
    let gameOver = false, lastTs = 0;

    // 3 rows × 5 cols = 15 enemies
    const enemies = [];
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 5; c++)
        enemies.push({ x: 210 + c * 36, y: 55 + r * 72, alive: true, flash: 0 });

    function getCanvasPos(e) {
      const rect = canvas.getBoundingClientRect();
      const sx = W / rect.width, sy = H / rect.height;
      const src = e.touches ? e.touches[0] : e;
      return { x: (src.clientX - rect.left) * sx, y: (src.clientY - rect.top) * sy };
    }

    function fire() {
      if (!aimPos || ball || gameOver || shotsLeft <= 0) return;
      const dx = aimPos.x - CANNON.x, dy = aimPos.y - CANNON.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 20) return;
      const spd = Math.min(dist * 1.15, 500);
      ball = { x: CANNON.x, y: CANNON.y, vx: (dx / dist) * spd, vy: (dy / dist) * spd, r: 8, trail: [] };
      shotsLeft--;
      updateInstr();
    }

    function updateInstr() {
      DOM.mgInstr.textContent = '●'.repeat(shotsLeft) + '○'.repeat(SHOTS_MAX - shotsLeft) + `  ·  🎯 ${hits}/${WIN_HITS}`;
    }

    function spawnParticles(x, y) {
      const cols = ['#d4943a', '#e06030', '#f0c040', '#ff8020', '#ffffff'];
      for (let i = 0; i < 22; i++) {
        const a = Math.random() * Math.PI * 2, spd = 60 + Math.random() * 180;
        particles.push({ x, y, vx: Math.cos(a) * spd, vy: Math.sin(a) * spd, r: 2 + Math.random() * 4, life: 1, color: cols[i % 5] });
      }
    }

    canvas.addEventListener('touchstart', e => { e.preventDefault(); if (!ball && !gameOver) aimPos = getCanvasPos(e); }, { passive: false });
    canvas.addEventListener('touchmove',  e => { e.preventDefault(); if (aimPos) aimPos = getCanvasPos(e); }, { passive: false });
    canvas.addEventListener('touchend',   e => { e.preventDefault(); fire(); aimPos = null; }, { passive: false });
    canvas.addEventListener('mousedown',  e => { if (!ball && !gameOver) aimPos = getCanvasPos(e); });
    canvas.addEventListener('mousemove',  e => { if (aimPos) aimPos = getCanvasPos(e); });
    canvas.addEventListener('mouseup',    () => { fire(); aimPos = null; });
    canvas.addEventListener('mouseleave', () => { aimPos = null; });

    // ─── Draw functions ───────────────────────────────────
    function drawBg() {
      const sky = ctx.createLinearGradient(0, 0, 0, H * 0.54);
      sky.addColorStop(0, '#040710'); sky.addColorStop(1, '#0c1620');
      ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H * 0.54);
      // Dawn glow
      const sun = ctx.createRadialGradient(W * 0.74, H * 0.26, 0, W * 0.74, H * 0.26, 150);
      sun.addColorStop(0, 'rgba(180,100,20,0.18)'); sun.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sun; ctx.fillRect(0, 0, W, H * 0.54);
      // Mountain silhouettes
      ctx.fillStyle = '#070b10';
      ctx.beginPath(); ctx.moveTo(0, H * 0.55);
      [[40, 0.34], [110, 0.46], [185, 0.28], [260, 0.41], [340, 0.27], [W, 0.39]].forEach(([x, y]) => ctx.lineTo(x, H * y));
      ctx.lineTo(W, H * 0.55); ctx.fill();
      // Ground
      const gnd = ctx.createLinearGradient(0, H * 0.54, 0, H);
      gnd.addColorStop(0, '#181810'); gnd.addColorStop(1, '#080808');
      ctx.fillStyle = gnd; ctx.fillRect(0, H * 0.54, W, H * 0.46);
      // River of Boyacá
      ctx.fillStyle = 'rgba(18,38,65,0.55)';
      ctx.fillRect(0, H * 0.62, W, 14);
      ctx.strokeStyle = 'rgba(40,80,120,0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, H * 0.62 + 7); ctx.lineTo(W, H * 0.62 + 7); ctx.stroke();
    }

    function drawCannon() {
      const tx = aimPos ? aimPos.x : CANNON.x + 80, ty = aimPos ? aimPos.y : CANNON.y - 70;
      const angle = Math.atan2(ty - CANNON.y, tx - CANNON.x);
      // Wheel
      ctx.save(); ctx.translate(CANNON.x, CANNON.y + 12);
      ctx.fillStyle = '#3a2810'; ctx.strokeStyle = '#6b4820'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, 17, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#8b6030'; ctx.lineWidth = 1.5;
      for (let a = 0; a < 3; a++) {
        ctx.beginPath();
        ctx.moveTo(Math.cos(a * 1.05) * 17, Math.sin(a * 1.05) * 17);
        ctx.lineTo(Math.cos(a * 1.05 + Math.PI) * 17, Math.sin(a * 1.05 + Math.PI) * 17); ctx.stroke();
      }
      ctx.restore();
      // Barrel
      ctx.save(); ctx.translate(CANNON.x, CANNON.y); ctx.rotate(angle);
      ctx.fillStyle = '#5a3820'; ctx.strokeStyle = '#8b5e28'; ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-6, -7); ctx.lineTo(38, -7);
      ctx.arcTo(44, -7, 44, 0, 6); ctx.arcTo(44, 7, 38, 7, 6);
      ctx.lineTo(-6, 7); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#8b6030'; ctx.fillRect(32, -8, 8, 16);
      ctx.restore();
    }

    function drawTrajectory() {
      if (!aimPos || ball) return;
      const dx = aimPos.x - CANNON.x, dy = aimPos.y - CANNON.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 20) return;
      const spd = Math.min(dist * 1.15, 500), DT = 0.033;
      let px = CANNON.x, py = CANNON.y, pvx = (dx / dist) * spd, pvy = (dy / dist) * spd;
      ctx.save(); ctx.setLineDash([5, 10]);
      ctx.strokeStyle = 'rgba(212,148,58,0.5)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(px, py);
      for (let i = 0; i < 30; i++) {
        px += pvx * DT; py += pvy * DT; pvy += GRAVITY * DT;
        if (py > H + 20 || px < -20 || px > W + 20) break;
        ctx.lineTo(px, py);
      }
      ctx.stroke(); ctx.restore();
    }

    function drawEnemies() {
      const rowCols = ['#8a1010', '#6a1818', '#4a0808'];
      enemies.forEach(e => {
        if (!e.alive) return;
        ctx.save(); ctx.translate(e.x, e.y);
        if (e.flash > 0) ctx.translate((Math.random() - 0.5) * 5, 0);
        ctx.fillStyle = rowCols[Math.min(Math.round((e.y - 55) / 72), 2)];
        ctx.fillRect(-9, 0, 18, 22);
        ctx.beginPath(); ctx.arc(0, -8, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#1a0808';
        ctx.fillRect(-9, -18, 18, 8);
        ctx.beginPath(); ctx.moveTo(-11, -10); ctx.lineTo(11, -10);
        ctx.lineTo(7, -18); ctx.lineTo(-7, -18); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#c0a020'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, -18); ctx.quadraticCurveTo(4, -26, 2, -30); ctx.stroke();
        ctx.strokeStyle = '#706040'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(10, 0); ctx.lineTo(10, -24); ctx.stroke();
        ctx.strokeStyle = '#c0c090'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(10, -24); ctx.lineTo(14, -32); ctx.stroke();
        ctx.restore();
      });
    }

    function drawBall() {
      if (!ball) return;
      ball.trail.forEach((t, i) => {
        const alpha = (i / ball.trail.length) * 0.5;
        const r = ball.r * (i / ball.trail.length) * 0.7;
        if (r < 0.5) return;
        ctx.beginPath(); ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,80,10,${alpha})`; ctx.fill();
      });
      const g = ctx.createRadialGradient(ball.x - 2, ball.y - 2, 1, ball.x, ball.y, ball.r);
      g.addColorStop(0, '#d0d0c0'); g.addColorStop(1, '#383828');
      ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
    }

    function drawParticles() {
      particles.forEach(p => {
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.1, p.r * p.life), 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    // ─── Update loop ──────────────────────────────────────
    function update(dt) {
      enemies.forEach(e => {
        if (!e.alive) return;
        e.x -= MARCH * dt;
        if (e.flash > 0) e.flash -= dt;
      });

      if (ball) {
        ball.trail.push({ x: ball.x, y: ball.y });
        if (ball.trail.length > 14) ball.trail.shift();
        ball.x += ball.vx * dt;
        ball.y += ball.vy * dt;
        ball.vy += GRAVITY * dt;
        let hit = false;
        for (const e of enemies) {
          if (!e.alive || hit) continue;
          if (Math.abs(ball.x - e.x) < 18 && Math.abs(ball.y - (e.y + 7)) < 26) {
            e.alive = false; e.flash = 0.35;
            hits++; hit = true;
            spawnParticles(e.x, e.y + 5);
            updateInstr();
          }
        }
        if (hit || ball.y > H + 20 || ball.x < -20 || ball.x > W + 20) ball = null;
      }

      particles = particles.filter(p => {
        p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 100 * dt; p.life -= dt * 2.2;
        return p.life > 0;
      });

      if (!gameOver) {
        if (hits >= WIN_HITS) {
          gameOver = true;
          setTimeout(() => minigameEnd(true, mg, { score: hits, hits, shots: SHOTS_MAX - shotsLeft }), 500);
        } else if (shotsLeft <= 0 && !ball && particles.length === 0) {
          gameOver = true;
          setTimeout(() => minigameEnd(false, mg, { score: hits, hits, shots: SHOTS_MAX }), 600);
        } else if (enemies.filter(e => e.alive && e.x < 12).length >= 3) {
          gameOver = true;
          setTimeout(() => minigameEnd(false, mg, { score: hits, hits, shots: SHOTS_MAX - shotsLeft }), 300);
        }
      }
    }

    function loop(ts) {
      const dt = Math.min((ts - (lastTs || ts)) / 1000, 0.05);
      lastTs = ts;
      if (!gameOver) update(dt);
      ctx.clearRect(0, 0, W, H);
      drawBg(); drawTrajectory(); drawCannon();
      drawEnemies(); drawBall(); drawParticles();
      _mgRaf = requestAnimationFrame(loop);
    }

    DOM.mgTimer.textContent = '';
    updateInstr();
    _mgRaf = requestAnimationFrame(loop);
  }

  // ── Minijuego 2: La Imprenta — Cartas de Memoria ─────────
  // 3×4 grid, sin 3D — volteo con scaleX para máxima compatibilidad móvil
  function startImprenta(mg) {
    const PAIRS = [
      { id: 0, icon: '⚔', label: 'LIBERTAD',    col: '#c04040', bg: 'rgba(140,30,30,0.35)'  },
      { id: 1, icon: '⚖', label: 'IGUALDAD',    col: '#4878d0', bg: 'rgba(40,70,180,0.32)'  },
      { id: 2, icon: '🛡', label: 'SEGURIDAD',   col: '#38b060', bg: 'rgba(30,140,60,0.32)'  },
      { id: 3, icon: '🌿', label: 'PROPIEDAD',   col: '#78b030', bg: 'rgba(80,150,20,0.30)'  },
      { id: 4, icon: '📜', label: 'RESISTENCIA', col: '#d09030', bg: 'rgba(180,110,20,0.32)' },
      { id: 5, icon: '🕯', label: 'FRATERNIDAD', col: '#a060d0', bg: 'rgba(130,60,190,0.30)' },
    ];

    const deck = [...PAIRS, ...PAIRS].map((p, i) => ({ ...p, uid: i, flipped: false, matched: false }));
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    let selected = [], matchedCount = 0, locked = false, secs = 45;
    const cardEls = []; // { wrap, iconEl, labelEl, card }

    DOM.mgArena.innerHTML = '';
    DOM.mgArena.style.cssText = 'display:flex;flex-direction:column;gap:8px;padding:8px;';

    // ── Soldier march strip ───────────────────────────────────
    const soldierStrip = document.createElement('div');
    soldierStrip.style.cssText = 'position:relative;height:56px;border-radius:6px;overflow:hidden;flex-shrink:0;' +
      'background:linear-gradient(180deg,#080604 0%,#13100b 60%,#0b0906 100%);' +
      'border:1px solid rgba(80,40,20,0.35);';
    const ground = document.createElement('div');
    ground.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:13px;' +
      'background:repeating-linear-gradient(90deg,#0e0a06 0px,#0e0a06 22px,#120d08 22px,#120d08 44px);' +
      'border-top:1px solid rgba(100,60,20,0.35);';
    soldierStrip.appendChild(ground);
    const destIcon = document.createElement('div');
    destIcon.style.cssText = 'position:absolute;left:7px;bottom:11px;font-size:20px;filter:drop-shadow(0 0 5px rgba(212,148,58,0.4));';
    destIcon.textContent = '📜';
    soldierStrip.appendChild(destIcon);
    const warnLabel = document.createElement('div');
    warnLabel.style.cssText = 'position:absolute;top:5px;left:0;right:0;text-align:center;font-family:sans-serif;font-size:8px;letter-spacing:1.5px;color:rgba(140,70,50,0.65);text-transform:uppercase;pointer-events:none;';
    warnLabel.textContent = '⚔ Los soldados se acercan';
    soldierStrip.appendChild(warnLabel);
    const marchGroup = document.createElement('div');
    marchGroup.style.cssText = 'position:absolute;bottom:11px;left:82%;display:flex;gap:5px;align-items:flex-end;transition:left 0.92s linear;';
    for (let s = 0; s < 4; s++) {
      const sd = document.createElement('div');
      sd.style.cssText = `animation:mg-march-bob 0.44s ${(s * 0.11).toFixed(2)}s ease-in-out infinite;display:flex;`;
      sd.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40"><rect x="2" y="8" width="16" height="4" rx="1" fill="#1a0606"/><polygon points="2,8 10,1 18,8" fill="#260a0a"/><circle cx="10" cy="17" r="5" fill="#7b4924"/><rect x="6" y="21" width="8" height="3" fill="#d0c8a0"/><rect x="4" y="23" width="12" height="10" rx="1" fill="#8a1010"/><line x1="4" y1="23" x2="16" y2="33" stroke="#d0c8a0" stroke-width="1.4" stroke-linecap="round"/><rect x="1" y="23" width="5" height="3" rx="1" fill="#c0a010"/><rect x="14" y="23" width="5" height="3" rx="1" fill="#c0a010"/><rect x="4" y="33" width="5" height="7" rx="1" fill="#501010"/><rect x="11" y="33" width="5" height="7" rx="1" fill="#501010"/><rect x="17" y="4" width="2" height="21" rx="1" fill="#807050"/><polygon points="16,4 18,4 17,1" fill="#b0b090"/></svg>`;
      marchGroup.appendChild(sd);
    }
    soldierStrip.appendChild(marchGroup);
    DOM.mgArena.appendChild(soldierStrip);

    // ── Card grid 3×4 — sin 3D, cuadradas ────────────────────
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(4,1fr);gap:7px;flex:1;';
    DOM.mgArena.appendChild(grid);

    // Estilo base compartido de carta (dorso)
    const BACK_STYLE = 'width:100%;height:100%;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;' +
      'background:radial-gradient(ellipse at 40% 38%,#3c2a18,#0d0a06);' +
      'border:2px solid rgba(212,148,58,0.45);' +
      'box-shadow:0 2px 10px rgba(0,0,0,0.7);' +
      'transition:transform 0.14s ease;cursor:pointer;';

    deck.forEach((card, i) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'aspect-ratio:1;';          // cell sizing

      const face = document.createElement('div');
      face.style.cssText = BACK_STYLE;

      const iconEl = document.createElement('div');
      iconEl.style.cssText = 'font-size:30px;line-height:1;';
      iconEl.textContent = '⚜';

      const labelEl = document.createElement('div');
      labelEl.style.cssText = 'font-size:9px;letter-spacing:0.8px;font-family:sans-serif;text-transform:uppercase;font-weight:700;color:rgba(212,148,58,0.5);text-align:center;padding:0 4px;';
      labelEl.textContent = '';

      face.appendChild(iconEl);
      face.appendChild(labelEl);
      wrap.appendChild(face);
      grid.appendChild(wrap);
      cardEls.push({ face, iconEl, labelEl, card });

      face.addEventListener('click', () => flipCard(i));
    });

    function setBack(el) {
      el.face.style.background = 'radial-gradient(ellipse at 40% 38%,#3c2a18,#0d0a06)';
      el.face.style.borderColor = 'rgba(212,148,58,0.45)';
      el.face.style.boxShadow   = '0 2px 10px rgba(0,0,0,0.7)';
      el.iconEl.textContent     = '⚜';
      el.iconEl.style.color     = 'rgba(212,148,58,0.5)';
      el.labelEl.textContent    = '';
    }

    function setFront(el) {
      el.face.style.background  = el.card.bg;
      el.face.style.borderColor = el.card.col;
      el.face.style.boxShadow   = `0 2px 14px rgba(0,0,0,0.6),0 0 0 1px ${el.card.col}44`;
      el.iconEl.textContent     = el.card.icon;
      el.iconEl.style.color     = '';
      el.labelEl.textContent    = el.card.label;
      el.labelEl.style.color    = '#e0c880';
    }

    function setMatched(el) {
      el.face.style.background  = 'rgba(20,100,45,0.55)';
      el.face.style.borderColor = '#38c060';
      el.face.style.boxShadow   = '0 0 18px rgba(40,200,70,0.5)';
      el.face.style.cursor      = 'default';
    }

    // Volteo con scaleX: aprieta a 0, cambia contenido, expande
    function flipCard(i) {
      const el = cardEls[i];
      if (locked || el.card.matched || el.card.flipped) return;
      el.card.flipped = true;
      el.face.style.transform = 'scaleX(0)';
      setTimeout(() => {
        setFront(el);
        el.face.style.transform = 'scaleX(1)';
        selected.push(el);
        if (selected.length === 2) checkPair();
      }, 140);
    }

    function checkPair() {
      locked = true;
      const [a, b] = selected;
      if (a.card.id === b.card.id) {
        // ¡Par encontrado!
        setTimeout(() => {
          setMatched(a); setMatched(b);
          a.card.matched = true; b.card.matched = true;
          matchedCount++;
          selected = []; locked = false;
          DOM.mgInstr.textContent = `${matchedCount}/6 pares encontrados`;
          if (matchedCount === 6) {
            clearMgTimers();
            DOM.mgTimer.textContent = '✓';
            minigameEnd(true, mg, { score: matchedCount, time: 45 - secs });
          }
        }, 380);
      } else {
        // Error — flash rojo y voltear de nuevo
        [a.face, b.face].forEach(f => f.style.boxShadow = '0 0 14px rgba(220,40,40,0.7)');
        setTimeout(() => {
          [a, b].forEach(el => {
            el.face.style.transform = 'scaleX(0)';
            setTimeout(() => {
              el.card.flipped = false;
              setBack(el);
              el.face.style.transform = 'scaleX(1)';
            }, 140);
          });
          selected = []; locked = false;
        }, 700);
      }
    }

    DOM.mgInstr.textContent = 'Encuentra los 6 pares de Derechos del Hombre';
    DOM.mgTimer.textContent = secs + 's';

    _mgInterval = setInterval(() => {
      secs--;
      DOM.mgTimer.textContent = secs + 's';
      marchGroup.style.left = (8 + (secs / 45) * 74) + '%';
      if (secs <= 15) warnLabel.style.color = 'rgba(200,60,30,0.9)';
      if (secs <= 5)  { DOM.mgTimer.style.color = '#e05050'; warnLabel.style.color = 'rgba(230,50,20,1)'; }
      if (secs <= 0)  { clearMgTimers(); minigameEnd(false, mg, { score: matchedCount, time: 45 }); }
    }, 1000);
  }

  // ── Minijuego 3: Convoca al Pueblo — Reacción en Cadena ──
  // Coloca 3 chispas, pulsa el botón, la llama se propaga por resistencia
  function startConvoca(mg) {
    const COLS = 5, ROWS = 4, TOTAL = COLS * ROWS, NEED = 14, MAX_SPARKS = 3;

    // Resistance map: 1=fácil 2=medio 3=difícil
    const resist = Array.from({ length: TOTAL }, () => {
      const r = Math.random();
      return r < 0.38 ? 1 : r < 0.72 ? 2 : 3;
    });

    const cellState = new Array(TOTAL).fill(0); // 0=neutral 1=burning 2=convinced
    const sparks = [];   // indices of placed sparks
    let phase = 'place'; // 'place' | 'burning' | 'done'
    let convinced = 0;

    function getNeighbors(i) {
      const col = i % COLS, res = [];
      if (i >= COLS)        res.push(i - COLS);
      if (i < TOTAL - COLS) res.push(i + COLS);
      if (col > 0)          res.push(i - 1);
      if (col < COLS - 1)   res.push(i + 1);
      return res;
    }

    DOM.mgArena.innerHTML = '';
    DOM.mgArena.style.cssText = 'display:flex;flex-direction:column;gap:8px;padding:8px;align-items:stretch;';

    const grid = document.createElement('div');
    grid.style.cssText = `display:grid;grid-template-columns:repeat(${COLS},1fr);gap:5px;`;

    const revBtn = document.createElement('button');
    revBtn.textContent = '🔥 ¡Iniciar Revolución!';
    revBtn.style.cssText = 'padding:11px;font-family:"Playfair Display",serif;font-size:14px;font-weight:700;letter-spacing:0.5px;color:#0d0a07;background:linear-gradient(135deg,#d4943a,#a06820);border:none;border-radius:5px;cursor:pointer;opacity:0.35;pointer-events:none;transition:opacity 0.3s;';
    revBtn.onclick = () => {
      if (sparks.length === 0 || phase !== 'place') return;
      revBtn.style.opacity = '0.35';
      revBtn.style.pointerEvents = 'none';
      startRevolution();
    };

    DOM.mgArena.appendChild(grid);
    DOM.mgArena.appendChild(revBtn);

    function render() {
      grid.innerHTML = '';
      for (let i = 0; i < TOTAL; i++) {
        const cell = document.createElement('div');
        const res = resist[i], cs = cellState[i], isSpark = sparks.includes(i);
        let bg, border, icon, extra = '';

        if (cs === 2) {
          bg = 'rgba(20,90,40,0.55)'; border = '#30c050'; icon = '😊';
        } else if (cs === 1) {
          bg = 'rgba(200,70,10,0.55)'; border = '#f04020'; icon = '🔥';
          extra = 'animation:mg-ignite 0.35s ease-out;';
        } else if (isSpark) {
          bg = 'rgba(212,148,58,0.32)'; border = '#d4943a'; icon = '✦';
          extra = 'box-shadow:0 0 8px rgba(212,148,58,0.5);';
        } else {
          if (res === 1) { bg = 'rgba(14,60,22,0.35)'; border = 'rgba(30,140,50,0.45)'; icon = '🟢'; }
          else if (res === 2) { bg = 'rgba(60,46,8,0.35)'; border = 'rgba(160,130,20,0.45)'; icon = '🟡'; }
          else { bg = 'rgba(60,8,8,0.35)'; border = 'rgba(160,30,30,0.45)'; icon = '🔴'; }
        }

        cell.style.cssText = `aspect-ratio:1;background:${bg};border:2px solid ${border};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:${phase === 'place' && cs === 0 ? 'pointer' : 'default'};transition:background 0.2s,border-color 0.2s;${extra}`;
        cell.textContent = icon;

        if (phase === 'place' && cs === 0) {
          cell.onclick = () => {
            const idx = sparks.indexOf(i);
            if (idx >= 0) sparks.splice(idx, 1);
            else if (sparks.length < MAX_SPARKS) sparks.push(i);
            revBtn.style.opacity = sparks.length > 0 ? '1' : '0.35';
            revBtn.style.pointerEvents = sparks.length > 0 ? 'auto' : 'none';
            DOM.mgInstr.textContent = `Chispas: ${sparks.length}/${MAX_SPARKS} · Coloca estratégicamente`;
            render();
          };
        }
        grid.appendChild(cell);
      }
    }

    function startRevolution() {
      phase = 'burning';
      sparks.forEach(i => { cellState[i] = 1; });
      convinced = sparks.length;
      let step = 0; const maxSteps = 9;
      DOM.mgInstr.textContent = 'La revolución se propaga…';
      render();

      function spreadStep() {
        if (step >= maxSteps) { endGame(); return; }
        step++;
        const burning = [];
        for (let i = 0; i < TOTAL; i++) if (cellState[i] === 1) burning.push(i);
        if (burning.length === 0) { endGame(); return; }

        const newBurning = new Set();
        burning.forEach(i => {
          cellState[i] = 2; // becomes fully convinced
          getNeighbors(i).forEach(n => {
            if (cellState[n] !== 0) return;
            const prob = resist[n] === 1 ? 0.92 : resist[n] === 2 ? 0.62 : 0.30;
            if (Math.random() < prob) newBurning.add(n);
          });
        });
        newBurning.forEach(n => { if (cellState[n] === 0) { cellState[n] = 1; convinced++; } });

        DOM.mgInstr.textContent = `Convencidos: ${convinced} / ${TOTAL}`;
        render();
        _mgTimer = setTimeout(spreadStep, 360);
      }

      function endGame() {
        phase = 'done'; render();
        _mgTimer = setTimeout(() => minigameEnd(convinced >= NEED, mg, { score: convinced }), 800);
      }

      _mgTimer = setTimeout(spreadStep, 320);
    }

    DOM.mgTimer.textContent = '';
    DOM.mgInstr.textContent = `Coloca ${MAX_SPARKS} chispas · Necesitas ${NEED}/${TOTAL} vecinos`;
    render();
  }

  // ── Dispatcher de minijuegos ──────────────────────────────
  function startMinigame(mg) {
    state.inputLocked = true;
    clearMgTimers();

    DOM.mgTitle.textContent    = mg.title;
    DOM.mgResult.innerHTML     = '';
    DOM.mgResult.classList.remove('visible');
    DOM.mgArena.innerHTML      = '';
    DOM.mgArena.removeAttribute('style');
    DOM.mgTimer.textContent    = '';
    DOM.mgTimer.style.color    = '';   // reset colour changed by imprenta countdown
    DOM.mgOverlay.classList.add('visible');

    if      (mg.id === 'boyaca_puente')   startBoyaca(mg);
    else if (mg.id === 'la_imprenta')     startImprenta(mg);
    else if (mg.id === 'convoca_al_pueblo') startConvoca(mg);
    else {
      // Minijuego desconocido — saltar a siguiente nodo
      setTimeout(() => {
        closeMinigame();
        loadNode(mg.onSuccess.next);
      }, 500);
    }
  }

  // ── Save / Load (una ranura por héroe) ───────────────────
  function saveGame() {
    try {
      localStorage.setItem(SAVE_KEY(state.heroId), JSON.stringify({
        nodeId:       state.nodeId,
        flags:        [...state.flags],
        fidelity:     state.fidelity,
        patriotTrust: state.patriotTrust,
        suspicion:    state.suspicion,
        choices:      state.choices,
        notes:        state.notes,
        actId:        state.actId,
      }));
    } catch(e) {}
  }

  function loadGame(heroId) {
    try {
      const data = JSON.parse(localStorage.getItem(SAVE_KEY(heroId)) || 'null');
      if (!data) return false;
      state.heroId       = heroId;
      state.nodeId       = data.nodeId;
      state.flags        = new Set(data.flags || []);
      state.fidelity     = data.fidelity     ?? 60;
      state.patriotTrust = data.patriotTrust ?? 50;
      state.suspicion    = data.suspicion    ?? 20;
      state.choices      = data.choices      || [];
      state.notes        = data.notes        || [];
      state.actId        = data.actId        || 'act1';
      updateFidelityUI();
      return true;
    } catch(e) { return false; }
  }

  function hasAnySave() {
    return Object.keys(HEROES_META).some(hid => !!localStorage.getItem(SAVE_KEY(hid)));
  }

  // ── Fade ─────────────────────────────────────────────────
  function fadeOut(cb) {
    DOM.fadeOverlay.classList.add('visible');
    setTimeout(() => { cb(); fadeIn(); }, 650);
  }
  function fadeIn() {
    setTimeout(() => DOM.fadeOverlay.classList.remove('visible'), 100);
  }

  // ── Util ──────────────────────────────────────────────────
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function getFidelityLevel() {
    if (state.fidelity >= 80) return 'heroic';
    if (state.fidelity >= 60) return 'high';
    if (state.fidelity >= 40) return 'neutral';
    if (state.fidelity >= 20) return 'low';
    return 'betrayal';
  }

  // ── Iniciar héroe ─────────────────────────────────────────
  function startHero(heroId) {
    const meta = HEROES_META[heroId];
    if (!meta) return;
    state.heroId       = heroId;
    state.flags        = new Set();
    state.fidelity     = 60;
    state.patriotTrust = 50;
    state.suspicion    = 20;
    state.choices      = [];
    state.notes        = [];
    state.lineIndex    = 0;
    _currentBgSrc      = '';
    _currentCharSrc    = '';
    DOM.bgImage.classList.remove('visible');
    DOM.charImage.classList.remove('visible');
    updateFidelityUI();
    loadNode(meta.startNode);
  }

  // ── Input ─────────────────────────────────────────────────
  function setupInput() {
    DOM.dlgPanel.addEventListener('click', advance);
    DOM.dlgText.addEventListener('click', (e) => { e.stopPropagation(); advance(); });

    $('btn-menu').addEventListener('click', () => DOM.pauseMenu.classList.toggle('visible'));
    $('btn-save').addEventListener('click', () => {
      saveGame();
      showNoteToast({ id: '_save', title: 'Partida guardada' });
    });

    DOM.endingRestart.addEventListener('click', () => showMainMenu());

    $('pause-resume')   .addEventListener('click', () => DOM.pauseMenu.classList.remove('visible'));
    $('pause-menu-btn') .addEventListener('click', () => { DOM.pauseMenu.classList.remove('visible'); showMainMenu(); });
    $('pause-restart')  .addEventListener('click', () => {
      DOM.pauseMenu.classList.remove('visible');
      localStorage.removeItem(SAVE_KEY(state.heroId));
      fadeOut(() => startHero(state.heroId));
    });

    $('menu-heroes').addEventListener('click', openHeroesPanel);
    $('menu-logros').addEventListener('click', openLogrosPanel);
    $('menu-minigames').addEventListener('click', openMinigamesPanel);
    DOM.heroesClose.addEventListener('click', closeHeroesPanel);
    DOM.logrosClose.addEventListener('click', closeLogrosPanel);
    DOM.mgpClose.addEventListener('click', closeMinigamesPanel);
    DOM.hsClose.addEventListener('click', closeHeroSelectPanel);

    // Botón principal — abre el selector de héroe
    $('menu-play').addEventListener('click', openHeroSelectPanel);

    // Botón Continuar — sólo visible si hay al menos un guardado
    const contBtn = $('menu-continue');
    contBtn.addEventListener('click', openHeroSelectPanel);
  }

  function showMainMenu() {
    DOM.endingScreen.classList.remove('visible');
    DOM.actIntro.classList.remove('visible');
    DOM.mainMenu.classList.remove('hidden');
    // Mostrar "Continuar partida" sólo si algún héroe tiene guardado
    $('menu-continue').style.display = hasAnySave() ? '' : 'none';
  }

  function hideMainMenu() {
    DOM.mainMenu.classList.add('hidden');
  }

  // ── Inicio ────────────────────────────────────────────────
  function init() {
    initDOM();
    setupInput();
    showMainMenu();
  }

  // ── API pública ───────────────────────────────────────────
  return {
    init,
    state,
    loadNode,
    modifyFidelity,
    showNote,
    fadeOut,
    fadeIn,
    getFidelityLevel,
  };

})();
