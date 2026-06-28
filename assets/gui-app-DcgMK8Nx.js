function c(e){e.innerHTML=`
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
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-resume">Resume_v1.0</a>
        </div>
      </div>
    </div>
  `,d()}function d(){const e=["AI, CyberSec & Cloud Tech.","an Enthusiastic Learner.","a CSE Student.","an SIH 2025 Finalist."],n=document.getElementById("typing-text");let i=0,t=0,s=!1;function a(){const l=e[i];s?(n.textContent=l.substring(0,t-1),t--):(n.textContent=l.substring(0,t+1),t++);let r=s?50:100;!s&&t===l.length?(r=2e3,s=!0):s&&t===0&&(s=!1,i=(i+1)%e.length,r=500),setTimeout(a,r)}a()}const v={"Cybersecurity & Networks":[{name:"Network Security",level:90},{name:"Cloud Security",level:85},{name:"SIEM",level:75},{name:"Internet Security",level:80}],"Programming & Tools":[{name:"Python",level:90},{name:"C++",level:75},{name:"SQL",level:80},{name:"Linux",level:85},{name:"Flutter",level:70},{name:"Machine Learning",level:65}],Interpersonal:[{name:"Communication",level:95},{name:"Collaboration (SIH)",level:90},{name:"Problem Solving",level:85}]};function p(e){const n=Object.entries(v).map(([i,t])=>`
    <div class="skill-category">
      <h3>${i}</h3>
      <div class="skills-list">
        ${t.map(s=>`
          <div class="skill-item">
            <div class="skill-info">
              <span>${s.name}</span>
              <span>${s.level}%</span>
            </div>
            <div class="progress-bg">
              <div class="progress-fill" style="width: 0%" data-target="${s.level}%"></div>
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
      ${n}
    </div>
  `,u()}function u(){const e=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.querySelectorAll(".progress-fill").forEach(a=>{a.style.width=a.dataset.target}),e.unobserve(t.target))})},{threshold:.2}),n=document.querySelector(".skills-container");n&&e.observe(n)}function h(e){e.innerHTML=`
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
  `}const g=[{title:"Library Analytics DAVIS",desc:"College library analytics system using Python and Flask to simulate book issuing and generate KPIs, charts, and insights.",tags:["Python","Flask","Analytics"]},{title:"AEStego",desc:"Combines AES-128 encryption with image steganography to securely embed and extract data.",tags:["Python","Cryptography","Security"]},{title:"Network Intrusion Detection",desc:"Python-based system using MySQL to monitor network logs and identify potential security threats.",tags:["Security","Python","MySQL"]},{title:"Solar-Scheduler",desc:"An intelligent scheduling system focused on optimizing solar energy consumption architecture.",tags:["JavaScript","Cloud Security","Vite"]},{title:"SIH 2025 Finalist",desc:"National finalist in Smart India Hackathon 2025.",tags:["Achievement","Innovation","National Level"]}];function m(e){const n=g.map(i=>`
    <article class="glass-panel project-card">
      <div class="card-content">
        <h3>${i.title}</h3>
        <p>${i.desc}</p>
        <div class="tags">
          ${i.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");e.innerHTML=`
    <div class="section-header">
      <h2>Selected Projects</h2>
    </div>
    <div class="projects-grid">
      ${n}
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
        <a href="https://linkedin.com/in/vipul-madavi1509" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/VipulMadavi" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  `}function y(e){e.innerHTML=`
    <div class="gui-layout">
      <nav class="glass-panel nav-bar" aria-label="Main navigation">
        <div class="container nav-content">
          <div class="nav-header">
            <span class="logo">VM.cloud</span>
            <button class="menu-toggle" aria-label="Toggle Menu">
              <span>[ :: SYSTEM :: ]</span>
            </button>
          </div>
          <div class="nav-links">
            <a href="#hero">Home</a>
            <a href="#skills">Skills</a>
            <a href="#qualifications">Profile</a>
            <a href="#projects">Projects</a>
            <a href="https://vipulnotes.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blog ↗</a>
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
  `,o(e.querySelector("#hero")),p(e.querySelector("#skills")),h(e.querySelector("#qualifications")),m(e.querySelector("#projects")),S(e.querySelector("#contact")),c(e.querySelector("#ticker-container"));const n=e.querySelector(".menu-toggle"),i=e.querySelector(".nav-links");n.addEventListener("click",()=>{i.classList.toggle("active");const t=n.querySelector("span");i.classList.contains("active")?(t.textContent="[ :: CLOSE :: ]",t.style.color="var(--text-primary)"):(t.textContent="[ :: SYSTEM :: ]",t.style.color="var(--accent-primary)")}),i.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{i.classList.remove("active");const s=n.querySelector("span");s.textContent="[ :: SYSTEM :: ]",s.style.color="var(--accent-primary)"})}),document.documentElement.style.scrollPaddingTop="80px"}export{y as mount};
