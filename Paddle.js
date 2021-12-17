export default class Paddle{
   constructor(paddleElement){
      this.paddleElem = paddleElement;
   }

   get position(){
      return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
   }

   set position(value){
      this.paddleElem.style.setProperty("--position", value);
   }
}