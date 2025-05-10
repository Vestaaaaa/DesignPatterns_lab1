// Реализация методов сортировки
import { Comparator } from "./Comparator.js";
import Triangle from "./Triangle.js";
import Cone from "./Cone.js";
import ShapeRepository from "./ShapeRepository.js";

export class ShapeSorter {
  static sortById(
    shapes: (Triangle | Cone)[],
    comparator: Comparator<Triangle | Cone>
  ): (Triangle | Cone)[] {
    return [...shapes].sort(comparator.compare);
  }

  static sortByFirstPointX(
    triangles: Triangle[],
    comparator: Comparator<Triangle>
  ): Triangle[] {
    return [...triangles].sort(comparator.compare);
  }

  static sortByFirstPointY(
    triangles: Triangle[],
    comparator: Comparator<Triangle>
  ): Triangle[] {
    return [...triangles].sort(comparator.compare);
  }
}

// Comparators для фигур
class IdComparator implements Comparator<Triangle | Cone> {
  compare(a: Triangle | Cone, b: Triangle | Cone): number {
    return a.id.localeCompare(b.id);
  }
}

class FirstPointXComparator implements Comparator<Triangle> {
  compare(a: Triangle, b: Triangle): number {
    return a.pointA.x - b.pointA.x;
  }
}

class FirstPointYComparator implements Comparator<Triangle> {
  compare(a: Triangle, b: Triangle): number {
    return a.pointA.y - b.pointA.y;
  }
}

// Пример использования сортировки
const shapes = ShapeRepository.getInstance().getAllShapes();
const sortedById = ShapeSorter.sortById(shapes, new IdComparator());
console.log("Shapes sorted by ID:", sortedById);

// Фильтруем только треугольники для сортировки по координатам
const triangles = shapes.filter(
  (shape: Triangle | Cone): shape is Triangle => shape instanceof Triangle
);

const sortedTrianglesByFirstPointX = ShapeSorter.sortByFirstPointX(
  triangles,
  new FirstPointXComparator()
);
console.log("Triangles sorted by first point X:", sortedTrianglesByFirstPointX);

const sortedTrianglesByFirstPointY = ShapeSorter.sortByFirstPointY(
  triangles,
  new FirstPointYComparator()
);
console.log("Triangles sorted by first point Y:", sortedTrianglesByFirstPointY);
