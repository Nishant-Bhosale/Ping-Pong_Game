import Ball from './Ball.js';
import Paddle from './Paddle.js';
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));

const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

const playerScoreElem = document.querySelector(".player-score")

const compScoreElem = document.querySelector(".computer-score");

let lastTime;

function update(time){
   if(lastTime != null){
      const delta = time - lastTime;
      //Update Code
      // ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
      computerPaddle.update(delta, ball.y);
      
      if(isLose()){
         handleLose();
      }
   }
   lastTime = time;
   window.requestAnimationFrame(update);
}

const handleLose = () => {
   const rect = ball.rect();

   if(rect.right >= window.innerWidth){
      playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
   }else{
      compScoreElem.textContent = parseInt(compScoreElem.textContent) + 1
   }
   ball.reset();
   computerPaddle.reset();
   playerPaddle.reset();
}

const isLose = ()=> {
   const rect = ball.rect();
   return rect.left <= 0 || rect.right >= window.innerWidth;
}

document.addEventListener("mousemove", e => {
   playerPaddle.position = (e.y / window.innerHeight) * 100;
})
window.requestAnimationFrame(update)