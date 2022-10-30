// Toggle navigation slider
const nav = document.querySelector(".aside3");
const hamburger = document.querySelector(".menu");
const rhs = document.querySelector(".new");
function toggle() {
  if (nav.style.transform === "translateX(-700px)") {
    nav.style.transform = "translateX(0px)";
    nav.style.transition = "0.5s";
  } else {
    nav.style.transform = "translateX(-700px)";
  }
}
hamburger.addEventListener("click", toggle);

//First Chart Click Animation
const heart1 = document.querySelector(".heartt");
function tick() {
  if (heart1.style.fill === "none") {
    heart1.style.fill = "#facd66";
    heart1.style.background = "#7e6927";
  } else {
    heart1.style.fill = "none";
    heart1.style.background = "none";
    heart1.style.transition = "0.2s";
  }
}

heart1.addEventListener("click", tick);

//Second Chart heart Click Animation
const heart2 = document.querySelector(".hearttt");

function tock() {
  if (heart2.style.fill === "none") {
    heart2.style.fill = "#facd66";
    heart2.style.background = "#7e6927";
  } else {
    heart2.style.fill = "none";
    heart2.style.background = "none";
    heart2.style.transition = "0.4s";
  }
}
heart2.addEventListener("click", tock);

//Third Chart heart Click Animation
const heart3 = document.querySelector(".heart");
function tack() {
  if (heart3.style.fill === "none") {
    heart3.style.fill = "#facd66";
    heart3.style.background = "#7e6927";
  } else {
    heart3.style.fill = "none";
    heart3.style.background = "none";
    heart3.style.transition = "0.4s";
  }
}
heart3.addEventListener("click", tack);

// All Variables Involved
const tod = document.querySelector(".today");
const one = document.querySelector(".container");
const two = document.querySelector(".container2");
const three = document.querySelector(".container3");
const four = document.querySelector(".container4");
const navm = document.querySelector(".nav-mobile");
const collect = document.querySelector("#playlist");
const home = document.querySelector("#home");
const navpc = document.querySelector(".nav-pc");
const radio = document.querySelector("#radio");
const mhome = document.querySelector("#mhome");
const mcole = document.querySelector("#mcollect");
const mradio = document.querySelector("#mradio");

// First Page Switching Animation
function change() {
  if (two.style.display === "none") {
    two.style.display = "block";
    one.style.display = "none";
    three.style.display = "none";
    two.style.opacity = "1";
    two.style.transition = "1s";
    rt.style.display = "block";
  } else {
    two.style.display = "none";
    one.style.display = "block";
    one.style.transition = "0.5s";
    two.style.transition = "0.5s";
  }
}
tod.addEventListener("click", change);
// first page switching Animation(mobile)
function changge() {
  if (one.style.display === "none") {
    two.style.display = "none";
    one.style.display = "block";
    three.style.display = "none";
    four.style.display = "none";
    two.style.opacity = "1";
    two.style.transition = "1s";
    rt.style.display = "none";
  } else {
    two.style.display = "none";
    one.style.display = "block";
    one.style.transition = "0.5s";
    two.style.transition = "0.5s";
  }
}
mhome.addEventListener("click", changge);

// second Page Switching Animation
function changecollect() {
  if (three.style.display === "none") {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "block";
    four.style.display = "none";
    two.style.opacity = "1";
    two.style.transition = "1s";
    rt.style.display = "none";
  } else {
    three.style.display = "block";
    one.style.display = "none";
    one.style.transition = "0.5s";
    three.style.transition = "0.5s";
  }
}
// ICON COLOUR CHANGE
collect.addEventListener("click", function color() {
  if ((collect.style.fill = "#EFEEE0")) {
    collect.style.fill = "#facd66";
    collect.style.opacity = "1";
    home.style.fill = "#EFEEE0";
    home.style.opacity = "0.25";
    radio.style.fill = "rgb(239, 238, 224)";
    radio.style.opacity = "0.25";
  } else {
    collect.style.fill = "#EFEEE0";
  }
});
collect.addEventListener("click", changecollect);
// Second page switcing Animation(mobile)
function changecolllect() {
  if (three.style.display === "none") {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "block";
    two.style.opacity = "1";
    two.style.transition = "1s";
    rt.style.display = "none";
  } else {
    three.style.display = "block";
    one.style.display = "none";
    one.style.transition = "0.5s";
    three.style.transition = "0.5s";
  }
}

mcole.addEventListener("click", changecolllect);

// Third Page Switching Animation/HomePage
function changehome() {
  if (one.style.display === "none") {
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    two.style.opacity = "1";
    two.style.transition = "1s";
    rt.style.display = "none";
  } else {
    three.style.display = "none";
    one.style.display = "block";
    one.style.transition = "0.5s";
    three.style.transition = "0.5s";
  }
}
// ICON COLOUR CHANGE
home.addEventListener("click", function colors() {
  if ((home.style.fill = "#EFEEE0")) {
    home.style.fill = "#facd66";
    home.style.opacity = "1";
    collect.style.fill = "#EFEEE0";
    collect.style.opacity = "0.25";
    radio.style.fill = "rgb(239, 238, 224)";
    radio.style.opacity = "0.25";
  } else {
    collect.style.fill = "#EFEEE0";
  }
});
home.addEventListener("click", changehome);

// Fourth Page Switching Animation/Radio Page
function changeradio() {
  if (four.style.display === "none") {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "block";
    two.style.opacity = "1";
    two.style.transition = "1s";
    rt.style.display = "none";
  } else {
    three.style.display = "none";
    one.style.display = "none";
    one.style.transition = "0.5s";
    three.style.transition = "0.5s";
    four.style.display = "block";
  }
}
// ICON COLOUR CHANGE
radio.addEventListener("click", function colorrs() {
  if ((radio.style.fill = "#EFEEE0")) {
    collect.style.fill = "#EFEEE0";
    collect.style.opacity = "0.25";
    home.style.fill = "#EFEEE0";
    home.style.opacity = "0.25";
    radio.style.fill = "rgb(250, 205, 102)";
    radio.style.opacity = "1";
  } else {
    collect.style.fill = "#EFEEE0";
  }
});
radio.addEventListener("click", changeradio);
// Fourth Page Switching Animation/Radio Page(Mobile)
function changeraadio() {
  if (four.style.display === "none") {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "block";
    two.style.opacity = "1";
    two.style.transition = "1s";
    rt.style.display = "none";
  } else {
    three.style.display = "none";
    one.style.display = "none";
    one.style.transition = "0.5s";
    three.style.transition = "0.5s";
    four.style.display = "block";
  }
}
mradio.addEventListener("click", changeraadio);
