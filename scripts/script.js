// JavaScript Document
console.log("hi");

document.addEventListener('DOMContentLoaded', function () {
  // Wacht 3 seconden voordat je het plaatje laat vervagen
  setTimeout(function () {
    var imageContainer = document.getElementById('fade-screen');
    imageContainer.classList.add('fade-out');
  }, 4000);
});



//code vanuit https://codepen.io/shooft/pen/MWZYoqa

//code menu openen

var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {

  var deNav = document.querySelector("nav");

  deNav.classList.add("toonMenu");
}


//Code nav sluiten

var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}



// ------------- CODE CAROUSEL  (Met hulp van ChatGPT)------------

var naarLinks = document.getElementById('prevBtn');
var naarRechts = document.getElementById('nextBtn');

// function slideLinks {
// }

// ------------- Scrolltext   https://codepen.io/designcourse/pen/vYQQKBW ------------
gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {

  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars' })

  gsap.fromTo(text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: 'top 70%',
        end: 'top 10%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
