import Point from "../src/Point";

describe("Tests for class Point", () => {
  test("Creating a point with given x, y and z", () => {
    const x = 3;
    const y = 4;
    const z = 5;

    const point = new Point(x, y, z);

    expect(point.x).toBe(x);
    expect(point.y).toBe(y);
    expect(point.z).toBe(z);
    expect(point).toBeInstanceOf(Point);
  });
});
