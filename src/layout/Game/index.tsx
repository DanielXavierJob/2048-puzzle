"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import Board from "../Board";
import Modal from "../Modal";
import Score from "../Score";
import { addRandomTile } from "@/utils/addRandomTile";
import { moveTiles } from "@/utils/moveTiles";
import { checkGameWon } from "@/utils/checkGameWon";
import { checkGameOver } from "@/utils/checkGameOver";
import Footer from "../Footer";

const Game: React.FC = () => {
  const [board, setBoard] = useState<TileData[][]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);

  useEffect(() => {
    resetGame();
  }, []);


  const handleMove = useCallback(
    (direction: "up" | "down" | "left" | "right") => {
      if (gameOver || gameWon || board.length === 0) return;

      const { newBoard, moved, newScore } = moveTiles(board, direction);

      if (moved) {
        addRandomTile(newBoard);
        // Atualiza o estado das tiles para remover "isNew" e "isMerged"
        const resetBoard = newBoard.map((row) =>
          row.map((tile) => ({
            ...tile,
            isNew: false,
            isMerged: false,
          }))
        );
        setBoard(resetBoard);
        setScore((prev) => prev + newScore);

        if (checkGameWon(newBoard)) setGameWon(true);
        else if (checkGameOver(newBoard)) setGameOver(true);
      }
    },
    [board]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const KEYS: { [key: string]: "up" | "down" | "left" | "right" } = {
        ArrowUp: "up",
        ArrowRight: "right",
        ArrowDown: "down",
        ArrowLeft: "left",
      };
      if (KEYS[event.code]) {
        handleMove(KEYS[event.code]);
      }
    },
    [board, handleMove]
  );

  useEffect(() => {
    const listener = (event: KeyboardEvent) => handleKeyPress(event);
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [handleKeyPress]);

  const resetGame = () => {
    const newBoard = Array(4)
      .fill(null)
      .map(() =>
        Array(4)
          .fill(null)
          .map(() => ({
            value: null,
            isNew: false,
            isMerged: false,
          }))
      );

    // Gera dois tiles iniciais
    for (let i = 0; i < 2; i++) {
      addRandomTile(newBoard);
    }
   
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleMove("left"),
    onSwipedRight: () => handleMove("right"),
    onSwipedUp: () => handleMove("up"),
    onSwipedDown: () => handleMove("down"),
  });

  return (
    <>
      <div className="above-board">
        <h1>2048</h1>
        <div className="new-game">
          <button onClick={resetGame}>Novo Jogo</button>
        </div>
        <br />
        <br />
        <Score score={score} />
      </div>
      <Modal gameOver={gameOver} gameWon={gameWon} resetGame={resetGame} />
      <Board board={board} swipeHandlers={swipeHandlers} />
      <Footer />
    </>
  );
};

export default Game;
