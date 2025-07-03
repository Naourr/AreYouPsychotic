window.addEventListener("load", () => {
  	document.getElementById("preloader").style.display = "none";
});
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

document.querySelectorAll('.answercards').forEach(group => { //for each tapos yung group yung lahat ng elements sa loob. sa kada .answercards na meron.
    // Track if this group has been answered
    group.dataset.answered = "false"; // sinet as false sa pinakaunang pagload?
    group.addEventListener('change', function() { //event listener yah
        if (group.dataset.answered === "false") { 
            group.dataset.answered = "true";
            // Slide to next slide
            swiper.slideNext();
        }
        // If already answered, do nothing (prevents sliding on answer change)
		//midyo diko maabsorb pero le goo
    });
});

function checkAllAnswered() {
	const groups = document.querySelectorAll('.five-toggle');
	let allAnswered = true;
	groups.forEach(group => {
		const name = group.querySelector('input[type="radio"]').name;
		if (!group.querySelector('input[name="' + name + '"]:checked')) {
		allAnswered = false;
		}
	});
	// Show or hide the button
	document.querySelector('.see-results').style.display = allAnswered ? 'block' : 'none';
}

// Listen for changes on all radios
document.querySelectorAll('.five-toggle input[type="radio"]').forEach(radio => {
  	radio.addEventListener('change', checkAllAnswered);
});