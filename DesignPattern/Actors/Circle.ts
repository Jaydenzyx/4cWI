export class circle{
    private x: number;
    private y: number;
    private radius: number;


    constructor(x: number, y: number, radius?: number) {
        this.x = x;
        this.y = y;
        if (radius!== undefined) {
            this.radius = radius;
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#c815ce";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    update(deltaTime: number): void {
        this.y += 200 * deltaTime;
    }

}
