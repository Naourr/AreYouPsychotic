const swiper = new Swiper('.swiper', {
	loop: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 'auto',
	spaceBetween: 0,
	centeredSlides: true
});

const menubar = document.querySelector('.menubar');
const menu = document.querySelector('.menu');
const usli1 = document.querySelector('.usli1');
const usli2 = document.querySelector('.usli2');
const usli1bar = document.querySelector('.usli1bar');
const usli2bar = document.querySelector('.usli2bar');

const testcards = document.querySelector('.testcards');
const back = document.querySelector('.back');
const next = document.querySelector('.next');


menu.addEventListener('click', function(){
	menubar.classList.toggle('active');
});
usli1.addEventListener('click', function(){
	usli1bar.classList.toggle('active');
	usli1.classList.toggle('active');
});
usli2.addEventListener('click', function(){
	usli2bar.classList.toggle('active');
	usli2.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});
	const allAnimatedElements = document.querySelectorAll('.animate');
	allAnimatedElements.forEach((element) => observer.observe(element));
}); 

