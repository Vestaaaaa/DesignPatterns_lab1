export default class Cone {
    constructor(id, apex, baseCenter, warehouse, height, radius) {
        this.apex = apex;
        this.baseCenter = baseCenter;
        this.warehouse = warehouse;
        this.height = height;
        this.radius = radius;
        this.id = id;
        this.notifyVolumeUpdate();
    }
    // Объём
    getVolume() {
        return (1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height;
    }
    updateDimensions(height, radius) {
        if (height !== undefined)
            this.height = height;
        if (radius !== undefined)
            this.radius = radius;
        this.notifyVolumeUpdate(); // Уведомляем о изменении объема
    }
    notifyVolumeUpdate() {
        const volume = this.getVolume();
        this.warehouse.updateVolume(this.id, volume);
    }
    // Площадь поверхности
    getSurfaceArea() {
        const slantHeight = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
        return Math.PI * this.radius * (this.radius + slantHeight);
    }
    // Метод для проверки, находится ли основание на одной из координатных плоскостей
    isBaseOnCoordinatePlane() {
        return "z" in this.baseCenter && this.baseCenter.z === 0;
    }
    // Является ли конусом
    isCone() {
        return this.height > 0 && this.radius > 0;
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
    // Реализация метода updateArea из интерфейса Observer
    updateArea(id, area) {
        console.log(`Cone ${id} area cannot be updated as it has no area.`);
    }
    // Реализация метода updateVolume из интерфейса Observer
    updateVolume(id, volume) {
        console.log(`Cone ${id} volume updated to ${volume}`);
    }
}
//# sourceMappingURL=Cone.js.map