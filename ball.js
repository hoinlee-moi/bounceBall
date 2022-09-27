class Canvas {
    width;
    height;
    canvas;
    ctx;
    // 20px for the size of each cell
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.createCanvas();
    }
    createCanvas() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 1000;
        this.canvas.height = 500;
        document.body.appendChild(this.canvas);
    }
}
class Ball {
    radius;
    x;
    y;
    vx;
    vy;
    canvasWidth;
    canvasHeight;
    constructor(canvasWidth, canvasHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;
        const diameter = this.radius * 2;
        this.x = this.radius + Math.random() * (canvasWidth - diameter);
        this.y = this.radius + Math.random() * (canvasHeight - diameter);
    }
}
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    ;
};
const canvas = new Canvas(1000, 500);
const bounceBall = new Ball(1000, 500, randomNum(10, 20), randomNum(200, 400));
