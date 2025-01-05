export const addRandomTile = (
  board: { value: number | null; isNew: boolean; isMerged: boolean }[][]
): void => {
  const emptyTiles: [number, number][] = [];
  board.forEach((row, i) =>
    row.forEach((tile, j) => {
      if (tile.value === null) emptyTiles.push([i, j]);
    })
  );

  if (emptyTiles.length) {
    const [x, y] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[x][y] = { value: Math.random() < 0.8 ? 2 : 4, isNew: true, isMerged: false };
  }
};
