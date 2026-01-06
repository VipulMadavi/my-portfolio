export function renderHero(element) {
  element.innerHTML = `
    <div class="container hero-container">
      <div class="hero-content">
        <span class="mono-subtitle">> SYSTEM STATUS: SEEKING OPPORTUNITIES...</span>
        <h1 class="hero-title glitch" data-text="Vipul Madavi">
          Vipul Madavi
        </h1>
        <div class="typewriter-text">
          I am <span id="typing-text"></span><span class="cursor"></span>
        </div>
        <p class="hero-subtitle">
          Pre-final Year Computer Science Student.<br>
          Building resilient cloud infrastructure and securing the digital frontier.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#" class="btn btn-resume">Resume_v1.0</a>
        </div>
      </div>
    </div>
  `;

  initTyping();
}

function initTyping() {
  const roles = [
    "a Computer Science Student.",
    "a Cloud Sec Enthusiast.",
    "learning DevSecOps.",
    "building Secure Systems."
  ];
  const el = document.getElementById('typing-text');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}
