import Triangle from "./Triangle.js";
import ShapeRepository from "./ShapeRepository.js";
export class ShapeSorter {
    static sortById(shapes, comparator) {
        return [...shapes].sort(comparator.compare);
    }
    static sortByFirstPointX(triangles, comparator) {
        return [...triangles].sort(comparator.compare);
    }
    static sortByFirstPointY(triangles, comparator) {
        return [...triangles].sort(comparator.compare);
    }
}
// Comparators для фигур
class IdComparator {
    compare(a, b) {
        return a.id.localeCompare(b.id);
    }
}
class FirstPointXComparator {
    compare(a, b) {
        return a.pointA.x - b.pointA.x;
    }
}
class FirstPointYComparator {
    compare(a, b) {
        return a.pointA.y - b.pointA.y;
    }
}
// Пример использования сортировки
const shapes = ShapeRepository.getInstance().getAllShapes();
const sortedById = ShapeSorter.sortById(shapes, new IdComparator());
console.log("Shapes sorted by ID:", sortedById);
// Фильтруем только треугольники для сортировки по координатам
const triangles = shapes.filter((shape) => shape instanceof Triangle);
const sortedTrianglesByFirstPointX = ShapeSorter.sortByFirstPointX(triangles, new FirstPointXComparator());
console.log("Triangles sorted by first point X:", sortedTrianglesByFirstPointX);
const sortedTrianglesByFirstPointY = ShapeSorter.sortByFirstPointY(triangles, new FirstPointYComparator());
console.log("Triangles sorted by first point Y:", sortedTrianglesByFirstPointY);
//# sourceMappingURL=ShapeSorter.js.map