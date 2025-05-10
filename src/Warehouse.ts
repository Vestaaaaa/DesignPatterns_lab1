//хранит площади и объемы фигур
import { Observer } from "./Observer.js";

export default class Warehouse implements Observer {
  private areas: Map<string, number> = new Map();
  private volumes: Map<string, number> = new Map();

  updateArea(id: string, area: number): void {
    this.areas.set(id, area);
    console.log(`Area updated for ${id}: ${area}`);
  }

  updateVolume(id: string, volume: number): void {
    this.volumes.set(id, volume);
    console.log(`Volume updated for ${id}: ${volume}`);
  }
}
