import ShapeValidator from "../src/ShapeValidator";
import Cone from "../src/Cone";
import Point from "../src/Point";
import Warehouse from "../src/Warehouse";

describe("ShapeValidator", () => {
  // Тест validatePointData
  test("should validate point data correctly", () => {
    const validPointData = "1.5 -2.3";
    const invalidPointData = "1.5 -abc";

    // Проверка на валидные данные
    const result = ShapeValidator.validatePointData(validPointData);
    expect(result).toEqual([1.5, -2.3]);

    expect(() => ShapeValidator.validatePointData(invalidPointData)).toThrow(
      "Invalid point data"
    );
  });

  // Тест validateRadius
  test("should validate radius correctly", () => {
    const validRadius = 5;
    const invalidRadiusNegative = -3;
    const invalidRadiusZero = 0;

    // Проверка на валидный радиус
    expect(() => ShapeValidator.validateRadius(validRadius)).not.toThrow();
    expect(() => ShapeValidator.validateRadius(invalidRadiusNegative)).toThrow(
      "Radius must be a positive number"
    );
    expect(() => ShapeValidator.validateRadius(invalidRadiusZero)).toThrow(
      "Radius must be a positive number"
    );
  });

  // Тест validateHeight
  test("should validate height correctly", () => {
    const validHeight = 10;
    const invalidHeightNegative = -2;
    const invalidHeightZero = 0;

    // Проверка на валидную высоту
    expect(() => ShapeValidator.validateHeight(validHeight)).not.toThrow();
    expect(() => ShapeValidator.validateHeight(invalidHeightNegative)).toThrow(
      "Height must be a positive number"
    );
    expect(() => ShapeValidator.validateHeight(invalidHeightZero)).toThrow(
      "Height must be a positive number"
    );
  });

  // Тест isValidCone
  test("should validate cone correctly", () => {
    const apex = new Point(0, 0, 10);
    const baseCenterValid = new Point(0, 0, 0);
    const warehouse = new Warehouse();

    // Создание валидного конуса
    const validCone = new Cone(
      "cone1",
      apex,
      baseCenterValid,
      warehouse,
      10,
      5
    );

    expect(ShapeValidator.isValidCone(validCone)).toBe(true);

    // Проверка основание не на плоскости (например, z-координата не равна нулю)
    const baseCenterInvalidZNotZero = new Point(1, 1, 1);

    const invalidConeBaseNotOnPlane = new Cone(
      "cone2",
      apex,
      baseCenterInvalidZNotZero,
      warehouse,
      10,
      5
    );

    expect(ShapeValidator.isValidCone(invalidConeBaseNotOnPlane)).toBe(false);

    // Проверка на отрицательную высоту
    const coneWithInvalidHeight = new Cone(
      "cone3",
      apex,
      baseCenterValid,
      warehouse,
      -10,
      5
    );

    expect(ShapeValidator.isValidCone(coneWithInvalidHeight)).toBe(false);

    // Проверка на радиус ноль
    const coneWithInvalidRadius = new Cone(
      "cone4",
      apex,
      baseCenterValid,
      warehouse,
      10,
      0
    );

    expect(ShapeValidator.isValidCone(coneWithInvalidRadius)).toBe(false);
  });
});
