var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const btns = document.querySelectorAll(".acc-btn");

function accordion() {
  
  this.classList.toggle("is-open");

  const content = this.nextElementSibling;

  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}
btns.forEach((el) => el.addEventListener("click", accordion));

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});


let tagline = document.querySelector('.tagline')
let demo = document.querySelector('.demo') 

let observerTagline = new IntersectionObserver((entries, obserser) => {
  entries.forEach((entry)=>{
   if(!entry.isIntersecting) return
   entry.target.querySelector('.content h2').classList.add('animate__animated', 'animate__fadeInRight', 'show');
   entry.target.querySelector('.content h1').classList.add('animate__animated', 'animate__fadeInLeft', 'show');
  })
}, {
  threshold: 0.5
})
observerTagline.observe(tagline)

let observerDemo = new IntersectionObserver((entries, obserser) => {
  entries.forEach((entry)=>{
   if(entry.isIntersecting){
     entry.target.querySelector('div').classList.add('animate__animated', 'animate__fadeInLeft', 'show')
     entry.target.querySelector('form').classList.add('animate__animated', 'animate__fadeInRight', 'show')
   }
  })
}, {
  threshold: 0.5
})
observerDemo.observe(demo)


let headings = document.querySelectorAll('.headings')
let headingsObserver = new IntersectionObserver((entries, obserser) => {
  entries.forEach((entry)=>{
   if(entry.isIntersecting){
      entry.target.querySelector('h1').classList.add('animate__animated', 'animate__pulse','animate__repeat-2')
   }
  })
}, {
  rootMargin: '-300px'
})
headings.forEach(heading => {
  headingsObserver.observe(heading)
})


let faq = document.querySelector('.faq')
let faqObserver = new IntersectionObserver((entries, obserser) => {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.querySelector('h2').classList.add('animate__animated', 'animate__fadeInLeft', 'show')
    }
  })
}, {
  threshold: 0.25
})
faqObserver.observe(faq)

let subscribe = document.querySelector('.subscribe')
let subscribeObserver = new IntersectionObserver((entries, obserser) => {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.querySelector('h1').classList.add('animate__animated', 'animate__fadeInLeft', 'show')
      entry.target.querySelector('form').classList.add('animate__animated', 'animate__fadeInRight', 'show')
      // entry.target.querySelector().classList.add()
    }
  })
}, {
  threshold: 0.5
})
subscribeObserver.observe(subscribe)

let about = document.querySelector('.about')
let aboutObserver = new IntersectionObserver((entries, obserser) => {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.querySelector('button').classList.add('animate__animated', 'animate__fadeInUpBig', 'show')
      // entry.target.querySelector().classList.add()
    }
  })
}, {
  threshold: 0.5
})
aboutObserver.observe(about)









