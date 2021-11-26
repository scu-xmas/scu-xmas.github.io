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
  logoSwitch();

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
});

// TEXT & IMAGES
//   ANIMATE (DIRECTIONAL)
function animateFrom(elem, direction) {
  direction = direction | 1;

  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gstrigger_fromTop")) {
    x = 0;
    y = -100;
  } else if (elem.classList.contains("gstrigger_fromBottom")) {
    x = 0;
    y = 100;
  }

  if (elem.classList.contains("gstrigger_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gstrigger_fromRight")) {
    x = 100;
    y = 0;
  }

  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 2.5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0, duration: 5 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gstrigger").forEach(function (elem) {
    hide(elem); // CHECK ELEMENT IS HIDDEN

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // CHECK ELEMENT IS HIDDEN
    });
  });
});

// ANIMATING ARROWS
gsap.to(".arrow-down", {
  y: 6,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: !0,
});
gsap.to(".arrow-right", {
  x: 6,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: !0,
});

// CLEAR CONSOLE
console.clear();
