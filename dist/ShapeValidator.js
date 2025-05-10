export default class ShapeValidator {
    static validatePointData(data) {
        const regex = /^-?\d+(\.\d+)?\s-?\d+(\.\d+)?$/;
        if (!regex.test(data))
            throw new Error("Invalid point data");
        const [xStr, yStr] = data.split(" ");
        if (isNaN(Number(xStr)) || isNaN(Number(yStr)))
            throw new Error("Coordinates must be numbers");
        return [parseFloat(xStr), parseFloat(yStr)];
    }
    ////
    static validateRadius(radius) {
        if (radius <= 0) {
            throw new Error("Radius must be a positive number");
        }
    }
    static validateHeight(height) {
        if (height <= 0) {
            throw new Error("Height must be a positive number");
        }
    }
    static isValidCone(cone) {
        if (!cone || !cone.apex || !cone.baseCenter)
            return false;
        try {
            ShapeValidator.validateHeight(cone.height);
            ShapeValidator.validateRadius(cone.radius);
        }
        catch (error) {
            return false;
        }
        // Проверка на плоскости
        return (cone.baseCenter.z === 0 ||
            cone.baseCenter.y === 0 ||
            cone.baseCenter.x === 0);
    }
}
//# sourceMappingURL=ShapeValidator.js.map