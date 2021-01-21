gsap.registerPlugin(ScrollTrigger);
//header
gsap.from(".header", {
  opacity: 0,
  x: -200,
  duration: 1,
  delay:1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".header",
    start: "top center",
  },
});
//
gsap.from(".right-container-heading", {
  x: -200,
  opacity: 0,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".text-container",
    start: "top center",
  },
});
gsap.from(".left-container-text", {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".text-container",
    start: "top center",
  },
});
//
gsap.from(".board-container", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".board-container",
    start: "top center",
  },
});
//
gsap.from("#box1", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: "#box1",
    start: "top center",
  },
});
gsap.from("#box2", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: "#box2",
    start: "top center",
  },
});
gsap.from("#box3", {
  opacity: 0,
  x: 200,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: "#box3",
    start: "top center",
  },
});
//
gsap.from(".review-heading", {
  opacity: 0,
  x: -250,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".review-heading",
    start: "top center",
  },
});
gsap.from(".review-box", {
  opacity: 0,
  x: 550,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".review-box",
    start: "top center",
  },
});
//
gsap.from(".img-block", {
  x: -200,
  opacity: 0,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".img-block",
    start: "top center",
  },
});
gsap.from(".container", {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".container",
    start: "top center",
  },
});