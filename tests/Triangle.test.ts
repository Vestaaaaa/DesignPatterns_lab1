import Triangle from "../src/Triangle";
import Point from "../src/Point";
import Warehouse from "../src/Warehouse";

describe("Triangle", () => {
  test("area of triangle with vertices (0,0), (3,0), (0,4)", () => {
    const vertexA = new Point(0, 0);
    const vertexB = new Point(3, 0);
    const vertexC = new Point(0, 4);
    const warehouse = new Warehouse();

    const triangle = new Triangle(vertexA, vertexB, vertexC, warehouse);

    expect(triangle.getArea()).toBe(6);
    expect(triangle.getPerimeter()).toBeCloseTo(12);
    expect(triangle.isIsosceles()).toBe(false);
  });

  test("area of triangle with coinciding vertices (0,0), (0,0), (0,0)", () => {
    const vertexA = new Point(0, 0);
    const vertexB = new Point(0, 0);
    const vertexC = new Point(0, 0);
    const warehouse = new Warehouse();

    const triangle = new Triangle(vertexA, vertexB, vertexC, warehouse);

    expect(triangle.getArea()).toBe(0);
    expect(triangle.getPerimeter()).toBe(0);
    expect(triangle.isIsosceles()).toBe(true);
  });
});
