const projects = [
  {
    title: "Library Analytics DAVIS",
    desc: "College library analytics system using Python and Flask to simulate book issuing and generate KPIs, charts, and insights.",
    tags: ["Python", "Flask", "Analytics"]
  },
  {
    title: "AEStego",
    desc: "Combines AES-128 encryption with image steganography to securely embed and extract data.",
    tags: ["Python", "Cryptography", "Security"]
  },
  {
    title: "Network Intrusion Detection",
    desc: "Python-based system using MySQL to monitor network logs and identify potential security threats.",
    tags: ["Security", "Python", "MySQL"]
  },
  {
    title: "Solar-Scheduler",
    desc: "An intelligent scheduling system focused on optimizing solar energy consumption architecture.",
    tags: ["JavaScript", "Cloud Security", "Vite"]
  },
  {
    title: "SIH 2025 Finalist",
    desc: "National finalist in Smart India Hackathon 2025.",
    tags: ["Achievement", "Innovation", "National Level"]
  },
  /*
  {
    title: "SOC Dashboard",
    desc: "ELK Stack dashboard for visualizing brute-force attacks.",
    tags: ["ELK", "Blue Team", "Analytics"]
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
