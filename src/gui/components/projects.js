const projects = [
  {
    title: "AEStego",
    desc: "Combines AES-128 encryption with image steganography to securely embed and extract data.",
    tags: ["Python", "Cryptography", "Security"]
  },
  {
    title: "Cloud Monitor",
    desc: "Automated AWS S3 & IAM posture monitoring system.",
    tags: ["AWS", "Boto3", "Compliance"]
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
