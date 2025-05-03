import Triangle from "../src/Triangle";
import Point from "../src/Point";

describe("Triangle", () => {
  test("area of triangle with vertices (0,0), (3,0), (0,4)", () => {
    const vertexA = new Point(0, 0);
    const vertexB = new Point(3, 0);
    const vertexC = new Point(0, 4);
    const triangle = new Triangle(vertexA, vertexB, vertexC);

    const area = triangle.getArea();

    expect(area).toBe(6);
    expect(triangle.getPerimeter()).toBeCloseTo(12);
    expect(triangle.isIsosceles()).toBe(false);
  });

  test("area of triangle with coinciding vertices (0,0), (0,0), (0,0)", () => {
    const vertexA = new Point(0, 0);
    const vertexB = new Point(0, 0);
    const vertexC = new Point(0, 0);
    const triangle = new Triangle(vertexA, vertexB, vertexC);

    const area = triangle.getArea();

    expect(area).toBe(0);
    expect(triangle.getPerimeter()).toBe(0);
    expect(triangle.isIsosceles()).toBe(true);
  });
});
