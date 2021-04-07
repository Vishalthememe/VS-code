var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  apple=createSprite(200,200,100,150);
  apple.shapeColor="lightGreen";
  mango=createSprite(400,100,100,100);
  mango.shapeColor = "orange"
  dragonFruit=createSprite(600,50,50,50);
  dragonFruit.shapeColor="pink"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  //call
  if(isTouching(movingRect,apple)){
    movingRect.shapeColor = "purple";
   apple.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    apple.shapeColor = "lightGreen";
  }
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "purple";
   fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
   dragonFruit.shapeColor = "lightGreen";
  }
  
  
  drawSprites();
}

