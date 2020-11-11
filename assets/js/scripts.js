
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- .content-panel (light gray)---
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-panel",
    scrub: true,
    pin: true,
    start: "top top",
    end: "bottom",
    markers: {
      startColor: "green",
      endColor: "red",
      fontSize: "18px",
      fontWeight: "bold",
      indent: 20,
    },
  },
});


// img
tl.from("img", {
  y: 40,
  scale: 0.9,
  opacity: 0,
  transformOrigin: "center center",
  ease: "power2",
  duration: .3,
  stagger:2,
});


tl.from("p", {
  opacity: 0,
  ease: "powerEase",
  start:"-=100%",
  y: 80,
  scale:.8,
  stagger:.5
});


  // button
tl.from("button", {
  y: 40,
  scale: 0.9,
  opacity: 0,
  transformOrigin: "center center",
  ease: "power2",
  duration: .3,
  stagger:2,
});

// Exit
tl.to("p, img, button", {
  y: 40,
  scale: 0.9,
  opacity: 0,
  transformOrigin: "center center",
  ease: "power2",
  start: "+=900",
  stagger:.3,
});

// tl.to(".content-panel", {
//   opacity: 0,
//   start:"+=700"
// });

gsap.utils.toArray("nav a").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
  });
});
