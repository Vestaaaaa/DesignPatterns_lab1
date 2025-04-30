import Point from "./Point.js";

export default class Cone {
  public readonly id: string;
  public readonly apex: Point; // вершина конуса
  public readonly baseCenter: Point; // центр основания конуса
  public readonly height: number; // высота конуса
  public readonly radius: number; // радиус основания

  constructor(
    id: string,
    apex: Point,
    baseCenter: Point,
    height: number,
    radius: number
  ) {
    this.id = id;
    this.apex = apex;
    this.baseCenter = baseCenter;
    this.height = height;
    this.radius = radius;
  }
}
