export function initLoader(onComplete) {
    const loader = document.createElement('div');
    loader.id = 'sys-loader';
    loader.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #0f172a;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    color: #38bdf8;
    flex-direction: column;
  `;

    loader.innerHTML = `
    <div style="width: 300px;">
      <div style="margin-bottom: 10px;">> SYSTEM_BOOT_SEQUENCE_INIT</div>
      <div id="loader-bar" style="height: 4px; background: #1e293b; width: 100%;">
        <div id="loader-progress" style="height: 100%; background: #38bdf8; width: 0%;"></div>
      </div>
      <div id="loader-status" style="margin-top: 10px; font-size: 0.8rem; color: #94a3b8;">Loading modules...</div>
    </div>
  `;

    document.body.appendChild(loader);

    const bar = document.getElementById('loader-progress');
    const status = document.getElementById('loader-status');
    let width = 0;

    const interval = setInterval(() => {
        width += Math.random() * 5;
        if (width > 100) width = 100;

        bar.style.width = width + '%';

        if (width < 30) status.textContent = "Loading modules...";
        else if (width < 60) status.textContent = "Verifying security protocols...";
        else if (width < 90) status.textContent = "Connecting to cloud nodes...";
        else status.textContent = "System Ready.";

        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    loader.remove();
                    if (onComplete) onComplete();
                }, 500);
            }, 500);
        }
    }, 50);
}
