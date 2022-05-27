module.exports = function () {
    document.addEventListener('DOMContentLoaded', function () {
        let scrollText1 = document.querySelector('.scroll-text.scroll-text-1');
        let scrollText2 = document.querySelector('.scroll-text.scroll-text-2');

        gsap.set(scrollText1, {css: {right: -scrollText1.offsetWidth + 'px'}});
        gsap.set(scrollText2, {css: {left: -scrollText2.offsetWidth + 'px'}});

        try {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: 'section.single-img',
                        scrub: 1,
                        start: 'top bottom',
                        end: 'bottom 30%',
                    }
                })
            .to(scrollText1, {x: '-=100%'}, 0)
            .to(scrollText2, {x: '+=100%'}, 0)
        } catch (e) {
            console.warn(e.message)
        }
    })
}