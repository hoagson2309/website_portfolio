const projects = window.PORTFOLIO_PROJECTS || [];

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const project = projects.find(item => item.id === projectId);

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");

function closeMenu() {
  menuLinks?.classList.remove("open");
  hamburgerIcon?.classList.remove("open");
  hamburgerIcon?.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (!hamburgerIcon || !menuLinks) return;

  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");

  const isOpen = menuLinks.classList.contains("open");
  hamburgerIcon.setAttribute("aria-expanded", String(isOpen));
}

function initMobileMenu() {
  hamburgerIcon?.addEventListener("click", toggleMenu);

  document.querySelectorAll(".menu-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".hamburger-menu")) {
      closeMenu();
    }
  });
}

function renderProjectMedia(project) {
  const mount = document.querySelector("#projectMedia");
  if (!mount) return;

  if (project.mediaType === "video") {
    mount.innerHTML = `
      <video controls playsinline poster="${project.poster || ""}">
        <source src="${project.media}" type="video/mp4" />
      </video>
    `;
    return;
  }

  mount.innerHTML = `
    <img src="${project.media}" alt="${project.title} preview" />
  `;
}

function renderProject() {
  if (!project) {
    document.querySelector(".project-page").innerHTML = `
      <section class="project-hero-detail">
        <p class="kicker">Project not found</p>
        <h1>This project does not exist.</h1>
        <p class="project-detail-subtitle">Go back to the homepage and choose another project.</p>
        <div class="project-detail-actions">
          <a class="button" href="index.html#work">Back to work</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${project.title} — Son Cao`;

  document.querySelector("#projectCategory").textContent = `${project.category} / ${project.year}`;
  document.querySelector("#projectTitle").textContent = project.title;
  document.querySelector("#projectSubtitle").textContent = project.subtitle;
  document.querySelector("#projectClient").textContent = project.client;
  document.querySelector("#projectYear").textContent = project.year;
  document.querySelector("#projectRole").textContent = project.role || "Creative / Developer";
  document.querySelector("#projectDescription").textContent = project.description || "";
  document.querySelector("#projectChallenge").textContent = project.challenge || "";
  document.querySelector("#projectOutcome").textContent = project.outcome || "";

  const toolsMount = document.querySelector("#projectTools");
  toolsMount.innerHTML = (project.tools || [])
    .map(tool => `<li>${tool}</li>`)
    .join("");

  renderProjectMedia(project);
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

initMobileMenu();
renderProject();