const animations = require('./modules/animations');
const scrolltop = require('./modules/scrollto');
const cursor = require('./modules/cursor');
const loadPosts = require('./modules/scrollingPosts');
animations();
scrolltop();
cursor();
loadPosts();

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
    autoplay: true
});

$('.picture__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
	autoplay: true
});

let body = document.querySelector('body')
let burgerBtn = document.querySelector('.burger-menu');
let menuContent = document.querySelector('.dropdown-menu');

burgerBtn.addEventListener('click', function () {
    if (menuContent.classList.contains('flex') === false) {
        menuContent.classList.add('flex');
        burgerBtn.classList.add('burger-close');
        menuContent.classList.remove('hide');
        body.classList.add('scroll-hide');
    } else {
        menuContent.classList.remove('flex');
        burgerBtn.classList.remove('burger-close');
        menuContent.classList.add('hide');
        body.classList.remove('scroll-hide');
    }
})

// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

//dropdown
try {
    let navigationSelect = document.querySelector('.select-wrapper');

    function initSelect(elem) {
        var selectHolder = elem.querySelector('.holder');
        var selectOptions = elem.querySelectorAll('.dropdownOption li');
        var dropHolder = elem.querySelector('.dropdown');
        var selectedOption = selectOptions[0];
        selectedOption.classList.add('current');
        selectHolder.addEventListener('click', function () {
            dropHolder.classList.toggle('active');
        });
        selectOptions.forEach(function (currentElement) {
            currentElement.addEventListener('click', function () {
                selectedOption.classList.remove('current');
                selectedOption = currentElement;
                currentElement.classList.add('current');
                selectHolder.innerHTML = currentElement.innerHTML;
                dropHolder.classList.toggle('active');
            });
        });
    }

    initSelect(navigationSelect);
} catch (e) {

}

//accept
if (document.querySelector('.accept-policy span.yes')) {
    let acceptBlockElYes = document.querySelector('.accept-policy span.yes');
    let acceptBlockElNo = document.querySelector('.accept-policy span.no');

    acceptBlockElYes.addEventListener('click', function () {
        if (acceptBlockElNo.classList.contains('active')) {
            acceptBlockElNo.classList.remove('active')
            acceptBlockElYes.classList.add('active')
        } else {
            acceptBlockElYes.classList.add('active')
        }
    })
    acceptBlockElNo.addEventListener('click', function () {
        if (acceptBlockElYes.classList.contains('active')) {
            acceptBlockElYes.classList.remove('active')
            acceptBlockElNo.classList.add('active')
        } else {
            acceptBlockElNo.classList.toggle('active')
        }
    })
}

//animate aos
AOS.init({
    duration: 1200,
})

//scroll section

//count number
let statsSection = document.querySelector('.stats')

if (statsSection) {
    statsSection.addEventListener('mouseover', function () {
        $('.stats__item-number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    })
}

//triple-section

let tripleSection = document.querySelector('.triple')
if (tripleSection) {
    tripleSection.addEventListener('mouseover', function () {
        tripleSection.classList.add('scroll-sec')
    })
    // tripleSection.addEventListener('mouseleave', function () {
    //     tripleSection.classList.remove('scroll-sec')
    // })
}

//video
try {
    function video() {
        const player = document.querySelector('.player');
        const video = player.querySelector('.viewer');

        const progressRange = document.querySelector('.progress-range');
        const progressBar = document.querySelector('.progress-bar');
        const currentTime = document.querySelector('.time-elapsed');
        const duration = document.querySelector('.time-duration');

        const playBtn = document.getElementById('play-btn');
        const stopBtn = player.querySelector('.stop');

        const skipButtons = player.querySelectorAll('[data-skip]');

        const speakerIcon = player.querySelector('#speaker_icon');
        const ranges = player.querySelectorAll('.player_slider');
        /* MUTE button */
        const speaker = player.querySelector('.speaker');
        const volInput = player.querySelector('input[name="volume"]')
//const speakerIcon = player.querySelector('#speaker_icon');

// show play button when paused
        function showPlayIcon() {
            playBtn.classList.replace('fa-pause', 'fa-play');
            playBtn.setAttribute('title', 'Play');
        }

// toggle between play and pause
        function togglePlay() {
            if (video.paused) {
                video.play();
                playBtn.classList.replace('fa-play', 'fa-pause');
                playBtn.setAttribute('title', 'Pause');
            } else {
                video.pause();
                showPlayIcon();
            }
        }

// Stop video
        function stopVideo() {
            video.currentTime = 0;
            video.pause();
        }

// not sure, is this for FF and REW?
        function skip() {
            video.currentTime += +(this.dataset.skip);
        }

// volume functions
        function handleRangeUpdate() {
            video[this.name] = this.value;
            (video['volume'] === 0 ? speakerIcon.className = "fa fa-volume-off" :
                speakerIcon.className = "fa fa-volume-up")
        }

        let muted = false;

        function mute() {
            if (!muted) {
                video['volume'] = 0;
                volInput.value = 0;
                speakerIcon.className = "fa fa-volume-off"
                muted = true;
            } else {
                video['volume'] = 1;
                volInput.value = 1;
                muted = false;
                speakerIcon.className = "fa fa-volume-up"
            }
        }

// update progress bar as the video plays
        function updateProgress() {
            progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
            currentTime.textContent = `${displayTime(video.currentTime)} /`;
            duration.textContent = `${displayTime(video.duration)}`;
        }

// Calculate display time format
        function displayTime(time) {
            const minutes = Math.floor(time / 60);
            let seconds = Math.floor(time % 60);
            seconds = seconds > 9 ? seconds : `0${seconds}`;
            return `${minutes}:${seconds}`;
        }

// Click to seek within the video
        function setProgress(e) {
            const newTime = e.offsetX / progressRange.offsetWidth;
            progressBar.style.width = `${newTime * 100}%`;
            video.currentTime = newTime * video.duration;
        }

        function scrub(event) {
            const scrubTime = (event.offsetX / progressRange.offsetWidth) * video.duration;
            video.currentTime = scrubTime;
        }

// Spacebar used to play and pause
        document.body.onkeyup = function (e) {
            if (e.keyCode == 32) {
                togglePlay();
            }
        }
        let videoBlock = document.querySelector('.video-block')

// =======================
        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('canplay', updateProgress);
        progressRange.addEventListener('click', setProgress);
// ===================
        /*functions linked to elements*/
// play, pause, stop
        video.addEventListener('click', togglePlay);
        video.addEventListener('keydown', (event) => event.keyCode === 32 && togglePlay());
        playBtn.addEventListener('click', togglePlay);
        stopBtn.addEventListener('click', stopVideo);
// skip forward or backward
        skipButtons.forEach(button => button.addEventListener('click', skip));
// volume
        ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
        ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
        speaker.addEventListener('click', mute)

// progress bar controls
        let mouseDown = false;
        progressRange.addEventListener('click', scrub);
        progressRange.addEventListener('mousemove', (event) => mouseDown && scrub(event));
        progressRange.addEventListener('mousedown', () => mouseDown = true);
        progressRange.addEventListener('mouseup', () => mouseDown = false);

//fullscreen mode
        const screen_size = player.querySelector('.screenSize');
        const controls = player.querySelector('.player_controls');
        const screenSize_icon = player.querySelector('#screenSize_icon');

        function changeScreenSize() {
            if (player.mozRequestFullScreen) {

                player.mozRequestFullScreen();
                //change icon
                screenSize_icon.className = "fa fa-compress";
                /*control panel once fullscreen*/
                video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)');
                video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
                controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
                screen_size.addEventListener('click', () => {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                        screenSize_icon.className = "fa fa-expand";
                    }
                });
            } else if (player.webkitRequestFullScreen) {

                player.webkitRequestFullScreen();

                screenSize_icon.className = "fa fa-compress";

                video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)');
                video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
                controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
                screen_size.addEventListener('click', () => {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                        screenSize_icon.className = "fa fa-expand";
                    }
                });
            }
        }

        screen_size.addEventListener('click', changeScreenSize);

    }

    video();
} catch {

}

const choiceBtn = document.querySelectorAll('.choice__btn');

choiceBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('color-flex')
    })
})

// Accordion	

$('.services-links__link').on('click', function(){
	$('.services-links__item').removeClass('services-links__item--active');
	$(this).parent().addClass('services-links__item--active');
})

const btnCloseAccordion = document.querySelectorAll('.services-links__item-close');
const accordDescr = document.querySelectorAll('.services-links__item')

btnCloseAccordion.forEach(btn => {
	btn.addEventListener('click', function(){
		accordDescr.forEach(item =>{
			item.classList.remove('services-links__item--active')
		})
	})
})


// Parallax	

 
let bg = document.querySelectorAll('.about-canc__photo');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });    
}
 // scroll-top
$("document").ready(function($){
    var scrollBtn = $('.scroll-svg');
    var scrollWrap = $('.scroll-top');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            scrollBtn.addClass("doch");
            scrollWrap.addClass("doch");

        } else {
            scrollBtn.removeClass("doch");
            scrollWrap.removeClass("doch");
        }
    });
});

(function(){
    function id(v){return document.getElementById(v); }
    function loadbar() {
        var preloaderPercent = id("preloader-percent"),
            ovrl = id("preloader"),
            img = document.images,
            cImg = 0;

        var ImgTotal = img.length;

        function imgLoaded(){
            cImg += 1;
            preloaderPercent.innerHTML = ((100 / ImgTotal * cImg) << 0).toString();
            if(cImg===ImgTotal) return doneLoading();
        }

        function doneLoading(){
            ovrl.style.opacity = 0;
            setTimeout(function(){
                ovrl.style.display = "none";
            }, 100);
        }

        preloaderPercent.innerHTML = '1';

        setTimeout(function () {
            if (ImgTotal) {
                for(var i=0; i<ImgTotal; i++) {
                    var tImg     = new Image();
                    tImg.onload  = imgLoaded;
                    tImg.onerror = imgLoaded;
                    tImg.src     = img[i].src;
                }
            }
            else {
                preloaderPercent.innerHTML = '100';
                doneLoading();
            }
        }, 500);
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());


