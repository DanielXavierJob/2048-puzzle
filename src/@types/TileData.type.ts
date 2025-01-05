/* eslint-disable @typescript-eslint/no-unused-vars */
interface TileData {
  value: number | null; // Valor da tile (ex.: 2, 4, etc.)
  isNew: boolean; // Se a tile foi recém-criada
  isMerged: boolean; // Se a tile foi resultado de uma fusão
}
