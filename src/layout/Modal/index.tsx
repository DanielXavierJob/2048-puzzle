import React from "react";

interface ModalProps {
  gameOver: boolean;
  gameWon: boolean;
  resetGame: () => void;
}

const Modal: React.FC<ModalProps> = ({ gameOver, gameWon, resetGame }) => {
  if (!gameOver && !gameWon) return null;

  const message = gameWon
    ? "Parabéns! Você ganhou, deseja ir mais uma vez?"
    : "Você perdeu, quer tentar de novo?";

  return (
    <div className="modal">
      <div className="modal-text">
        <p>{message}</p>
        <div className="modal-button">
          <button
            onClick={() => {
              resetGame();
            }}
          >
            Jogar novamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
