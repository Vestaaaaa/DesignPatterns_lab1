export default class Warehouse {
    constructor() {
        this.areas = new Map();
        this.volumes = new Map();
    }
    updateArea(id, area) {
        this.areas.set(id, area);
        console.log(`Area updated for ${id}: ${area}`);
    }
    updateVolume(id, volume) {
        this.volumes.set(id, volume);
        console.log(`Volume updated for ${id}: ${volume}`);
    }
}
//# sourceMappingURL=Warehouse.js.map