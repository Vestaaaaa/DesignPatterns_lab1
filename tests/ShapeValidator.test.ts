import ShapeValidator from "../src/ShapeValidator";
import Cone from "../src/Cone";
import Point from "../src/Point";

describe("ShapeValidator", () => {
  // Тест validatePointData
  test("should validate point data correctly", () => {
    const validPointData = "1.5 -2.3";
    const invalidPointData = "1.5 -abc";
    const result = ShapeValidator.validatePointData(validPointData);

    expect(result).toEqual([1.5, -2.3]);

    // Проверка на выброс ошибки для невалидных данных
    expect(() => ShapeValidator.validatePointData(invalidPointData)).toThrow(
      "Invalid point data"
    );
  });

  // Тест validateRadius
  test("should validate radius correctly", () => {
    const validRadius = 5;
    const invalidRadiusNegative = -3;
    const invalidRadiusZero = 0;

    ShapeValidator.validateRadius(validRadius);
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

    ShapeValidator.validateHeight(validHeight);
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
    const baseCenterInvalid = new Point(1, 1, 1);

    const validCone = new Cone("cone1", apex, baseCenterValid, 10, 5);

    expect(ShapeValidator.isValidCone(validCone)).toBe(true);

    // Проверка основание не на плоскости
    const invalidCone = new Cone("cone2", apex, baseCenterInvalid, 10, 5);
    expect(ShapeValidator.isValidCone(invalidCone)).toBe(false);

    // Проверка на отрицательную высоту
    const coneWithInvalidHeight = new Cone(
      "cone3",
      apex,
      baseCenterValid,
      -10,
      5
    );
    expect(ShapeValidator.isValidCone(coneWithInvalidHeight)).toBe(false);

    // Проверка на радиус ноль
    const coneWithInvalidRadius = new Cone(
      "cone4",
      apex,
      baseCenterValid,
      10,
      0
    );
    expect(ShapeValidator.isValidCone(coneWithInvalidRadius)).toBe(false);
  });
});
