module.exports = function () {
    const line1 = document.querySelector('.picture-locomotive .picture-locomotive__line:nth-child(1)');
    const line2 = document.querySelector('.picture-locomotive .picture-locomotive__line:nth-child(2)');
    const line3 = document.querySelector('.picture-locomotive .picture-locomotive__line:nth-child(3)');
    const line4 = document.querySelector('.picture-locomotive .picture-locomotive__line:nth-child(4)');

    gsap.set(line1, {x: line1.scrollWidth / 3.5});
    gsap.set(line2, {x: -line2.scrollWidth / 3.5});
    gsap.set(line3, {x: line3.scrollWidth / 3.5});
    gsap.set(line4, {x: -line4.scrollWidth / 3.5});

    gsap.utils.toArray('.picture-locomotive .picture-locomotive__line').forEach((section, index) => {
        const xEnd = (index % 2) ? section.scrollWidth / 5.5 : (section.scrollWidth / 5.5) * -1;
        gsap.to(section, {
            x: xEnd,
            scrollTrigger: {
                trigger: '.picture-locomotive',
                scrub: 0.5,
                start: 'top 110%',
                end: 'bottom -20%',
                markers: true,
            }
        });
    });
}