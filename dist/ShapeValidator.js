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
}
//# sourceMappingURL=ShapeValidator.js.map