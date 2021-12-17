import Ball from './Ball.js';
import Paddle from './Paddle.js';
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));

const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

let lastTime;

function update(time){
   if(lastTime != null){
      const delta = time - lastTime;
      //Update Code
      // ball.update(delta);
   }
   lastTime = time;
   window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update)