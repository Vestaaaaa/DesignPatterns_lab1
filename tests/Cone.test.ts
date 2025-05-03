import Cone from "../src/Cone";
import Point from "../src/Point";
import ShapeValidator from "../src/ShapeValidator";

describe("Cone", () => {
  const apex = new Point(0, 0, 10);
  const baseCenter = new Point(0, 0, 0); // основание на XY плоскости
  const height = 10;
  const radius = 5;
  const id = "cone1";

  test("should create a cone instance with correct properties", () => {
    const cone = new Cone(id, apex, baseCenter, height, radius);

    expect(cone.id).toBe(id);
    expect(cone.apex).toBe(apex);
    expect(cone.baseCenter).toBe(baseCenter);
    expect(cone.height).toBe(height);
    expect(cone.radius).toBe(radius);
  });

  // Тест на вычисление объема конуса
  test("should calculate the volume of the cone correctly", () => {
    const cone = new Cone(id, apex, baseCenter, height, radius);

    const volume = cone.getVolume();

    const expectedVolume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    expect(volume).toBeCloseTo(expectedVolume);
    expect(volume).toBeGreaterThan(0);
  });

  // Тест на проверку валидности конуса
  test("should validate the cone correctly", () => {
    const validCone = new Cone(id, apex, baseCenter, height, radius);

    const isValid = ShapeValidator.isValidCone(validCone);

    expect(isValid).toBe(true);

    // отрицательная высота
    const invalidConeNegativeHeight = new Cone(
      id + "invalidHeight",
      apex,
      baseCenter,
      -5,
      radius
    );
    expect(ShapeValidator.isValidCone(invalidConeNegativeHeight)).toBe(false);

    // ноль радиус
    const invalidConeZeroRadius = new Cone(
      id + "invalidRadius",
      apex,
      baseCenter,
      height,
      0
    );
    expect(ShapeValidator.isValidCone(invalidConeZeroRadius)).toBe(false);

    // не на плоскости
    const invalidBaseCenter = new Point(1, 1, 1);
    const invalidConeBaseNotOnPlane = new Cone(
      id + "invalidBase",
      apex,
      invalidBaseCenter,
      height,
      radius
    );
    expect(ShapeValidator.isValidCone(invalidConeBaseNotOnPlane)).toBe(false);
  });
});
