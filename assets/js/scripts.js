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




TweenMax.to("h1", 2, {
  delay: 0,
  y: "-=60px",
  yoyo:true,
  repeat:-1,
  ease: "power2",
  rotationX: 5,
  rotationY: 360,
  rotationZ: 0,
  scale: 1.5,
  y:-100
});

const tl = gsap.timeline(),
    mainText = document.querySelector("h1"),
    dur = 5,
    del = 1;

// Text rotation
gsap.set(mainText, {transformOrigin: "center center", repeat: -1, rotation:0, duration:5, ease:"none", scale:1.2});
gsap.to(mainText, { repeat: 1, duration: 5, yoyo:"true", ease:"none", scale: 1.1, delay: 2});

