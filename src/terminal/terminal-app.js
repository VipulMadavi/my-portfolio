import { fileSystem } from './filesystem.js';
import './terminal.css';

export function mount(container) {
  container.innerHTML = `
    <div class="terminal-layout">
      <div class="terminal-header">
        <span class="term-title">cloud-shell ~ vipul -- -zsh</span>
        <div class="window-controls">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
      </div>
      <div class="terminal-window" id="term-window">
        <div class="output-log" id="output-log">
          <div class="line">
            <span class="system-msg">
              Amazon CloudShell (Amazon Linux 2023) [CloudShell-2.0.1]<br>
              <br>
              <span class="highlight">       __|  __|_  )</span><br>
              <span class="highlight">       _|  (     /   </span> Amazon Linux 2023 AMI<br>
              <span class="highlight">      ___|\\___|___|</span><br>
              <br>
              Type "help" for a list of available commands.<br>
              <br>
              <span class="cmd-echo">Available Commands:</span><br>
              &nbsp;&nbsp;<span class="cmd-name">sys_info</span>   - Display system/user information<br>
              &nbsp;&nbsp;<span class="cmd-name">projects</span>   - List active projects<br>
              &nbsp;&nbsp;<span class="cmd-name">contact</span>    - Show contact details<br>
              &nbsp;&nbsp;<span class="cmd-name">gui</span>        - Return to graphical interface<br>
            </span>
          </div>
        </div>
        <div class="input-line">
          <span class="prompt">➜  ~</span>
          <input type="text" id="term-input" autocomplete="off" autofocus />
        </div>
      </div>
    </div>
  `;

  const input = container.querySelector('#term-input');
  const log = container.querySelector('#output-log');
  const windowScroll = container.querySelector('#term-window');

  // Focus keeper
  container.addEventListener('click', () => input.focus());

  // Command Logic
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      input.value = '';

      // Echo command
      addToLog(log, `➜  ~ ${cmd}`, 'cmd-echo');

      // Process command
      processCommand(cmd, log);

      // Auto scroll
      windowScroll.scrollTop = windowScroll.scrollHeight;
    }
  });

  input.focus();
}

function addToLog(container, text, className = '') {
  const div = document.createElement('div');
  div.className = `line ${className}`;
  div.innerHTML = text; // Allow HTML output
  container.appendChild(div);
}

function processCommand(cmd, container) {
  const args = cmd.split(' ');
  const command = args[0].toLowerCase();

  switch (command) {
    case 'help':
      addToLog(container, `
        <span class="help-text">Available Commands:</span><br>
        <span class="cmd-name">sys_info</span>   - Display system/user information<br>
        <span class="cmd-name">projects</span>   - List active projects<br>
        <span class="cmd-name">contact</span>    - Show contact details<br>
        <span class="cmd-name">clear</span>      - Clear terminal screen<br>
        <span class="cmd-name">gui</span>        - Return to graphical interface<br>
        <span class="cmd-name">hack</span>       - Initiate security protocol<br>
        <span class="cmd-name">matrix</span>     - Enter the matrix<br>
      `);
      break;

    case 'hack':
      runHackSequence(container);
      break;

    case 'matrix':
      runMatrixEffect(container);
      break;

    case 'sys_info':
      addToLog(container, fileSystem.sys_info);
      break;

    case 'projects':
      addToLog(container, fileSystem.projects);
      break;

    case 'contact':
      addToLog(container, fileSystem.contact);
      break;

    case 'clear':
      container.innerHTML = '';
      break;

    case 'gui':
      window.location.href = '/';
      break;

    case '':
      break;

    default:
      addToLog(container, `<span class="error">zsh: command not found: ${command}</span>`);
  }
}

function runHackSequence(container) {
  const lines = [
    "Initializing brute force attack...",
    "Targeting mainframe...",
    "Accessing secure vault...",
    "Decrypting passwords...",
    "ACCESS GRANTED.",
    "<span style='color: #0f0'>System Control: ADMIN ACCESS ACQUIRED</span>"
  ];

  let delay = 0;
  lines.forEach((line, index) => {
    delay += Math.random() * 800 + 400;
    setTimeout(() => {
      addToLog(container, `<span class="highlight">[+] ${line}</span>`);
    }, delay);
  });
}

function runMatrixEffect(container) {
  // Clear container
  container.innerHTML = '';
  container.style.overflow = 'hidden';

  // Create Canvas
  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const letters = '010101010010101010101010101';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }

  draw();

  // Exit instruction
  const exitBtn = document.createElement('div');
  exitBtn.innerHTML = "PRESS REFRESH TO EXIT MATRIX";
  exitBtn.style.position = 'absolute';
  exitBtn.style.bottom = '10px';
  exitBtn.style.right = '10px';
  exitBtn.style.color = '#fff';
  exitBtn.style.background = '#000';
  exitBtn.style.padding = '5px';
  container.appendChild(exitBtn);
}
