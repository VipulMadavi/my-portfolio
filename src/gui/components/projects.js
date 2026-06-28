const projects = [
  {
    title: "Library Analytics DAVIS",
    desc: "College library analytics system using Python and Flask to simulate book issuing and generate KPIs, charts, and insights.",
    tags: ["Python", "Flask", "Analytics"],
    github: null
  },
  {
    title: "AEStego",
    desc: "Combines AES-128 encryption with image steganography to securely embed and extract data.",
    tags: ["Python", "Cryptography", "Security"],
    github: "https://github.com/VipulMadavi/AEStego"
  },
  {
    title: "Network Intrusion Detection",
    desc: "Python-based system using MySQL to monitor network logs and identify potential security threats.",
    tags: ["Security", "Python", "MySQL"],
    github: "https://github.com/VipulMadavi/Network-Intrusion-Detection-System-using-Python-MySQL"
  },
  {
    title: "Solar-Scheduler",
    desc: "An intelligent scheduling system focused on optimizing solar energy consumption architecture.",
    tags: ["JavaScript", "Cloud Security", "Vite"],
    github: null
  },
  {
    title: "SIH 2025 Finalist",
    desc: "National finalist in Smart India Hackathon 2025.",
    tags: ["Achievement", "Innovation", "National Level"],
    github: null
  },
  /*
  {
    title: "SOC Dashboard",
    desc: "ELK Stack dashboard for visualizing brute-force attacks.",
    tags: ["ELK", "Blue Team", "Analytics"],
    github: null
  }
    */
];

export function renderProjects(element) {
  const cardsHtml = projects.map(p => `
    <article class="glass-panel project-card">
      <div class="card-content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-github-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>Source</span>
        </a>` : ''}
      </div>
    </article>
  `).join('');

  element.innerHTML = `
    <div class="section-header">
      <h2>Selected Projects</h2>
    </div>
    <div class="projects-grid">
      ${cardsHtml}
    </div>
  `;
}
