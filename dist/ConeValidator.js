export default class ConeValidator {
    static isValid(cone) {
        if (!cone)
            return false;
        if (!(cone.apex && cone.baseCenter))
            return false;
        if (typeof cone.height !== "number" || cone.height <= 0)
            return false;
        if (typeof cone.radius !== "number" || cone.radius <= 0)
            return false;
        // Проверка, что основание находится на одной из координатных плоскостей (XY, YZ или XZ)
        const baseZIsZero = cone.baseCenter.z === 0;
        const baseYIsZero = cone.baseCenter.y === 0;
        const baseXIsZero = cone.baseCenter.x === 0;
        if (!(baseZIsZero || baseYIsZero || baseXIsZero))
            return false;
        return true;
    }
}
//# sourceMappingURL=ConeValidator.js.map