export const checkGameOver = (board: TileData[][]): boolean => {
  const size = board.length;

  // Verifica se ainda há algum campo vazio
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const currentTile = board[row][col];

      // Campo vazio encontrado
      if (currentTile.value === null) {
        return false;
      }

      // Verifica se é possível mesclar com tiles adjacentes
      const adjacentTiles = [
        row > 0 ? board[row - 1][col] : null, // Tile acima
        row < size - 1 ? board[row + 1][col] : null, // Tile abaixo
        col > 0 ? board[row][col - 1] : null, // Tile à esquerda
        col < size - 1 ? board[row][col + 1] : null, // Tile à direita
      ];

      for (const tile of adjacentTiles) {
        if (tile && tile.value === currentTile.value) {
          return false; // Mesclagem possível
        }
      }
    }
  }

  // Se não há espaços vazios e nenhuma mesclagem possível, o jogo acabou
  return true;
};
