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
  `;

  // Mount Components
  renderHero(container.querySelector('#hero'));
  renderSkills(container.querySelector('#skills'));
  renderQualifications(container.querySelector('#qualifications'));
  renderProjects(container.querySelector('#projects'));
  renderContact(container.querySelector('#contact'));
  renderTicker(container.querySelector('#ticker-container'));

  // Add scroll padding for fixed nav
  document.documentElement.style.scrollPaddingTop = '80px';
}
