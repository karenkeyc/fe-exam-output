const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
// console.log(track)
const next = document.querySelector('.carousel__control--right')
const prev = document.querySelector('carousel__control--left')
const nav = document.querySelector('.carousel__nav')
const dots = Array.from(nav.children); 

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to each other
slides.forEach((s, i) => {
  s.style.left = slideWidth * i + 'px';
})

// move to next slide
next.addEventListener('click', e => {
  const current = track.querySelector('.current-slide');
  const nextSibling = current.nextElementSibling;
  const sizeNext = nextSibling.style.left;
  track.style.transform = `translateX(-${sizeNext})`;

  // move current-slide class after moving
  current.classList.remove('current-slide');
  nextSibling.classList.add('current-slide')
})