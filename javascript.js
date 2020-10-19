


function openNav() {
  document.getElementById("SideMenu").style.width = "100%";
}

function closeNav() {
  document.getElementById("SideMenu").style.width = "0";
}




window.onscroll = function() {KeepAtTop()};

var header = document.getElementById("OpenNav");
var topmenu = header.offsetTop;

function KeepAtTop() {
  if (window.pageYOffset > topmenu) {
    header.classList.add("Top");
  } else {
    header.classList.remove("Top");
  }
}



gsap.from("#Logo", {
  duration: 1,
  opacity: 0,
  x: 200,
  delay: 1,
  ease: "ease",

});




gsap.from("#Welcome h2", {
  delay: 2,
  duration: 1,
  y:20,
  opacity: 0,
  stagger: 0.2,
  ease: "power4",

});




gsap.from("#Welcome span", {
  scale: 0.2,
  duration: 1,
  scale: 0.5,
  opacity: 0,
  stagger: 0.4,
  ease: "power3",

});




