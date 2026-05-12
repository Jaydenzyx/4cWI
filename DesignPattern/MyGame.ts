import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./Actors/Rectangle.js";
import { circle } from "./Actors/Circle.js";

class MyGame extends Game {
  private recangles: Rectangle [] = [];
  private circles: circle [] = [];


  init(): void {
    console.log("Game started!");
        const r1:Rectangle = new Rectangle(100, 100, 100, 100);
        const r2:Rectangle = new Rectangle(40, 0, 20, 20);
        const r3:Rectangle = new Rectangle(0, 0, 20, 20);
        this.recangles.push(r1, r2,r3);

        const c1:circle = new circle(500, 100, 100);
        const c2:circle = new circle(200, 0, 20);
        const c3:circle = new circle(300, 0, 20);
        this.circles.push(c1, c2,c3);
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    this.recangles.forEach(rect => rect.update(deltaTime));
    this.circles.forEach(circle => circle.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.recangles.forEach(rect => rect.render(ctx));
    this.circles.forEach(circle => circle.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);

framework.start();

console.log("test");