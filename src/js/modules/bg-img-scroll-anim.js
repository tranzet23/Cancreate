module.exports = function () {
    document.addEventListener('DOMContentLoaded', function () {
        if (window.location.pathname === '/index.html' || window.location.pathname === '/' ) {
            let bgImgBlock = document.querySelector('.block-bg-img');

            try {
                gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: 'section.about',
                            scrub: 0.5,
                            start: 'top top',
                            end: 'bottom bottom',
                        }
                    })
                    .to(bgImgBlock, {css: {
                        backgroundPositionY: '-300px'
                        }}, 0)
                    // .to(scrollText2, {x: '+=100%'}, 0)
            } catch (e) {
                console.warn(e.message)
            }
        }
    })
}