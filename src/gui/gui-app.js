import { renderTicker } from './components/ticker.js';
import { renderHero } from './components/hero.js';
import { renderSkills } from './components/skills.js';
import { renderQualifications } from './components/qualifications.js';
import { renderProjects } from './components/projects.js';
import { renderContact } from './components/contact.js';

export function mount(container) {
  container.innerHTML = `
    <div class="gui-layout">
      <nav class="glass-panel nav-bar">
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
  `;

  // Mount Components
  renderHero(container.querySelector('#hero'));
  renderSkills(container.querySelector('#skills'));
  renderQualifications(container.querySelector('#qualifications'));
  renderProjects(container.querySelector('#projects'));
  renderContact(container.querySelector('#contact'));
  renderTicker(container.querySelector('#ticker-container'));

  // Logic for Mobile Menu Toggle
  const toggleBtn = container.querySelector('.menu-toggle');
  const navLinks = container.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change button text based on state
    const span = toggleBtn.querySelector('span');
    if (navLinks.classList.contains('active')) {
      span.textContent = '[ :: CLOSE :: ]';
      span.style.color = 'var(--text-primary)';
    } else {
      span.textContent = '[ :: SYSTEM :: ]';
      span.style.color = 'var(--accent-primary)';
    }
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const span = toggleBtn.querySelector('span');
      span.textContent = '[ :: SYSTEM :: ]';
      span.style.color = 'var(--accent-primary)';
    });
  });

  // Add scroll padding for fixed nav
  document.documentElement.style.scrollPaddingTop = '80px';
}
