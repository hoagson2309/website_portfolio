// const projects = window.PORTFOLIO_PROJECTS || [];

// const featuredMount = document.querySelector("#featuredProjects");
// const listMount = document.querySelector("#projectList");
// const filters = document.querySelectorAll("[data-filter]");
// const hamburgerIcon = document.querySelector(".hamburger-icon");
// const menuLinks = document.querySelector(".menu-links");
// const yearMount = document.querySelector("#year");

// function mediaMarkup(project) {
//   if (project.mediaType === "video") {
//     return `
//       <video autoplay muted loop playsinline poster="${project.poster || ""}">
//         <source src="${project.media}" type="video/mp4" />
//       </video>
//     `;
//   }

//   return `<img src="${project.media}" alt="${project.title} preview" loading="lazy" />`;
// }

// function renderFeatured() {
//   if (!featuredMount) return;

//   featuredMount.innerHTML = projects
//     .filter(project => project.featured)
//     .slice(0, 3)
//     .map(project => `
//       <a class="feature-card reveal" href="${project.link}" data-category="${project.category}">
//         ${mediaMarkup(project)}
//         <div class="feature-card-content">
//           <div class="meta">${project.client} / ${project.category}</div>
//           <h3>${project.title}</h3>
//           <p>${project.subtitle}</p>
//         </div>
//       </a>
//     `)
//     .join("");
// }

// function renderProjects(filter = "all") {
//   if (!listMount) return;

//   const visibleProjects = filter === "all"
//     ? projects
//     : projects.filter(project => project.category === filter);

//   listMount.innerHTML = visibleProjects
//     .map(project => `
//       <a class="project-row reveal" href="${project.link}" data-category="${project.category}" data-image="${project.media}">
//         <div class="meta">${project.client}</div>
//         <div>
//           <h3>${project.title}</h3>
//           <p>${project.subtitle}</p>
//         </div>
//         <div class="meta">${project.category} / ${project.year}</div>
//         <div class="arrow" aria-hidden="true">→</div>
//       </a>
//     `)
//     .join("");

//   observeReveals();
// }

// function observeReveals() {
//   const reveals = document.querySelectorAll(".reveal:not(.is-observed)");

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) return;

//       entry.target.classList.add("is-visible");
//       observer.unobserve(entry.target);
//     });
//   }, { threshold: 0.12 });

//   reveals.forEach(element => {
//     element.classList.add("is-observed");
//     observer.observe(element);
//   });
// }

// function setActiveFilter(activeButton) {
//   filters.forEach(button => button.classList.remove("is-active"));
//   activeButton.classList.add("is-active");
//   renderProjects(activeButton.dataset.filter);
// }

// function closeMenu() {
//   menuLinks?.classList.remove("open");
//   hamburgerIcon?.classList.remove("open");
//   hamburgerIcon?.setAttribute("aria-expanded", "false");
// }

// function toggleMenu() {
//   if (!hamburgerIcon || !menuLinks) return;

//   menuLinks.classList.toggle("open");
//   hamburgerIcon.classList.toggle("open");

//   const isOpen = menuLinks.classList.contains("open");
//   hamburgerIcon.setAttribute("aria-expanded", String(isOpen));
// }

// function initFilters() {
//   filters.forEach(button => {
//     button.addEventListener("click", () => setActiveFilter(button));
//   });
// }

// function initMobileMenu() {
//   hamburgerIcon?.addEventListener("click", toggleMenu);

//   document.querySelectorAll(".menu-links a").forEach(link => {
//     link.addEventListener("click", closeMenu);
//   });

//   document.addEventListener("click", event => {
//     if (!event.target.closest(".hamburger-menu")) {
//       closeMenu();
//     }
//   });
// }

// function initMagneticItems() {
//   const magneticItems = document.querySelectorAll(`
//     .button,
//     .filter,
//     .big-link,
//     .socials a,
//     .site-menu a
//   `);

//   magneticItems.forEach(item => {
//     item.addEventListener("mousemove", event => {
//       const rect = item.getBoundingClientRect();
//       const x = event.clientX - rect.left - rect.width / 2;
//       const y = event.clientY - rect.top - rect.height / 2;

//       item.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
//     });

//     item.addEventListener("mouseleave", () => {
//       item.style.transform = "translate(0, 0)";
//     });

//     item.addEventListener("mousedown", () => {
//       item.style.transform += " scale(0.96)";
//     });

//     item.addEventListener("mouseup", () => {
//       item.style.transform = "translate(0, 0)";
//     });
//   });
// }

// function init() {
//   if (yearMount) {
//     yearMount.textContent = new Date().getFullYear();
//   }

//   renderFeatured();
//   renderProjects();
//   observeReveals();
//   initFilters();
//   initMobileMenu();
//   initMagneticItems();
// }

// init();

const projects = window.PORTFOLIO_PROJECTS || [];
const heroVideos = window.PORTFOLIO_HERO_VIDEOS || [];

const featuredMount = document.querySelector("#featuredProjects");
const listMount = document.querySelector("#projectList");
const filters = document.querySelectorAll("[data-filter]");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");
const yearMount = document.querySelector("#year");

// about white mode
const siteHeader = document.querySelector("[data-nav]");
const aboutSection = document.querySelector("#about");

const heroVideoA = document.querySelector("#heroVideoA");
const heroVideoB = document.querySelector("#heroVideoB");
const heroTimeline = document.querySelector("#heroTimeline");
const heroVideoState = document.querySelector("#heroVideoState");

let activeHeroIndex = 0;
let activeVideoLayer = 0;
let heroStartTime = 0;
let heroIsLocked = false;
let heroAnimationFrame = null;

const HERO_DURATION = 7000;

function mediaMarkup(project) {
  if (project.mediaType === "video") {
    return `
      <video autoplay muted loop playsinline poster="${project.poster || ""}">
        <source src="${project.media}" type="video/mp4" />
      </video>
    `;
  }

  return `<img src="${project.media}" alt="${project.title} preview" loading="lazy" />`;
}

function renderFeatured() {
  if (!featuredMount) return;

  featuredMount.innerHTML = projects
    .filter(project => project.featured)
    .slice(0, 3)
    .map(project => `
      <a class="feature-card reveal" href="${project.link}" data-category="${project.category}">
        ${mediaMarkup(project)}
        <div class="feature-card-content">
          <div class="meta">${project.client} / ${project.category}</div>
          <h3>${project.title}</h3>
          <p>${project.subtitle}</p>
        </div>
      </a>
    `)
    .join("");
}

function renderProjects(filter = "all") {
  if (!listMount) return;

  const visibleProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  listMount.innerHTML = visibleProjects
    .map(project => `
      <a class="project-row reveal" href="${project.link}" data-category="${project.category}" data-image="${project.media}">
        <div class="meta">${project.client}</div>
        <div>
          <h3>${project.title}</h3>
          <p>${project.subtitle}</p>
        </div>
        <div class="meta">${project.category} / ${project.year}</div>
        <div class="arrow" aria-hidden="true">→</div>
      </a>
    `)
    .join("");

  observeReveals();
}

function observeReveals() {
  const reveals = document.querySelectorAll(
    ".reveal:not(.is-observed), .reveal-left:not(.is-observed), .reveal-right:not(.is-observed), .reveal-scale:not(.is-observed), .project-row:not(.is-observed), .skill-list:not(.is-observed), .filters:not(.is-observed), .contact:not(.is-observed), .statement:not(.is-observed)"
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  reveals.forEach(element => {
    element.classList.add("is-observed");
    observer.observe(element);
  });
}

function setActiveFilter(activeButton) {
  filters.forEach(button => button.classList.remove("is-active"));
  activeButton.classList.add("is-active");
  renderProjects(activeButton.dataset.filter);
}

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

function initFilters() {
  filters.forEach(button => {
    button.addEventListener("click", () => setActiveFilter(button));
  });
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

function setVideoSource(videoElement, videoData) {
  if (!videoElement || !videoData) return;

  if (videoElement.dataset.src === videoData.src) {
    videoElement.play().catch(() => {});
    return;
  }

  videoElement.dataset.src = videoData.src;
  videoElement.poster = videoData.poster || "";
  videoElement.src = videoData.src;
  videoElement.currentTime = 0;
  videoElement.load();
  videoElement.play().catch(() => {});
}

function renderHeroTimeline() {
  if (!heroTimeline || !heroVideos.length) return;

  heroTimeline.innerHTML = heroVideos
    .map((video, index) => `
      <button class="hero-timeline-item" type="button" data-hero-index="${index}">
        <span class="hero-timeline-meta">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <span>${video.client}</span>
        </span>
        <span class="hero-timeline-title">${video.title}</span>
        <span class="hero-timeline-track">
          <span class="hero-timeline-fill"></span>
        </span>
      </button>
    `)
    .join("");

  document.querySelectorAll("[data-hero-index]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.heroIndex);
      showHeroVideo(index, true);
    });
  });
}

// function updateHeroTimeline(progress = 0) {
//   document.querySelectorAll(".hero-timeline-item").forEach((item, index) => {
//     const fill = item.querySelector(".hero-timeline-fill");

//     item.classList.toggle("is-active", index === activeHeroIndex);
//     item.classList.toggle("is-locked", heroIsLocked && index === activeHeroIndex);

//     if (!fill) return;

//     if (index < activeHeroIndex && !heroIsLocked) {
//       fill.style.width = "100%";
//     } else if (index === activeHeroIndex) {
//       fill.style.width = heroIsLocked ? "100%" : `${progress * 100}%`;
//     } else {
//       fill.style.width = "0%";
//     }
//   });

//   if (heroVideoState) {
//     heroVideoState.textContent = heroIsLocked ? "Locked" : "Auto playing";
//   }
// }

function updateHeroTimeline(progress = 0) {
  document.querySelectorAll(".hero-timeline-item").forEach((item, index) => {
    const fill = item.querySelector(".hero-timeline-fill");

    item.classList.toggle("is-active", index === activeHeroIndex);
    item.classList.toggle("is-locked", heroIsLocked && index === activeHeroIndex);

    if (!fill) return;

    if (index < activeHeroIndex && !heroIsLocked) {
      fill.style.width = "100%";
    } else if (index === activeHeroIndex) {
      fill.style.width = heroIsLocked ? "100%" : `${progress * 100}%`;
    } else {
      fill.style.width = "0%";
    }
  });

  if (heroVideoState) {
    heroVideoState.textContent = heroIsLocked ? "Locked" : "Auto playing";
    heroVideoState.setAttribute("aria-pressed", String(heroIsLocked));
  }
}

function showHeroVideo(index, lockVideo = false) {
  if (!heroVideos.length || !heroVideoA || !heroVideoB) return;

  activeHeroIndex = index;
  heroIsLocked = lockVideo;
  heroStartTime = performance.now();

  const videoLayers = [heroVideoA, heroVideoB];
  const currentLayer = videoLayers[activeVideoLayer];
  const nextLayerIndex = activeVideoLayer === 0 ? 1 : 0;
  const nextLayer = videoLayers[nextLayerIndex];

  setVideoSource(nextLayer, heroVideos[activeHeroIndex]);

  nextLayer.classList.add("is-active");
  currentLayer.classList.remove("is-active");

  activeVideoLayer = nextLayerIndex;

  updateHeroTimeline(0);
}

function playNextHeroVideo() {
  const nextIndex = (activeHeroIndex + 1) % heroVideos.length;
  showHeroVideo(nextIndex, false);
}

function animateHeroTimeline(currentTime) {
  if (!heroVideos.length) return;

  if (!heroIsLocked) {
    const elapsed = currentTime - heroStartTime;
    const progress = Math.min(elapsed / HERO_DURATION, 1);

    updateHeroTimeline(progress);

    if (progress >= 1) {
      playNextHeroVideo();
    }
  } else {
    updateHeroTimeline(1);
  }

  heroAnimationFrame = requestAnimationFrame(animateHeroTimeline);
}

function initHeroVideoSlider() {
  if (!heroVideos.length || !heroVideoA || !heroVideoB || !heroTimeline) return;

  renderHeroTimeline();

  setVideoSource(heroVideoA, heroVideos[0]);
  heroVideoA.classList.add("is-active");
  heroVideoB.classList.remove("is-active");

  activeHeroIndex = 0;
  activeVideoLayer = 0;
  heroStartTime = performance.now();

  // updateHeroTimeline(0);
  // heroAnimationFrame = requestAnimationFrame(animateHeroTimeline);
  heroVideoState?.addEventListener("click", toggleHeroPlaybackMode);

  updateHeroTimeline(0);
  heroAnimationFrame = requestAnimationFrame(animateHeroTimeline);
}

function initMagneticItems() {
  const magneticItems = document.querySelectorAll(`
    .button,
    .socials a,
    .site-menu a
  `);

  magneticItems.forEach(item => {
    item.addEventListener("mousemove", event => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      item.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translate(0, 0)";
    });

    item.addEventListener("mousedown", () => {
      item.style.transform += " scale(0.96)";
    });

    item.addEventListener("mouseup", () => {
      item.style.transform = "translate(0, 0)";
    });
  });

  document.querySelectorAll(".filter").forEach(filter => {
    filter.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease";

    filter.addEventListener("mousemove", event => {
      const rect = filter.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.15;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.15;
      filter.style.transform = `translate(${x}px, ${y}px)`;
    });

    filter.addEventListener("mouseleave", () => {
      filter.style.transform = "translate(0, 0)";
    });

    filter.addEventListener("mousedown", () => {
      filter.style.transform += " scale(0.95)";
    });

    filter.addEventListener("mouseup", () => {
      filter.style.transform = "translate(0, 0)";
    });
  });

  const bigLink = document.querySelector(".big-link");
  if (bigLink) {
    bigLink.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";

    bigLink.addEventListener("mousemove", event => {
      const rect = bigLink.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
      bigLink.style.transform = `translate(${x}px, ${y}px)`;
    });

    bigLink.addEventListener("mouseleave", () => {
      bigLink.style.transform = "translate(0, 0)";
    });
  }
}

//before about white mode
// function init() {
//   if (yearMount) {
//     yearMount.textContent = new Date().getFullYear();
//   }

//   initHeroVideoSlider();
//   renderFeatured();
//   renderProjects();
//   observeReveals();
//   initFilters();
//   initMobileMenu();
//   initMagneticItems();
// }

//after about white mode
function init() {
  if (yearMount) {
    yearMount.textContent = new Date().getFullYear();
  }

  initHeroVideoSlider();
  renderFeatured();
  renderProjects();
  observeReveals();
  initFilters();
  initMobileMenu();
  initMagneticItems();
  initNavbarTheme();
}

function toggleHeroPlaybackMode() {
  heroIsLocked = !heroIsLocked;

  if (!heroIsLocked) {
    heroStartTime = performance.now();
  }

  updateHeroTimeline(heroIsLocked ? 1 : 0);
}

// ABOUT parallax
const aboutMedia = document.querySelector(".about-media");

function updateAboutParallax() {
  if (!aboutMedia || !aboutSection) return;
  const rect = aboutSection.getBoundingClientRect();
  const windowH = window.innerHeight;
  if (rect.bottom < 0 || rect.top > windowH) return;

  const progress = (windowH - rect.top) / (windowH + rect.height);
  const shift = (progress - 0.5) * 40;
  aboutMedia.style.transform = `translateY(${shift}px)`;
}

window.addEventListener("scroll", updateAboutParallax, { passive: true });

// ABOUT White mode + dark navbar over hero/statement in light mode
const heroSection = document.querySelector(".hero");
const statementSection = document.querySelector(".statement");

function updateNavbarTheme() {
  if (!siteHeader || !aboutSection) return;

  const headerRect = siteHeader.getBoundingClientRect();
  const headerMiddle = headerRect.top + headerRect.height / 2;

  const aboutRect = aboutSection.getBoundingClientRect();
  const isOverAbout = headerMiddle >= aboutRect.top && headerMiddle <= aboutRect.bottom;
  siteHeader.classList.toggle("is-over-light", isOverAbout);

  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    let isOverDark = false;
    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      if (headerMiddle >= heroRect.top && headerMiddle <= heroRect.bottom) isOverDark = true;
    }
    siteHeader.classList.toggle("is-over-dark", isOverDark);
  } else {
    siteHeader.classList.remove("is-over-dark");
  }
}

function initNavbarTheme() {
  updateNavbarTheme();

  window.addEventListener("scroll", updateNavbarTheme, { passive: true });
  window.addEventListener("resize", updateNavbarTheme);
}


init();