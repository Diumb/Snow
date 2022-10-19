// Canvas Methods

const canvasMethods = {

    clear(coordinates, canvas) {
        const ctx = canvas.getContext("2d");

        coordinates.splice(0, coordinates.length);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

}

export { canvasMethods };