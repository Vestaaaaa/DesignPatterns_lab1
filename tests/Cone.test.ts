import Cone from "../src/Cone";
import Point from "../src/Point";
import ConeValidator from "../src/ConeValidator";

describe("Cone", () => {
  const apex = new Point(0, 0, 10);
  const baseCenterXY = new Point(0, 0, 0); // основание на XY плоскости
  const baseCenterYZ = new Point(0, 0, 0); // можно проверить разные плоскости
  const height = 10;
  const radius = 5;
  const id = "cone1";

  test("should create a cone instance with correct properties", () => {
    const cone = new Cone(id, apex, baseCenterXY, height, radius);

    expect(cone.id).toBe(id);
    expect(cone.apex).toBe(apex);
    expect(cone.baseCenter).toBe(baseCenterXY);
    expect(cone.height).toBe(height);
    expect(cone.radius).toBe(radius);
  });

  test("valid cone passes validation", () => {
    const cone = new Cone(id, apex, baseCenterXY, height, radius);

    expect(ConeValidator.isValid(cone)).toBe(true);
  });

  test("invalid cone fails validation: negative height", () => {
    const cone = new Cone(id, apex, baseCenterXY, -5, radius);

    expect(ConeValidator.isValid(cone)).toBe(false);
  });

  test("invalid cone fails validation: zero radius", () => {
    const cone = new Cone(id, apex, baseCenterXY, height, 0);

    expect(ConeValidator.isValid(cone)).toBe(false);
  });

  test("invalid cone fails validation: base center not on coordinate plane", () => {
    // базовая точка не лежит на плоскости XY/YZ/XZ
    const invalidBaseCenter = new Point(1, 1, 1);
    const cone = new Cone(id, apex, invalidBaseCenter, height, radius);

    expect(ConeValidator.isValid(cone)).toBe(false);
  });
});
