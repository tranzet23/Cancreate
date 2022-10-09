var imagesLoaded = require('imagesloaded');

const preloader = document.querySelector(".js-preloader");
const preloaderProgress = document.querySelector(".preloader__progress-line");
const images = gsap.utils.toArray("img");

const finalImgValProgress = 65;
let currentProgress = 0;

// for pretty finish progress
const updateFinishProgress = () => {
    // если картинок нет
    if (currentProgress === 0) {
        let mockLoadingValues = getRandomNumbersResidual(4, 100, 40);
        mockLoadingValues.forEach((n, i) => {
            setTimeout(() => {
                currentProgress += n;
                setLinePersentage(currentProgress);
            }, 100 * (i + 1));
        });

        return;
    }

    // если картинки есть (отсчет дальше пойдет от конечного значения загрузки картинок)
    let numbers = getRandomNumbersResidual(4, 100 - finalImgValProgress);
    numbers.forEach((n, i) => {
        setTimeout(() => {
            currentProgress += n;
            setLinePersentage(currentProgress);
        }, 100 * (i + 1));
    });
};

const updateImageProgress = (instance) => {
    let percent = Math.round(instance.progressedCount * finalImgValProgress / images.length);
    currentProgress = percent;
    return setLinePersentage(percent);
};

function setLinePersentage(value) {
    preloaderProgress.style.width = value + "%";
    if (value === 100) {
        hideLoader();
    }
}

function hideLoader() {
    delay(100)
        .then(() => gsap.to(preloader, { y: "-100%", duration: 0.8, ease: "power4.inOut" }));
}

/*
document.addEventListener("DOMContentLoaded", () => {
    imagesLoaded(images).on("progress", updateImageProgress).on("always", updateFinishProgress);
});

gsap.set(preloader, {autoAlpha: 1});*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNumbersResidual(len = 4, total = 35, max = 15) {
    let arr = new Array(len);
    let sum = 0;
    do {
        for (let i = 0; i < len; i++) {
            arr[i] = Math.random();
        }
        sum = arr.reduce((acc, val) => acc + val, 0);
        const scale = (total - len) / sum;
        arr = arr.map(val => Math.min(max, Math.round(val * scale) + 1));
        sum = arr.reduce((acc, val) => acc + val, 0);
    } while (sum - total);

    return arr;
}
