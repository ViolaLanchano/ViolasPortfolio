/* The MIT License (MIT)

Copyright (c) 2023 Viola Eden Lanchano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */

/*!
  * Bootstrap v5.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

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