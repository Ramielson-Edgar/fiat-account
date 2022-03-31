let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

gsap.registerPlugin(ScrollTrigger);

tl.to(
  ".first-screen-heading",
  {
    "clip-path": "polygon(0% -200%, 200% 0%, 200% 200%, 0% 320%)",
    opacity: 1,
    y: 0,
    duration: 2,
  },
  0.5
);
tl.to(
  ".first-screen-description",
  {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, -4% 100%)",
    opacity: 1,
    y: 0,
    duration: 2.1,
  },
  1.2
);

tl.to(
  ".main-img-container",
  { "clip-path": "circle(300% at 100% 100%)", opacity: 1, y: 0, duration: 1.5 },
  2.5
);

tl.to(".btn-primary-reveal", { y: 0, opacity: 1, duration: 1.5 }, 2.2);

gsap.to(".separator-header", {
  scrollTrigger: {
    trigger: ".separator-header",
    start: "-130px center",
    toggleActions: "play pause resume none",
  },

  duration: 1,
  opacity: 1,
  delay: 0.6,
});

gsap.to(".security-item", {
  scrollTrigger: {
    trigger: ".security-item",
    start: "-130px center",
    toggleActions: "play pause resume none",
  },

  stagger: 0.3,
  opacity: 1,
  duration: 1,
  y: 0,
});

gsap.to(".btn-secondary-reveal", {
  scrollTrigger: {
    trigger: ".btn-secondary-reveal",
    start: "-100px center",
    toggleActions: "play pause resume none",
  },

  opacity: 1,
  duration: 1,
  y: 0,
});

gsap.to(".features-item", {
  scrollTrigger: {
    trigger: ".features-item",
    start: "top center",
    toggleActions: "play pause resume none",
  },

  stagger: 0.3,
  "clip-path": "circle(300% at 50% 200%)",
  opacity: 1,
  duration: 1,
});

gsap.to(".account-wrapper", {
  scrollTrigger: {
    trigger: ".account-wrapper",
    start: "top center",
    toggleActions: "play pause resume none",
  },

  opacity: 1,
  duration: 1,
  x: 0,
});

gsap.to(".account-description", {
  scrollTrigger: {
    trigger: ".account-description",
    start: "-150px center",
    toggleActions: "play pause resume none",
  },

  opacity: 1,
  duration: 1,
  x: 0,
});

gsap.to(".discover-section", {
  scrollTrigger: {
    trigger: ".discover-section",
    start: "200px center",
    toggleActions: "play pause resume none",
  },

  "clip-path": "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
  opacity: 1,
  duration: 1,
});

gsap.to(".copy-section-header", {
  scrollTrigger: {
    trigger: ".copy-section-header",
    start: "-150px center",
    toggleActions: "play pause resume none",
  },

  "clip-path": "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
  opacity: 1,
  duration: 1,
});

gsap.to(".copy-section-desc", {
  scrollTrigger: {
    trigger: ".copy-section-desc",
    toggleActions: "play pause resume none",
  },

  "clip-path": "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
  opacity: 1,
  duration: 1,
  delay: 1.2,
});

gsap.to(".copy-section-img", {
  scrollTrigger: {
    trigger: ".copy-section-img",
    start: "top center",
    toggleActions: "play pause resume none",
  },

  "clip-path": "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
  opacity: 1,
  duration: 1,
});

gsap.to(".copy-section-btn", {
  scrollTrigger: {
    trigger: ".copy-section-btn",
    toggleActions: "play pause resume none",
  },

  opacity: 1,
  duration: 1,
  delay: 2.3,
});
