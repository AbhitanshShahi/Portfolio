var typed = new Typed("#typed", {
    strings: ["Frontend Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  });

const hamburger = document.querySelector('#nav-toggle');

hamburger.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#nav-links').classList.toggle('hidden');
})
