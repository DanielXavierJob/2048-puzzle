export const countTiles = (board: { value: number | null }[][]): number => {
  return board.flat().filter((tile) => tile.value !== null).length;
};
