function r(e){e.innerHTML=`
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
  `}function o(e){e.innerHTML=`
    <div class="container hero-container">
      <div class="hero-content">
        <span class="mono-subtitle">> SYSTEM STATUS: SEEKING OPPORTUNITIES...</span>
        <h1 class="hero-title glitch" data-text="Vipul Madavi">
          Vipul Madavi
        </h1>
        <div class="typewriter-text">
          <span id="typing-text"></span><span class="cursor"></span>
        </div>
        <p class="hero-subtitle">
          Third-year Computer Science Engineering Student.<br>
          Enthusiastic Learner exploring AI, Cybersecurity, and Cloud Technologies.<br>
          SIH 2025 Finalist.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="/resume.pdf" target="_blank" class="btn btn-resume">Resume_v1.0</a>
        </div>
      </div>
    </div>
  `,d()}function d(){const e=["AI, CyberSec & Cloud Tech.","an Enthusiastic Learner.","a CSE Student.","an SIH 2025 Finalist."],a=document.getElementById("typing-text");let s=0,i=0,t=!1;function n(){const l=e[s];t?(a.textContent=l.substring(0,i-1),i--):(a.textContent=l.substring(0,i+1),i++);let c=t?50:100;!t&&i===l.length?(c=2e3,t=!0):t&&i===0&&(t=!1,s=(s+1)%e.length,c=500),setTimeout(n,c)}n()}const v={"Cybersecurity & Networks":[{name:"Network Security",level:90},{name:"Cloud Security",level:85},{name:"SIEM",level:75},{name:"Internet Security",level:80}],"Programming & Tools":[{name:"Python",level:90},{name:"C++",level:75},{name:"SQL",level:80},{name:"Linux",level:85},{name:"Flutter",level:70},{name:"Machine Learning",level:65}],Interpersonal:[{name:"Communication",level:95},{name:"Collaboration (SIH)",level:90},{name:"Problem Solving",level:85}]};function p(e){const a=Object.entries(v).map(([s,i])=>`
    <div class="skill-category">
      <h3>${s}</h3>
      <div class="skills-list">
        ${i.map(t=>`
          <div class="skill-item">
            <div class="skill-info">
              <span>${t.name}</span>
              <span>${t.level}%</span>
            </div>
            <div class="progress-bg">
              <div class="progress-fill" style="width: 0%" data-target="${t.level}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");e.innerHTML=`
    <div class="section-header">
      <h2>Technical Arsenal</h2>
    </div>
    <div class="skills-container">
      ${a}
    </div>
  `,u()}function u(){const e=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&(i.target.querySelectorAll(".progress-fill").forEach(n=>{n.style.width=n.dataset.target}),e.unobserve(i.target))})},{threshold:.2}),a=document.querySelector(".skills-container");a&&e.observe(a)}function h(e){e.innerHTML=`
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
  `}const m=[{title:"AEStego",desc:"Combines AES-128 encryption with image steganography to securely embed and extract data.",tags:["Python","Cryptography","Security"]},{title:"Cloud Monitor",desc:"Automated AWS S3 & IAM posture monitoring system.",tags:["AWS","Boto3","Compliance"]},{title:"SIH 2025 Finalist",desc:"National finalist in Smart India Hackathon 2025.",tags:["Achievement","Innovation","National Level"]},{title:"SOC Dashboard",desc:"ELK Stack dashboard for visualizing brute-force attacks.",tags:["ELK","Blue Team","Analytics"]}];function g(e){const a=m.map(s=>`
    <article class="glass-panel project-card">
      <div class="card-content">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="tags">
          ${s.tags.map(i=>`<span class="tag">${i}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");e.innerHTML=`
    <div class="section-header">
      <h2>Selected Projects</h2>
    </div>
    <div class="projects-grid">
      ${a}
    </div>
  `}function S(e){e.innerHTML=`
    <div class="glass-panel contact-box">
      <h2>Initialize Connection</h2>
      <p>
        Third Year Student • Cloud Security • DevSecOps<br>
        Open for Internships.
      </p>
      <a href="mailto:vipulmadavi1509@gmail.com" class="btn btn-primary">Send Signal</a>
      <div class="social-links-row">
        <a href="https://linkedin.com/in/vipul-madavi1509" target="_blank">LinkedIn</a>
        <a href="https://github.com/VipulMadavi" target="_blank">GitHub</a>
      </div>
    </div>
  `}function f(e){e.innerHTML=`
    <div class="gui-layout">
      <nav class="glass-panel nav-bar">
        <div class="container nav-content">
          <span class="logo">VM.cloud</span>
          <div class="nav-links">
            <a href="#hero">Home</a>
            <a href="#skills">Skills</a>
            <a href="#qualifications">Profile</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      
      <main>
        <section id="hero"></section>
        <section id="skills" class="container section-pad"></section>
        <section id="qualifications" class="container section-pad"></section>
        <section id="projects" class="container section-pad"></section>
        <section id="contact" class="container section-pad"></section>
      </main>

      <div id="ticker-container"></div>

      <footer class="container footer-text">
        <p>© ${new Date().getFullYear()} Vipul Madavi. Secure by Design.</p>
      </footer>
    </div>
  `,o(e.querySelector("#hero")),p(e.querySelector("#skills")),h(e.querySelector("#qualifications")),g(e.querySelector("#projects")),S(e.querySelector("#contact")),r(e.querySelector("#ticker-container")),document.documentElement.style.scrollPaddingTop="80px"}export{f as mount};
