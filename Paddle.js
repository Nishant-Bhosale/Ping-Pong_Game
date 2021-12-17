const SPEED = 0.02;

export default class Paddle{
   constructor(paddleElement){
      this.paddleElem = paddleElement;
      this.reset();
   }

   get position(){
      return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
   }

   set position(value){
      this.paddleElem.style.setProperty("--position", value);
   }

   update(delta, ballHeight){
      this.position += (ballHeight - this.position) * delta * SPEED ;
   }

   rect(){
      return this.paddleElem.getBoundingClientRect();
   }

   reset(){
      this.position = 50;
   }
}