import React from "react";
import Tile from "../Tile";
import { SwipeableHandlers } from "react-swipeable";

interface TileData {
  value: number | null; // Valor do tile (ex.: 2, 4, 8, etc.)
  isNew: boolean; // Se o tile é novo
  isMerged: boolean; // Se o tile foi mesclado
}

interface BoardProps {
  board: TileData[][]; // Tabuleiro é uma matriz de objetos TileData
  swipeHandlers: SwipeableHandlers; // Handlers para gestos de swipe
}

const Board: React.FC<BoardProps> = ({ board, swipeHandlers }) => {
  return (
    <figure className="game" {...swipeHandlers}>
      <div className="board">
        {Array(4)
          .fill(null)
          .map((_, rowIndex) =>
            Array(4)
              .fill(null)
              .map((_, colIndex) => {
                // Obtenha o tile correspondente do board
                const tile = board[rowIndex]?.[colIndex] || { value: null, isNew: false, isMerged: false };

                // Renderize o tile fixo
                return (
                  <Tile
                    key={`${rowIndex}-${colIndex}`}
                    value={tile.value}
                    isNew={tile.isNew}
                    isMerged={tile.isMerged}
                    position={[rowIndex, colIndex]}
                  />
                );
              })
          )}
      </div>
    </figure>
  );
};

export default Board;
