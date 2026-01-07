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
          <div class="cert-icon">📜</div>
          <div class="cert-info">
            <h3>Cybersecurity Fundamentals</h3>
            <span class="issuer">IBM</span>
            <span class="cert-date">Issued: Feb 2025</span>
            <p>SIEM, Network Defense, Threat Intelligence.</p>
          </div>
        </div>

        <div class="glass-panel cert-card">
          <div class="cert-icon">🛡️</div>
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
