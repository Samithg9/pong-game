class Paddle {
  
  constructor(){
    this.width = 70;
    this.height = 10;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
}