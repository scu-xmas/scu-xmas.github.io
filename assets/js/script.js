
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    // pin: true,
    pinSpacing: false,
    // markers: true,
  });
});

// arrow animations

let arrow = document.querySelector('.arrow');

if(arrow){
  gsap.to(arrow, {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});
}

// Lottie helper
function LottieScrollTrigger(vars) {
	let playhead = {frame: 0},
		target = gsap.utils.toArray(vars.target)[0],
		speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
		st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
		animation = lottie.loadAnimation({
			container: target,
			renderer: vars.renderer || "svg",
			loop: false,
			autoplay: false,
			path: vars.path
		});
	for (let p in vars) { // let users override the ScrollTrigger defaults
		st[p] = vars[p];
	}
	animation.addEventListener("DOMLoaded", function() {
		gsap.to(playhead, {
      duration: vars.duration || 0.5,
      delay: vars.delay || 0,
			frame: animation.totalFrames - 1,
			ease: vars.ease || "none",
			onUpdate: () => animation.goToAndStop(playhead.frame, true),
			scrollTrigger: st
		});
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
	});
  return animation;
}

// Lottie animation
LottieScrollTrigger({
  target: "#animation",
  path: "assets/img/TT-Animation.json",
  speed: "medium",
  scrub: "onExit" //gsap values!
 });

// text reveal
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 300;
  if(elem.classList.contains(".reveal-a")) {
    x = 20;
    y = 0;
  } else if (elem.classList.contains(".reveal-b")) {
    x = -40;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 3,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "power2.inOut",
    overwrite: "auto",
    stagger: 3
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

// Panel snapping
ScrollTrigger.create({
  trigger: ".wrapper",
  snap: 1 / 15,
  duration: .3,
  ease: "power1.inOut",
  // markers: true
});

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});



//play when video is visible
var videos = document.getElementsByTagName("iframe"),
  fraction = 0.8;

function checkScroll() {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];

    var x = 0,
      y = 0,
      w = video.width,
      h = video.height,
      r, //right
      b, //bottom
      visibleX,
      visibleY,
      visible,
      parent;

    parent = video;
    while (parent && parent !== document.body) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }

    r = x + parseInt(w);
    b = y + parseInt(h);

    visibleX = Math.max(
      0,
      Math.min(
        w,
        window.pageXOffset + window.innerWidth - x,
        r - window.pageXOffset
      )
    );
    visibleY = Math.max(
      0,
      Math.min(
        h,
        window.pageYOffset + window.innerHeight - y,
        b - window.pageYOffset
      )
    );

    visible = (visibleX * visibleY) / (w * h);

    if (visible > fraction) {
      playVideo();
    } else {
      pauseVideo();
    }
  }
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  window.addEventListener("scroll", checkScroll, false);
  window.addEventListener("resize", checkScroll, false);

  //check at least once so you don't have to wait for scrolling for the    video to start
  window.addEventListener("load", checkScroll, false);
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    //console.log("event played");
  } else {
    //console.log("event paused");
  }
}

function stopVideo() {
  player.stopVideo();
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}


