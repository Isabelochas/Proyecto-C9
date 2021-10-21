var ball;

function setup() {
  createCanvas(400,400);

  ball= createSprite (200,50,25,25);

}

function draw() 
{
  background("purple");

  if (keyDown(LEFT_ARROW)){
    ball.position.x= ball.position.x -5;
  }

  if (keyDown(RIGHT_ARROW)){
    ball.position.x= ball.position.x +5;
  }

  if (keyDown(UP_ARROW)){
    ball.position.y= ball.position.y -5;
  }

  if (keyDown(DOWN_ARROW)){
    ball.position.y= ball.position.y +5;
  }

  drawSprites();
}




