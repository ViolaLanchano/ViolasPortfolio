window.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
})

let scrollValue = 0;
let maxHorizontalOffset = 2; // Adjust this value as needed

/* תנאי גלילה */
window.addEventListener('scroll', () => {
  let scroll = $(window).scrollTop();
  const newScrollValue = window.scrollY;
  const scrollDiff = newScrollValue - scrollValue;

  /* תמונה פתיח */
/*   let homePageHeader = document.getElementById('homePageHeader');
  if (homePageHeader != null) {
    homePageHeader.style.transform = "scale(" + (100 - scroll / 100) / 100 + ")";
    homePageHeader.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 2));
  }
 */
  let imgHeaderPages = document.getElementById('imgHeaderPages');
  if (imgHeaderPages != null) {
    imgHeaderPages.style.transform = "translate3d(0, +" + scroll / 100 + "%, 0) scale(" +
      (100 - scroll / 100) / 100 + ")"
  }


  /* כניסה של תמונה משמאל */
  /* leftImg = document.getElementsByClassName("leftImgEntry");
  for (let i = 0; i < leftImg.length; i++) {
    leftImg[i].style.transform = `translateX(-${scrollDiff}px)`;
    console.log(leftImg[i])

  }
  scrollValue = newScrollValue;


 */


  const verticalScroll = window.scrollY;

  // Calculate the horizontal position based on the scroll position
  const horizontalPosition = (verticalScroll / window.innerHeight) * maxHorizontalOffset;

  // Apply the horizontal position to the image
  leftImg = document.getElementsByClassName("leftImgEntry");
  for (let i = 0; i < leftImg.length; i++) {
    leftImg[i].style.transform = `translateX(${horizontalPosition}rem)`;
    console.log(leftImg[i]);
  }


});



/* $(window).on('load', () => {
  reveal();
  let section = document.querySelectorAll('section');
  let menu = document.querySelectorAll('nav a');
  window.onscroll = () => {
    section.forEach(i => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
      let height = i.offsetHeight;
      let id = i.getAttribute('id');

      if (top >= offset && top < offset + height) {
        menu.forEach(link => {
          link.classList.remove('active');
          document.querySelector('nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  };
}) */



/* function reveal() {
  let reveals = document.querySelectorAll(".animate");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


 */


/* ---------------------------------------------------------- */
/* -------------- עמוד איורים ואיורים דיגיטליים ------------- */
/* ---------------------------------------------------------- */





function activeImg(slide) {
  let slides = document.querySelectorAll(".active");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active")
  }

  switch (slide) {
    case 'slide1':
      document.getElementById("slide1").classList.add("active");
      break;
    case 'slide2':
      document.getElementById("slide2").classList.add("active");
      break;
    case 'slide3':
      document.getElementById("slide3").classList.add("active");
      break;
    case 'slide4':
      document.getElementById("slide4").classList.add("active");
      break;
    case 'slide5':
      document.getElementById("slide5").classList.add("active");
      break;
    case 'slide6':
      document.getElementById("slide6").classList.add("active");
      break;
    case 'slide7':
      document.getElementById("slide7").classList.add("active");
      break;
    case 'slide8':
      document.getElementById("slide8").classList.add("active");
      break;
    case 'slide9':
      document.getElementById("slide9").classList.add("active");
      break;
    case 'slide10':
      document.getElementById("slide10").classList.add("active");
      break;
    case 'slide11':
      document.getElementById("slide11").classList.add("active");
      break;
    case 'slide12':
      document.getElementById("slide12").classList.add("active");
      break;
    case 'slide13':
      document.getElementById("slide13").classList.add("active");
      break;
    case 'slide14':
      document.getElementById("slide14").classList.add("active");
      break;
    case 'slide15':
      document.getElementById("slide15").classList.add("active");
      break;
    case 'slide16':
      document.getElementById("slide13").classList.add("active");
      break;
    case 'slide17':
      document.getElementById("slide14").classList.add("active");
      break;
    case 'slide18':
      document.getElementById("slide15").classList.add("active");
      break;
    case 'slide19':
      document.getElementById("slide13").classList.add("active");
      break;
    case 'slide20':
      document.getElementById("slide14").classList.add("active");
      break;
  }
}