const anchors = document.querySelectorAll('.scrollToButton');
const sectionHeaders = document.querySelectorAll('.section-header');
const toTop   = document.querySelector('#toTop');
const header  = document.querySelector('header');
const logo    = document.querySelector('.uk-logo');

// scroll to specified section
Array.from(anchors).forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector('#' + e.target.getAttribute("href")).offsetTop - header.offsetHeight,
      behavior: 'smooth'
    });
  })
});

logo.addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({
    top: document.querySelector('#' + e.target.parentElement.getAttribute("href")).offsetTop - header.offsetHeight,
    behavior: 'smooth'
  });
})

// show toTop button
document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 900) {
    toTop.style.opacity = '1';
  } else {
    toTop.style.opacity = '0';
  }
})

// scroll to top
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// add class section-header to elements
Array.from(sectionHeaders).forEach(header => {
  header.classList.add('uk-margin-large');
})

