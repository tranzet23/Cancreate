module.exports = function animations() {
    document.addEventListener('DOMContentLoaded', function () {
        gsap.registerPlugin(ScrollTrigger);

        let heroSection = document.querySelector('section.hero') || false;
        let videoEl = document.querySelector('.video-main video');
        let mainText = document.querySelector('section.main-text');
        let scrollProgressCircle = document.querySelector('.hero__scroll-inner svg circle:nth-child(2)');

        if(heroSection) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".scroll-container",
                    start: "top top",
                    end: "50% 50%",
                    scrub: true,
                    onUpdate: (self) => {
                        scrollProgressCircle.style.strokeDashoffset = 'calc(240 - (240 * ' + Math.round(self.progress * 100) + ') / 100)'
                    },
                }
            })
                .to(videoEl, {scale: 2, duration: 0.5, ease: "power2.out"})

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.scroll-container',
                    start: "51% 50%",
                    end: "70% 50%",
                    scrub: 2,
                }
            })
                .to(['section.hero .cookies', 'section.hero .hero__scroll'],
                    {
                        y: '300',
                        stagger: 0.15,
                        duration: 1,
                        ease: "power2.out"
                    }
                )

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.scroll-container',
                    start: "53% 50%",
                    end: "bottom bottom",
                    scrub: 2,
                }
            })
                .to(heroSection, {autoAlpha: 0.3}, 0)
                .to(mainText, {autoAlpha: 1}, 0)
                .fromTo('.main-text .container p', {autoAlpha: 0}, {y: '-60%', autoAlpha: 0.6, duration: 0.2}, 0)
                .delay(1)
                .to('.main-text .container p', {autoAlpha: 0})

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.scroll-container',
                    start: "70% 80%",
                    end: "bottom top",
                    scrub: 2,
                }
            })
                .set('.line-scroll .line-scroll--el', {y: '-=101%', opacity: 1})
                .to('.line-scroll .line-scroll--el', {y: '+=190%', duration: 0.4}, 0)
                .to('.main-text .line-scroll', {y: '+=60%'}, 0)
                .to(mainText, {autoAlpha: 0})
        }
    });

}