module.exports = function scrolltop () {
    const btn = document.getElementById("scrolltop-btn") || false;
    const scrollTopProgress = document.querySelector("#scrolltop-btn svg circle:nth-child(2)");

    if (btn) {
        btn.addEventListener("click", () => gsap.to(window, {duration: 2, scrollTo: {y: 0}, ease: "power2.out"}));
        gsap.set(btn, {y: 150, autoAlpha: 0});

        gsap.to(btn, {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".scrolltop-js",
                start: "top 50%",
                end: "max",
                toggleActions: "play none none reverse",
                onUpdate: (self) => {
                    scrollTopProgress.style.strokeDashoffset = 'calc(150 - (150 * ' + Math.round(self.progress * 100) + ') / 100)'
                }
            }
        });
    }

}