import Point from "./Point.js";

export default class Cone {
  public readonly id: string;
  public readonly apex: Point; // вершина конуса
  public readonly baseCenter: Point; // центр основания конуса
  public readonly height: number; // высота конуса
  public readonly radius: number; // радиус основания

  constructor(
    id: string,
    apex: Point,
    baseCenter: Point,
    height: number,
    radius: number
  ) {
    this.id = id;
    this.apex = apex;
    this.baseCenter = baseCenter;
    this.height = height;
    this.radius = radius;
  }

  //Объём
  getVolume(): number {
    return (1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height;
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
    return this.baseCenter.z === 0;
  }

  //Является ли конусом
  isCone(): boolean {
    return this.height > 0 && this.radius > 0; // Конус должен иметь положительную высоту и радиус
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

    const aboveBaseHeight = this.apex.z; // (высота от основания до вершины)

    const aboveBaseVolume =
      (1 / 3) * Math.PI * Math.pow(this.radius, 2) * aboveBaseHeight;

    const belowBaseVolume = totalVolume - aboveBaseVolume;

    return { aboveBaseVolume, belowBaseVolume };
  }
}
