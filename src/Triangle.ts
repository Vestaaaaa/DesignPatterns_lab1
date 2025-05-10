import Point from "./Point.js";
import { Observer } from "./Observer.js";
import Warehouse from "./Warehouse.js";

export default class Triangle implements Observer {
  public id: string;

  constructor(
    public pointA: Point,
    public pointB: Point,
    public pointC: Point,
    private warehouse: Warehouse
  ) {
    this.id = `${pointA.x},${pointA.y}-${pointB.x},${pointB.y}-${pointC.x},${pointC.y}`;
    this.notifyAreaUpdate(); // Уведомляем о начальной площади
  }

  getArea(): number {
    const { x: x1, y: y1 } = this.pointA;
    const { x: x2, y: y2 } = this.pointB;
    const { x: x3, y: y3 } = this.pointC;

    return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
  }

  updatePoints(pointA?: Point, pointB?: Point, pointC?: Point): void {
    if (pointA) this.pointA = pointA;
    if (pointB) this.pointB = pointB;
    if (pointC) this.pointC = pointC;

    this.notifyAreaUpdate(); // Уведомляем об изменении площади
  }

  private notifyAreaUpdate(): void {
    const area = this.getArea();
    this.warehouse.updateArea(this.id, area);
  }

  getPerimeter(): number {
    const sideAB = this.getDistance(this.pointA, this.pointB);
    const sideBC = this.getDistance(this.pointB, this.pointC);
    const sideCA = this.getDistance(this.pointC, this.pointA);

    return sideAB + sideBC + sideCA;
  }

  private getDistance(point1: Point, point2: Point): number {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  }

  isCollinear(): boolean {
    return this.getArea() === 0;
  }

  isRightAngled(): boolean {
    const sides = [
      this.getDistance(this.pointA, this.pointB),
      this.getDistance(this.pointB, this.pointC),
      this.getDistance(this.pointC, this.pointA),
    ];

    sides.sort((a, b) => a - b);

    return (
      Math.abs(
        Math.pow(sides[0], 2) + Math.pow(sides[1], 2) - Math.pow(sides[2], 2)
      ) < Number.EPSILON
    );
  }

  isIsosceles(): boolean {
    const sides = [
      this.getDistance(this.pointA, this.pointB),
      this.getDistance(this.pointB, this.pointC),
      this.getDistance(this.pointC, this.pointA),
    ];

    return (
      sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]
    );
  }

  updateArea(id: string, area: number): void {
    console.log(`Triangle ${id} area updated to ${area}`);
  }

  updateVolume(id: string, volume: number): void {
    console.log(`Triangle ${id} volume cannot be updated as it has no volume.`);
  }
}
