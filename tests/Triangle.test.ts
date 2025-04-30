import Triangle from "../src/Triangle";
import Point from "../src/Point";

describe("Triangle", () => {
  test("area of triangle with vertices (0,0), (3,0), (0,4)", () => {
    const triangle = new Triangle(
      new Point(0, 0),
      new Point(3, 0),
      new Point(0, 4)
    );

    expect(triangle.getArea()).toBe(6);
  });
});
