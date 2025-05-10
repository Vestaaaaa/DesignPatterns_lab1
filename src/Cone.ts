import Point from "./Point.js";
import { Observer } from "./Observer.js";
import Warehouse from "./Warehouse.js";

export default class Cone implements Observer {
  public readonly id: string;

  constructor(
    id: string,
    public apex: Point,
    public baseCenter: Point,
    private warehouse: Warehouse,
    public height: number,
    public radius: number
  ) {
    this.id = id;
    this.notifyVolumeUpdate();
  }

  // Объём
  getVolume(): number {
    return (1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  updateDimensions(height?: number, radius?: number): void {
    if (height !== undefined) this.height = height;
    if (radius !== undefined) this.radius = radius;

    this.notifyVolumeUpdate(); // Уведомляем о изменении объема
  }

  private notifyVolumeUpdate(): void {
    const volume = this.getVolume();
    this.warehouse.updateVolume(this.id, volume);
  }

  // Площадь поверхности
  getSurfaceArea(): number {
    const slantHeight = Math.sqrt(
      Math.pow(this.radius, 2) + Math.pow(this.height, 2)
    );
    return Math.PI * this.radius * (this.radius + slantHeight);
  }

  // Метод для проверки, находится ли основание на одной из координатных плоскостей
  isBaseOnCoordinatePlane(): boolean {
    return "z" in this.baseCenter && this.baseCenter.z === 0;
  }

  // Является ли конусом
  isCone(): boolean {
    return this.height > 0 && this.radius > 0;
  }

  // Метод для вычисления соотношения объемов после рассечения плоскостью Z=0
  getVolumeRatioAfterCutting(): {
    aboveBaseVolume: number;
    belowBaseVolume: number;
  } {
    if (!this.isBaseOnCoordinatePlane()) {
      throw new Error("Base is not on the coordinate plane.");
    }

    const totalVolume = this.getVolume();

    const aboveBaseHeight = (this.apex as any).z; // (высота от основания до вершины)

    const aboveBaseVolume =
      (1 / 3) * Math.PI * Math.pow(this.radius, 2) * aboveBaseHeight;

    const belowBaseVolume = totalVolume - aboveBaseVolume;

    return { aboveBaseVolume, belowBaseVolume };
  }

  // Реализация метода updateArea из интерфейса Observer
  updateArea(id: string, area: number): void {
    console.log(`Cone ${id} area cannot be updated as it has no area.`);
  }

  // Реализация метода updateVolume из интерфейса Observer
  updateVolume(id: string, volume: number): void {
    console.log(`Cone ${id} volume updated to ${volume}`);
  }
}
