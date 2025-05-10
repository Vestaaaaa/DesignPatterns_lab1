import Point from "./Point.js";
import Triangle from "./Triangle.js";
import Cone from "./Cone.js";
import Warehouse from "./Warehouse.js";

export default class ShapeFactory {
  static createPoint(x: number, y: number, z = 0): Point {
    return new Point(x, y, z);
  }

  static createTriangle(
    pointA: Point,
    pointB: Point,
    pointC: Point,
    warehouse: Warehouse
  ): Triangle {
    return new Triangle(pointA, pointB, pointC, warehouse);
  }

  static createCone(
    apex: Point,
    baseCenter: Point,
    warehouse: Warehouse,
    height: number,
    radius: number,
    id?: string
  ): Cone {
    return new Cone(id ?? "", apex, baseCenter, warehouse, height, radius);
  }
}
