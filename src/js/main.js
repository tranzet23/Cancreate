//*****BURGER********
// let body = document.querySelector('body')
// let burgerBtn = document.querySelector('.burger-menu');
// let menuContent = document.querySelector('.dropdown-menu__mobile');
//
//
// burgerBtn.addEventListener('click', function () {
//     console.log(123)
//     if(menuContent.classList.contains('flex')===false) {
//         menuContent.classList.add('flex');
//         burgerBtn.classList.add('burger-close');
//         menuContent.classList.remove('hide');
//         body.classList.add('scroll-hide');
//     }
//     else {
//         console.log(123)
//         menuContent.classList.remove('flex');
//         burgerBtn.classList.remove('burger-close');
//         menuContent.classList.add('hide');
//         body.classList.remove('scroll-hide');
//     }
// })
// slider-works
$('.works__slider').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true
	
  });

$('.double-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true,
    autoplay: true
});

$('.works__slider').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true
	
  });

let body = document.querySelector('body')
let burgerBtn = document.querySelector('.burger-menu');
let menuContent = document.querySelector('.dropdown-menu');


burgerBtn.addEventListener('click', function () {
    if(menuContent.classList.contains('flex')===false) {
        menuContent.classList.add('flex');
        burgerBtn.classList.add('burger-close');
        menuContent.classList.remove('hide');
        body.classList.add('scroll-hide');
    }
    else {
        menuContent.classList.remove('flex');
        burgerBtn.classList.remove('burger-close');
        menuContent.classList.add('hide');
        body.classList.remove('scroll-hide');
    }
})

//dropdown
try{
	let navigationSelect = document.querySelector('.select-wrapper');
	function initSelect(elem){
		var selectHolder = elem.querySelector('.holder');
		var selectOptions = elem.querySelectorAll('.dropdownOption li');
		var dropHolder = elem.querySelector('.dropdown');
		var selectedOption = selectOptions[0];
		selectedOption.classList.add('current');
		selectHolder.addEventListener('click', function () {
			dropHolder.classList.toggle('active');  });
		selectOptions.forEach(function(currentElement) {
			currentElement.addEventListener('click', function(){
				selectedOption.classList.remove('current');
				selectedOption = currentElement;
				currentElement.classList.add('current');
				selectHolder.innerHTML = currentElement.innerHTML;
				dropHolder.classList.toggle('active');
			});
		});
	};
	initSelect(navigationSelect);
}
catch (e) {

}



const choiceBtn	=	document.querySelectorAll('.choice__btn');

choiceBtn.forEach( btn =>{
	btn.addEventListener('click', ()=>{
		btn.classList.toggle('color-flex')
	})
})
