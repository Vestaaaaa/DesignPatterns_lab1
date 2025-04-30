/*import Point from "./Point.js";
import Triangle from "./Triangle.js";

export default class ShapeFactory {
  static createPoint(x: number, y: number): Point {
    return new Point(x, y);
  }

  static createTriangle(pointA: Point, pointB: Point, pointC: Point): Triangle {
    return new Triangle(pointA, pointB, pointC);
  }
}*/

import Point from "./Point.js";
import Triangle from "./Triangle.js";
import Cone from "./Cone.js";

export default class ShapeFactory {
  static createPoint(x: number, y: number, z = 0): Point {
    return new Point(x, y, z);
  }

  static createTriangle(pointA: Point, pointB: Point, pointC: Point): Triangle {
    return new Triangle(pointA, pointB, pointC);
  }

  static createCone(
    apex: Point,
    baseCenter: Point,
    height: number,
    radius: number,
    id?: string
  ): Cone {
    return new Cone(id ?? "", apex, baseCenter, height, radius);
  }
}
