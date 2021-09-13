var playerPaddle;
var compPlayer;



function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
compPlayer = new Paddle();}

function draw() {
  //set background to white
  background("white");
  
  playerPaddle.yPosition = 390;
  playerPaddle.xPosition = mouseX;
  compPlayer.xPosition = 1;
  compPlayer.yposition = 1;
  
  playerPaddle.display();
  compPlayer.display();
  //draw the ball
  rect(200,200,10,10);
}

