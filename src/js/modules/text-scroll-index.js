module.exports = function () {
    document.addEventListener('DOMContentLoaded', function () {
        try {
            if (window.location.pathname === '/index.html'  || window.location.pathname === '/') {
                let scrollTextHide = document.querySelector('.single-img.banner .scroll-text-hide');
                let { offsetWidth: blockTextWidth } = scrollTextHide;
                let scrollTextBanner1 = document.querySelector('.single-img.banner .scroll-text.scroll-text-1');
                let scrollTextBanner2 = document.querySelector('.single-img.banner .scroll-text.scroll-text-2');

                ScrollTrigger.matchMedia({
                    "(min-width: 601px)": function() {
                        gsap
                            .timeline({
                                scrollTrigger: {
                                    trigger: '.single-img.banner',
                                    scrub: 1,
                                    start: 'top bottom-=700%',
                                    end: 'bottom 500%',
                                }
                            })
                            .to(scrollTextBanner1, {x: (blockTextWidth + (scrollTextBanner1.offsetWidth)) + 'px'}, 0)
                            .to(scrollTextBanner2, {x: -(blockTextWidth + (scrollTextBanner2.offsetWidth)) + 'px'}, 0)
                    },
                    "(max-width: 600px)": function() {
                        gsap
                            .timeline({
                                scrollTrigger: {
                                    trigger: '.single-img.banner',
                                    scrub: 1,
                                    start: 'top bottom-=10%',
                                    end: 'bottom 60%',
                                }
                            })
                            .to(scrollTextBanner1, {x: (blockTextWidth + (scrollTextBanner1.offsetWidth -400)) + 'px'}, 0)
                            .to(scrollTextBanner2, {x: -(blockTextWidth + (scrollTextBanner2.offsetWidth -400)) + 'px'}, 0)
                    },
                })
            }
        } catch (e) {
            console.warn(e.message)
        }
    })
}

const cookieBtn = document.querySelectorAll('.cookie button')
const cookieWrap = document.querySelector('.cookie');

cookieBtn.forEach((item) => {
    item.addEventListener('click', function () {
        cookieWrap.classList.add('close')
    })
})