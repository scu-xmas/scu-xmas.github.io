
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // --- .content-panel (light gray)---
// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".content-panel",
//     scrub: true,
//     pin: true,
//     start: "top top",
//     end: "bottom",
//     markers: {
//       startColor: "green",
//       endColor: "red",
//       fontSize: "18px",
//       fontWeight: "bold",
//       indent: 20,
//     },
//   },
// });


// // img
// tl.from("img", {
//   y: 40,
//   scale: 0.9,
//   opacity: 0,
//   transformOrigin: "center center",
//   ease: "power2",
//   duration: .3,
//   stagger:2,
// });


// tl.from("p", {
//   opacity: 0,
//   ease: "powerEase",
//   start:"-=100%",
//   y: 80,
//   scale:.8,
//   stagger:.5
// });


//   // button
// tl.from("button", {
//   y: 40,
//   scale: 0.9,
//   opacity: 0,
//   transformOrigin: "center center",
//   ease: "power2",
//   duration: .3,
//   stagger:2,
// });

// // Exit
// tl.to("p, img, button", {
//   y: 40,
//   scale: 0.9,
//   opacity: 0,
//   transformOrigin: "center center",
//   ease: "power2",
//   start: "+=900",
//   stagger:.3,
// });

// // tl.to(".content-panel", {
// //   opacity: 0,
// //   start:"+=700"
// // });

// gsap.utils.toArray("nav a").forEach(function (a) {
//   a.addEventListener("click", function (e) {
//     e.preventDefault();
//     gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
//   });
// });

var falling = true;

TweenLite.set("#stage",{perspective:600})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 30;
var container = document.getElementById("stage"),	w = window.innerWidth , h = window.innerHeight;

 for (i=0; i<total; i++){
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   container.appendChild(Div);
   animm(Div);
 }

 function animm(elm){
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};






