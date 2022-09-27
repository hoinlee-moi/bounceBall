class Canvas {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  // 20px for the size of each cell

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.createCanvas();
  }

  createCanvas(): void {
    this.canvas = <HTMLCanvasElement>document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 1000;
    this.canvas.height = 500;
    document.body.appendChild(this.canvas);
  }
}
class Ball {
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number, radius: number, speed: number) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter: number = this.radius * 2;
    this.x = this.radius + Math.random() * (canvasWidth - diameter);
    this.y = this.radius + Math.random() * (canvasHeight - diameter);
  }
}
const randomNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;;
  };
  
const canvas = new Canvas(1000, 500);
const bounceBall = new Ball(1000, 500,randomNum(10 ,20),randomNum(200 ,400));

