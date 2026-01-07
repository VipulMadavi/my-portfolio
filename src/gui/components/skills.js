const skills = {
  "Cybersecurity & Networks": [
    { name: "Network Security", level: 90 },
    { name: "Cloud Security", level: 85 },
    { name: "SIEM", level: 75 },
    { name: "Internet Security", level: 80 }
  ],
  "Programming & Tools": [
    { name: "Python", level: 90 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Linux", level: 85 },
    { name: "Flutter", level: 70 },
    { name: "Machine Learning", level: 65 }
  ],
  "Interpersonal": [
    { name: "Communication", level: 95 },
    { name: "Collaboration (SIH)", level: 90 },
    { name: "Problem Solving", level: 85 }
  ]
};

export function renderSkills(element) {
  const categoriesHtml = Object.entries(skills).map(([category, items]) => `
    <div class="skill-category">
      <h3>${category}</h3>
      <div class="skills-list">
        ${items.map(skill => `
          <div class="skill-item">
            <div class="skill-info">
              <span>${skill.name}</span>
              <span>${skill.level}%</span>
            </div>
            <div class="progress-bg">
              <div class="progress-fill" style="width: 0%" data-target="${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  element.innerHTML = `
    <div class="section-header">
      <h2>Technical Arsenal</h2>
    </div>
    <div class="skills-container">
      ${categoriesHtml}
    </div>
  `;

  initSkillAnimation();
}

function initSkillAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.progress-fill');
        bars.forEach(bar => {
          bar.style.width = bar.dataset.target;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const container = document.querySelector('.skills-container');
  if (container) observer.observe(container);
}
