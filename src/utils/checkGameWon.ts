export const checkGameWon = (board: TileData[][]): boolean => {
  // Check if any tile on the board has reached 2048
  return board.some((row) => row.some((cell) => cell.value === 2048));
};
