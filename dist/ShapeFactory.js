import Point from "./Point.js";
import Triangle from "./Triangle.js";
import Cone from "./Cone.js";
export default class ShapeFactory {
    static createPoint(x, y, z = 0) {
        return new Point(x, y, z);
    }
    static createTriangle(pointA, pointB, pointC) {
        return new Triangle(pointA, pointB, pointC);
    }
    static createCone(apex, baseCenter, height, radius, id) {
        return new Cone(id ?? "", apex, baseCenter, height, radius);
    }
}
//# sourceMappingURL=ShapeFactory.js.map