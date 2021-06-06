var movingRect,fixedRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,50);
  gameObject1 = createSprite(200,100,50,50);
  gameObject2 = createSprite(700,100,50,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;

}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

 if(isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor = "red";
  movingRect.shapeColor = "red";
 }else{
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
  bounceOff(gameObject1,gameObject2);
  drawSprites();
}

