import React from "react";

const Footer = () => {
  return (
    <div className="below-board">
      <span>
        Como jogar: Use as teclas de seta do teclado ou os gestos de deslizar no
        seu celular/tablet para mover os blocos para cima, para baixo, para a
        esquerda ou para a direita. Se dois blocos com o mesmo número se
        chocarem, eles se combinam e dobram de valor! Continue movendo e
        combinando os blocos até alcançar 2048!
      </span>
      <br />
      <br />
      <span className="foot-text">
        Este jogo foi criado por {" "}
        <a href="https://github.com/DanielXavierJob">Daniel Xavier</a> usando
        NextJs, Typescript e CSS.
      </span>
    </div>
  );
};

export default Footer;
