module.exports = function () {
    if(window.location.pathname === '/about-project.html') {
        let scrollItem1 = document.querySelector('.triple-items.animate > .triple-item:nth-child(1)'),
            scrollItem2 = document.querySelector('.triple-items.animate > .triple-item:nth-child(2)'),
            scrollItem3 = document.querySelector('.triple-items.animate > .triple-item:nth-child(3)');

        gsap
            .timeline({
            scrollTrigger: {
                trigger: "section.triple",
                start: "top 75%",
                end: "bottom 90%",
                scrub: 1.5,
            }
        })
            .to(scrollItem1, {y: '-=300px', duration: 0.5}, 0)
            .to(scrollItem2, {y: '+=5%', duration: 0.5}, 0)
            .to(scrollItem3, {y: '+=300px', duration: 0.5}, 0)
    }
}