// JavaScript Document
console.log("hi");

document.addEventListener('DOMContentLoaded', function() {
    // Wacht 3 seconden voordat je het plaatje laat vervagen
    setTimeout(function() {
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

let currentSlide = 0;
  let slideInterval;

  function showSlide() {
    const videoContainer = document.getElementById('video-container');
    const totalSlides = document.querySelectorAll('.video').length;
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }
    const translateValue = -currentSlide * 100 + '%';
    videoContainer.style.transform = 'translateX(' + translateValue + ')';
  }

  function nextSlide() {
    currentSlide++;
    showSlide();
    resetSlideInterval();
  }

  function prevSlide() {
    currentSlide--;
    showSlide();
    resetSlideInterval();
  }

  function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 8000);
  }

  // Initiate the slide interval
  resetSlideInterval();