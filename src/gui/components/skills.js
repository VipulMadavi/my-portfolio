const skills = {
    "Cloud & DevOps": [
        { name: "AWS (IAM, VPC, S3)", level: 85 },
        { name: "Docker & Kubernetes", level: 75 },
        { name: "CI/CD (GitHub Actions)", level: 80 },
        { name: "Terraform", level: 60 }
    ],
    "Security": [
        { name: "Network Security", level: 90 },
        { name: "Cryptography (AES/RSA)", level: 85 },
        { name: "Penetration Testing", level: 70 },
        { name: "SIEM (Splunk/ELK)", level: 65 }
    ],
    "Development": [
        { name: "Python", level: 90 },
        { name: "JavaScript/React", level: 75 },
        { name: "Bash Scripting", level: 80 },
        { name: "C++", level: 70 }
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
