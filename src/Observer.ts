export interface Observer {
  updateArea(id: string, area: number): void;
  updateVolume(id: string, volume: number): void;
}
