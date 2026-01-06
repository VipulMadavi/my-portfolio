import './style.css';

import { initLoader } from './loader.js';

const app = document.querySelector('#app');
const urlParams = new URLSearchParams(window.location.search);
const isDevMode = urlParams.get('mode') === 'shell' || urlParams.get('dev') === 'true';

// Start Loader first
initLoader(() => {
  // Dynamic Import for splitting logic
  if (isDevMode) {
    import('./terminal/terminal-app.js').then(module => {
      module.mount(app);
    });
  } else {
    import('./gui/gui-app.js').then(module => {
      module.mount(app);
    });
  }
});

// Initialize Background Effect
import('./effects/network-graph.js').then(module => {
  module.init(document.querySelector('#bg-canvas'));
});
