export default class Cone {
    constructor(id, apex, baseCenter, height, radius) {
        this.id = id;
        this.apex = apex;
        this.baseCenter = baseCenter;
        this.height = height;
        this.radius = radius;
    }
    //Объём
    getVolume() {
        return (1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height;
    }
    // Площадь поверхности
    getSurfaceArea() {
        const slantHeight = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        return Math.PI * this.radius * (this.radius + slantHeight);
    }
    // Метод для проверки, находится ли основание на одной из координатных плоскостей
    isBaseOnCoordinatePlane() {
        return this.baseCenter.z === 0;
    }
    //Является ли конусом
    isCone() {
        return this.height > 0 && this.radius > 0; // Конус должен иметь положительную высоту и радиус
    }
    // Метод для вычисления соотношения объемов после рассечения плоскостью Z=0
    getVolumeRatioAfterCutting() {
        if (!this.isBaseOnCoordinatePlane()) {
            throw new Error("Base is not on the coordinate plane.");
        }
        const totalVolume = this.getVolume();
        const aboveBaseHeight = this.apex.z; // (высота от основания до вершины)
        const aboveBaseVolume = (1 / 3) * Math.PI * Math.pow(this.radius, 2) * aboveBaseHeight;
        const belowBaseVolume = totalVolume - aboveBaseVolume;
        return { aboveBaseVolume, belowBaseVolume };
    }
}
//# sourceMappingURL=Cone.js.map