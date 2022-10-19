// Animation Methods

const animationMethods = {

    startAnimation(settings, func, func2) {
        settings.animation = setInterval(func2, 300);
        settings.isAnimation = true;
        func();
    },

    endAnimation(settings) {
        clearInterval(settings.animation);
        settings.isAnimation = false;
    },

}

export { animationMethods };