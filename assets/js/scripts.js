// SNOW
var falling = true;

TweenLite.set("#stage", { perspective: 600 });

var total = 50;
var container = document.getElementById("stage");
var w = window.innerWidth;
var h = window.innerHeight;

for (i = 0; i < total; i++) {
  var Div = document.createElement("div");
  TweenLite.set(Div, {
    attr: { class: "dot" },
    x: R(0, w),
    y: R(-200, -150),
    z: R(-200, 200),
  });
  container.appendChild(Div);
  animm(Div);
}
function animm(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  });
  TweenMax.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  TweenMax.to(elm, R(2, 8), {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}
function R(min, max) {
  return min + Math.random() * (max - min);
}

// LOGO SWITCH
function logoSwitch() {
  $(".altLogo").each(function () {
    var e =
      $(".startLogo").offset().top - $(this).closest(".logo-row").offset().top;
    TweenLite.to(this, 0, { y: e, force3D: !0 });
  });
}
function animm(e) {
  TweenMax.to(e, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  }),
    TweenMax.to(e, R(4, 8), {
      x: "+=100",
      rotationZ: R(0, 180),
      repeat: -1,
      yoyo: !0,
      ease: Sine.easeInOut,
    }),
    TweenMax.to(e, R(2, 8), {
      rotationX: R(0, 360),
      rotationY: R(0, 360),
      repeat: -1,
      yoyo: !0,
      ease: Sine.easeInOut,
      delay: -5,
    });
}
function R(e, t) {
  return e + Math.random() * (t - e);
}
gsap.registerPlugin(ScrollTrigger),
  $(document).scroll(function () {
    logoSwitch();
  }),
  logoSwitch(),
  console.clear();

// HORIZONTAL SCROLL
let sections = gsap.utils.toArray(".h-panel");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".h-container",
    pin: !0,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=0" + document.querySelector(".h-container").offsetWidth,
  },
}),

// ANIMATING ARROWS
gsap.to(".arrow-down", { y: 6, ease: "power1.inOut", repeat: -1, yoyo: !0 });
gsap.to(".arrow-right", { x: 6, ease: "power1.inOut", repeat: -1, yoyo: !0 });
