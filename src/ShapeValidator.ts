import Cone from "./Cone.js";

export default class ShapeValidator {
  static validatePointData(data: string): [number, number] {
    const regex = /^-?\d+(\.\d+)?\s-?\d+(\.\d+)?$/;

    if (!regex.test(data)) throw new Error("Invalid point data");

    const [xStr, yStr] = data.split(" ");

    if (isNaN(Number(xStr)) || isNaN(Number(yStr)))
      throw new Error("Coordinates must be numbers");

    return [parseFloat(xStr), parseFloat(yStr)];
  }

  ////
  static validateRadius(radius: number): void {
    if (radius <= 0) {
      throw new Error("Radius must be a positive number");
    }
  }

  static validateHeight(height: number): void {
    if (height <= 0) {
      throw new Error("Height must be a positive number");
    }
  }

  static isValidCone(cone: Cone): boolean {
    if (!cone) return false;
    if (!(cone.apex && cone.baseCenter)) return false;

    try {
      this.validateHeight(cone.height);
    } catch (error) {
      return false;
    }

    try {
      this.validateRadius(cone.radius);
    } catch (error) {
      return false;
    }

    // Проверка, что основание находится на одной из координатных плоскостей (XY, YZ или XZ)
    const baseZIsZero = cone.baseCenter.z === 0;
    const baseYIsZero = cone.baseCenter.y === 0;
    const baseXIsZero = cone.baseCenter.x === 0;

    return baseZIsZero || baseYIsZero || baseXIsZero;
  }
}
