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



