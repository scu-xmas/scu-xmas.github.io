// LOGO SWITCH

function logoSwitch() {
  $('.altLogo').each(function () {

    // eslint-disable-next-line max-len
    var distance = $('.startLogo').offset().top - $(this).closest('.logo-row').offset().top;

    TweenLite.to(this, 0, { y: distance, force3D: true });

  });
};

$(document).scroll(function () { logoSwitch(); });

logoSwitch();
console.clear();
var tl = new TimelineLite({ paused: true });
var dur = 0.5;
tl.to('.OO', dur, { drawSVG: 0, ease: Sine.easeInOut });
tl.fromTo('.OO', dur,
  { drawSVG: '100% 100%', ease: Sine.easeIn },
  { drawSVG: '100% 0%', ease: Sine.easeOut, immediateRender: false });


$('.animate').mouseenter(function () {
  if (!tl.isActive()) {
    tl.play(0);
  }
});

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray('.h-panel');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.h-container',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => '+=0' + document.querySelector('.h-container').offsetWidth,
  },
});


// SCROLL DOWN ARROW
gsap.to('.arrow', {
  y: 12,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true,
});

// SNOW
var falling = true;

TweenLite.set('#stage', { perspective: 600 });
TweenLite.set('#stage>img', { xPercent: '-50%', yPercent: '-50%' });

var total = 50;
var container = document.getElementById('stage');
var w = window.innerWidth;
var h = window.innerHeight;

for (i = 0; i < total; i++) {
  var Div = document.createElement('div');
  TweenLite.set(Div, {
    attr: { class: 'dot' },
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
    x: '+=100',
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
