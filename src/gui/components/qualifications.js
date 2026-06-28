export function renderQualifications(element) {
    element.innerHTML = `
    <div class="section-container">
      
      <!-- Experience Section -->
      <div class="section-header">
        <h2>Professional Interface</h2>
      </div>
      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content glass-panel">
            <span class="date">Jan 2025 – Present</span>
            <h3>Cybersecurity Intern</h3>
            <span class="institution">Edunet Foundation (Remote)</span>
            <ul class="job-details">
              <li>Mastering Cryptography & Network Security fundamentals.</li>
              <li>Developed <strong>AEStego</strong> (AES-128 + Steganography Python tool).</li>
              <li>Strengthening secure coding practices for Cloud/IoT ecosystems.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="section-header mt-large">
        <h2>Academic Database</h2>
      </div>
      <div class="education-grid">
        <div class="glass-panel education-card">
          <div class="edu-header">
            <h3>Bachelor of Engineering (CS)</h3>
            <span class="edu-grade">CGPA: 9.2</span>
          </div>
          <span class="institution">Dr. D. Y. Patil Technical Campus, Pune</span>
          <span class="date">2023 – 2027</span>
          <p class="edu-desc">Specializing in Cloud Security, AI, and DevSecOps.</p>
        </div>
      </div>

      <!-- Certifications Section -->
      <div class="section-header mt-large">
        <h2>Verified Credentials</h2>
      </div>
      <div class="cert-grid">
        
        <div class="glass-panel cert-card">
          <div class="cert-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></div>
          <div class="cert-info">
            <h3>Cybersecurity Fundamentals</h3>
            <span class="issuer">IBM</span>
            <span class="cert-date">Issued: Feb 2025</span>
            <p>SIEM, Network Defense, Threat Intelligence.</p>
          </div>
        </div>

        <div class="glass-panel cert-card">
          <div class="cert-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></div>
          <div class="cert-info">
            <h3>Google Cybersecurity Specialization</h3>
            <span class="issuer">Google</span>
            <span class="cert-date">Issued: Aug 2024</span>
            <p>Python, Linux, SQL, IDS/IPS, NIST Framework.</p>
          </div>
        </div>

      </div>

    </div>
  `;
}
