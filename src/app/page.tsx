import Game from "@/layout/Game";

export default function Home() {
  return (
    <>
      {/* <div className="above-board">
        <h1>2048</h1>
        <div className="new-game">
          <button>New Game</button>
        </div>
        <br />
        <br />
        <div className="score">
          <span>Score: 0</span>
        </div>
      </div>
      <div className="modal" />
      <figure className="game"></figure>
      <div className="below-board">
        <span>
          How to play: Use your keyboards arrow keys or your phone/tablets
          swipe gestures to slide all of the tiles up, down, left, or right. If
          two tiles with the same number collide, they combine and double in
          value! Keep moving and matching tiles until you hit 2048!
        </span>
        <br />
        <br />
        <span className="foot-text">
          This game was created by{" "}
          <a href="http://noahwiener.github.io/">Noah Wiener</a> using
          Javascript, jQuery, HTML, and CSS, featuring{" "}
          <a href="https://github.com/mattbryson/TouchSwipe-Jquery-Plugin">
            Matt Bryson jQuery TouchSwipe plugin
          </a>{" "}
          for mobile support.{" "}
          <a href="http://noahwiener.github.io/">
            Check out some of Noahs other work here
          </a>
          . This page is an adaptation of{" "}
          <a href="https://gabrielecirulli.github.io/2048/">Gabriele Cirulli</a>
          s original 2048 game.
        </span>
      </div> */}
      <Game />
    </>
  );
}
