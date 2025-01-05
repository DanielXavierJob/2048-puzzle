interface Board {
  value: number | null;
  isNew: boolean;
  isMerged: boolean;
}

export const moveTiles = (
  board: Board[][],
  direction: "up" | "down" | "left" | "right"
): { newBoard: Board[][]; moved: boolean; newScore: number } => {
  const size = board.length;
  let moved = false;
  let newScore = 0;

  const moveRow = (row: typeof board[number]): typeof row => {
    const compressedRow = row.filter((tile) => tile.value !== null); // Remove tiles vazias
    const mergedRow: typeof row = [];
    let skip = false;

    for (let i = 0; i < compressedRow.length; i++) {
      if (skip) {
        skip = false;
        continue;
      }

      if (
        i < compressedRow.length - 1 &&
        compressedRow[i].value === compressedRow[i + 1].value
      ) {
        // Combina tiles iguais
        const newValue = compressedRow[i].value! * 2;
        mergedRow.push({
          value: newValue,
          isNew: false,
          isMerged: true,
        });
        newScore += newValue;
        skip = true; // Pula a próxima tile
      } else {
        mergedRow.push({
          ...compressedRow[i],
          isMerged: false,
          isNew: false,
        });
      }
    }

    // Preenche com tiles vazias até atingir o tamanho da linha
    while (mergedRow.length < size) {
      mergedRow.push({ value: null, isNew: false, isMerged: false });
    }

    return mergedRow;
  };

  const rotateBoard = (
    board: Board[][],
    reverse: boolean = false
  ): typeof board => {
    const rotated: typeof board = Array(size)
      .fill(null)
      .map(() =>
        Array(size).fill(null).map(() => ({
          value: null,
          isNew: false,
          isMerged: false,
        }))
      );

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (reverse) {
          rotated[j][size - 1 - i] = board[i][j];
        } else {
          rotated[size - 1 - j][i] = board[i][j];
        }
      }
    }

    return rotated;
  };

  // Rotaciona o tabuleiro com base na direção
  let rotatedBoard = board;
  if (direction === "up") {
    rotatedBoard = rotateBoard(board); // 90° horário
  } else if (direction === "down") {
    rotatedBoard = rotateBoard(board, true); // 90° anti-horário
  } else if (direction === "right") {
    rotatedBoard = board.map((row) => row.reverse()); // Inverte as linhas
  }

  // Processa cada linha do tabuleiro
  const processedBoard = rotatedBoard.map(moveRow);

  // Reverte a rotação para o estado original
  let finalBoard = processedBoard;
  if (direction === "up") {
    finalBoard = rotateBoard(processedBoard, true); // Reverte rotação
  } else if (direction === "down") {
    finalBoard = rotateBoard(processedBoard); // Reverte rotação
  } else if (direction === "right") {
    finalBoard = processedBoard.map((row) => row.reverse()); // Reverte linhas
  }

  // Verifica se houve movimentação
  moved = JSON.stringify(board) !== JSON.stringify(finalBoard);

  return { newBoard: finalBoard, moved, newScore };
};
