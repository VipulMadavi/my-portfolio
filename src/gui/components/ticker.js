export function renderTicker(element) {
  element.innerHTML = `
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker-item">[INFO] SYSTEM INITIALIZED</div>
        <div class="ticker-item">root@cloud-shell:~$ ./deploy_portfolio.sh</div>
        <div class="ticker-item">[WARN] RECRUITER_SCAN_DETECTED</div>
        <div class="ticker-item">>> EXEC: VIPUL_MADAVI_RESUME.PDF</div>
        <div class="ticker-item">[SUCCESS] STATUS: OPEN_TO_WORK</div>
        <div class="ticker-item">:: NETWORK: SECURE ::</div>
        <div class="ticker-item">[LOG] TRAFFIC_SOURCE: PUBLIC_INTERNET</div>
        <!-- Loop -->
        <div class="ticker-item">[INFO] SYSTEM INITIALIZED</div>
        <div class="ticker-item">root@cloud-shell:~$ ./deploy_portfolio.sh</div>
        <div class="ticker-item">[WARN] RECRUITER_SCAN_DETECTED</div>
        <div class="ticker-item">>> EXEC: VIPUL_MADAVI_RESUME.PDF</div>
      </div>
    </div>
  `;
}
