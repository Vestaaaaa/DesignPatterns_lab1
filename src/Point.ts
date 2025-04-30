export default class Point {
  public readonly x: number;
  public readonly y: number;
  public readonly z: number;

  constructor(x: number, y: number, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
