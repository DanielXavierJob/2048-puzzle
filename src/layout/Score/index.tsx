import React from "react";

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="score">
      <span>Score: {score}</span>
    </div>
  );
};

export default Score;
