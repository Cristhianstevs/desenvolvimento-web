// ================================
// CONFIG DO EMULATORJS
// ================================
EJS_player = '#game';
EJS_core = 'snes';
EJS_gameUrl = '../assets/Super-Mario-World-(USA).sfc';
EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
EJS_startOnLoad = false;

// ================================
// DEBUG DE TECLAS
// ================================
document.addEventListener('keydown', (e) => {
  console.log(e.key, e.keyCode);
});

// ================================
// CONTROLES PERSONALIZADOS
// ================================
function setCustomControls() {
  const key = 'ejs-1-snes-../assets/Super-Mario-World-(USA).sfc-settings';

  const controls = {
    controlSettings: {
      // Player 1
      0: {
        0: { value: 32, value2: 'BUTTON_1' }, // A > Space
        1: { value: 17, value2: 'BUTTON_4' }, // X > Ctrl
        2: { value: 16, value2: 'SELECT' }, // Select > Shift
        3: { value: 13, value2: 'START' }, // Start > Enter

        4: { value: 87, value2: 'DPAD_UP' }, // ↑ > W
        5: { value: 83, value2: 'DPAD_DOWN' }, // ↓ > S
        6: { value: 65, value2: 'DPAD_LEFT' }, // ← > A
        7: { value: 68, value2: 'DPAD_RIGHT' }, // → > D

        8: { value: 18, value2: 'BUTTON_2' }, // B > Alt
        9: { value: 16, value2: 'BUTTON_3' }, // Y > Shift

        10: { value: 81, value2: 'LEFT_TOP_SHOULDER' }, // L > Q
        11: { value: 69, value2: 'RIGHT_TOP_SHOULDER' }, // R > E
      },

      1: {},
      2: {},
      3: {},
    },

    settings: {},
    cheats: [],
  };

  localStorage.setItem(key, JSON.stringify(controls));
}

// ================================
// INICIAR O JOGO
// ================================
function startGame() {
  const loading = document.getElementById('loadingScreen');

  if (loading) {
    loading.classList.add('hidden');
  }

  setCustomControls();

  const script = document.createElement('script');
  script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
  document.body.appendChild(script);
}

// ================================
// EVENTO DE CLIQUE
// ================================
const screen = document.getElementById('loadingScreen');

if (screen) {
  screen.addEventListener('click', startGame);
}
