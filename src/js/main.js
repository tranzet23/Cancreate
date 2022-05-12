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


//dropdown

if (document.querySelector('.select-wrapper')) {
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
    };

    initSelect(navigationSelect);
}

//accept
if(document.querySelector('.accept-policy span.yes')) {
    let acceptBlockElYes = document.querySelector('.accept-policy span.yes');
    let acceptBlockElNo = document.querySelector('.accept-policy span.no');

    acceptBlockElYes.addEventListener('click', function () {
        if (acceptBlockElNo.classList.contains('active')) {
            acceptBlockElNo.classList.remove('active')
            acceptBlockElYes.classList.add('active')
        }else {
            acceptBlockElYes.classList.add('active')
        }
    })
    acceptBlockElNo.addEventListener('click', function () {
        if (acceptBlockElYes.classList.contains('active')) {
            acceptBlockElYes.classList.remove('active')
            acceptBlockElNo.classList.add('active')
        }else {
            acceptBlockElNo.classList.toggle('active')
        }
    })
}

//video

/* -------------------------------------------------------------------------
   begin Video Youtube
 * ------------------------------------------------------------------------- */

function onYouTubePlayerAPIReady() {
    let playerYoutube;

    playerYoutube = new YT.Player("video-youtube__content", {
        videoId: "cxXUEDbOxgo",
        playerVars: {
            // 'controls': 0,
            // 'showinfo': 0,
            // 'disablekb': 1
        },
        events: {
            onReady: onYouTubePlayerReady
        }
    });
}

function onYouTubePlayerReady(event) {
    // https://developers.google.com/youtube/iframe_api_reference#Events
    var targetYoutubeVideo = event.target;
    var videoDomElem = document.getElementById(
        event.target.getIframe().getAttribute("id")
    );
    var newPlayBtn = videoDomElem.nextElementSibling;

    newPlayBtn.addEventListener("click", function(event) {
        targetYoutubeVideo.playVideo();
        this.classList.add('hidden');
        videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
        videoDomElem.parentNode.classList.remove('video-youtube_overlay');
    });
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* -------------------------------------------------------------------------
   end Video Youtube
 * ------------------------------------------------------------------------- */



AOS.init({
    duration: 1200,
})
