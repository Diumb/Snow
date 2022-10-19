// Random Methods

const randomMethods = {

    randomInt(min, max) {
        return Math.round(min + Math.random() * (max - min));
    },

}

export { randomMethods };