import Triangle from "./Triangle.js";
import Cone from "./Cone.js";
export default class ShapeRepository {
    constructor() {
        this.shapes = [];
    }
    static getInstance() {
        if (!ShapeRepository.instance) {
            ShapeRepository.instance = new ShapeRepository();
        }
        return ShapeRepository.instance;
    }
    //метод по добавлению
    addShape(shape) {
        this.shapes.push(shape);
    }
    //метод по удалению
    removeShape(id) {
        this.shapes = this.shapes.filter((shape) => shape.id !== id);
    }
    //методы поиска по ID
    findById(id) {
        return this.shapes.find((shape) => shape.id === id);
    }
    //методы поиска по координатам
    findByCoordinates(x, y) {
        return this.shapes.filter((shape) => {
            if (shape instanceof Triangle) {
                return ((shape.pointA.x === x && shape.pointA.y === y) ||
                    (shape.pointB.x === x && shape.pointB.y === y) ||
                    (shape.pointC.x === x && shape.pointC.y === y));
            }
            else if (shape instanceof Cone) {
                return ((shape.apex.x === x && shape.apex.y === y) ||
                    (shape.baseCenter.x === x && shape.baseCenter.y === y));
            }
            return false;
        });
    }
    getAllShapes() {
        return this.shapes;
    }
}
//# sourceMappingURL=ShapeRepository.js.map