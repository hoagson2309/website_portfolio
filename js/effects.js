(function () {
  let lenis;

  // ============================================================
  // LENIS SMOOTH SCROLL
  // ============================================================
  function initSmoothScroll() {
    if (typeof Lenis === "undefined") return;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href === "#top") {
          lenis.scrollTo(0);
        } else {
          const target = document.querySelector(href);
          if (target) lenis.scrollTo(target, { offset: -100 });
        }
      });
    });

    document.documentElement.style.scrollBehavior = "auto";
  }

  // ============================================================
  // PRELOADER
  // ============================================================
  function initPreloader() {
    return new Promise((resolve) => {
      const counter = document.getElementById("preloaderCounter");
      const fill = document.getElementById("preloaderFill");
      const preloader = document.getElementById("preloader");

      if (!preloader) {
        resolve();
        return;
      }

      const duration = 1600;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const count = Math.floor(eased * 100);

        if (counter) counter.textContent = count;
        if (fill) fill.style.width = count + "%";

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (counter) counter.textContent = 100;
          if (fill) fill.style.width = "100%";

          setTimeout(() => {
            preloader.classList.add("is-done");
            document.body.classList.remove("is-loading");
            setTimeout(resolve, 900);
          }, 350);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // ============================================================
  // CUSTOM CURSOR
  // ============================================================
  function initCursor() {
    const cursor = document.getElementById("cursor");
    const cursorMedia = document.getElementById("cursorMedia");
    const cursorImage = document.getElementById("cursorImage");

    if (!cursor) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let mediaX = mouseX;
    let mediaY = mouseY;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      mediaX += (mouseX - mediaX) * 0.08;
      mediaY += (mouseY - mediaY) * 0.08;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      if (cursorMedia) {
        cursorMedia.style.transform = `translate(${mediaX}px, ${mediaY}px)`;
      }

      requestAnimationFrame(animate);
    }
    animate();

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, .filter")) {
        cursor.classList.add("is-active");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, .filter")) {
        cursor.classList.remove("is-active");
      }
    });

    const projectList = document.getElementById("projectList");
    if (projectList && cursorMedia && cursorImage) {
      projectList.addEventListener("mouseover", (e) => {
        const row = e.target.closest(".project-row");
        if (row && row.dataset.image) {
          cursorImage.src = row.dataset.image;
          cursorMedia.classList.add("is-visible");
          cursor.classList.add("is-project");
        }
      });

      projectList.addEventListener("mouseout", (e) => {
        const row = e.target.closest(".project-row");
        if (row) {
          cursorMedia.classList.remove("is-visible");
          cursor.classList.remove("is-project");
        }
      });
    }
  }

  // ============================================================
  // TEXT SPLIT ANIMATION
  // ============================================================
  function initTextSplit() {
    const heading = document.querySelector(".hero h1");
    if (!heading) return;

    const html = heading.innerHTML;
    heading.classList.add("split-text");
    heading.innerHTML = "";

    const parts = html.split(/<br\s*\/?>/i);
    let totalIndex = 0;

    parts.forEach((part, lineIndex) => {
      if (lineIndex > 0) {
        heading.appendChild(document.createElement("br"));
      }

      const lineSpan = document.createElement("span");
      lineSpan.className = "split-line";

      const trimmed = part.trim();
      for (let i = 0; i < trimmed.length; i++) {
        const charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.textContent = trimmed[i] === " " ? " " : trimmed[i];
        charSpan.style.transitionDelay = `${totalIndex * 0.04 + 0.2}s`;
        lineSpan.appendChild(charSpan);
        totalIndex++;
      }

      heading.appendChild(lineSpan);
    });
  }

  function revealText() {
    const heading = document.querySelector(".hero h1");
    if (heading) heading.classList.add("is-revealed");
  }

  // ============================================================
  // IMAGE REVEAL (CLIP-PATH)
  // ============================================================
  function initImageReveals() {
    const images = document.querySelectorAll(".about-media");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    images.forEach((img) => observer.observe(img));
  }

  // ============================================================
  // HEADER AUTO-HIDE ON SCROLL DOWN
  // ============================================================
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;

        requestAnimationFrame(() => {
          const currentScroll = window.scrollY;

          if (currentScroll > 300) {
            header.classList.toggle(
              "is-hidden",
              currentScroll > lastScroll && currentScroll > 500
            );
          } else {
            header.classList.remove("is-hidden");
          }

          lastScroll = currentScroll;
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  // ============================================================
  // PROJECT ROW MOUSE GLOW
  // ============================================================
  function initProjectRowEffects() {
    const projectList = document.getElementById("projectList");
    if (!projectList) return;

    projectList.addEventListener("mousemove", (e) => {
      const row = e.target.closest(".project-row");
      if (!row) return;

      const rect = row.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      row.style.setProperty("--mouse-x", x);
      row.style.setProperty("--mouse-y", y);
    });
  }

  // ============================================================
  // SCROLL PROGRESS BAR
  // ============================================================
  function initScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;

    window.addEventListener(
      "scroll",
      () => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        bar.style.transform = `scaleX(${progress})`;
      },
      { passive: true }
    );
  }

  // ============================================================
  // INIT ALL EFFECTS
  // ============================================================
  async function initEffects() {
    document.body.classList.add("is-loading");
    initTextSplit();

    await initPreloader();

    revealText();
    initSmoothScroll();
    initCursor();
    initImageReveals();
    initHeaderScroll();
    initProjectRowEffects();
    initScrollProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEffects);
  } else {
    initEffects();
  }
})();
