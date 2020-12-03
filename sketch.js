var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
var object1,object2;
function setup() {
  createCanvas(1200,600);
  movingRect =createSprite(200,200,50,50);
  movingRect.shapeColor ='green';
  fixedRect =createSprite(400,400,30,30);
  fixedRect.shapeColor ='green';
  
  gameObject1 =createSprite(100,100,50,50);
  gameObject1.shapeColor ='green'
  gameObject2 =createSprite(200,100,50,50);
  gameObject2.shapeColor ='green'
  gameObject3 =createSprite(300,100,50,50);
  gameObject3.shapeColor ='green'
  gameObject4 =createSprite(400,100,50,50);
  gameObject4.shapeColor ='green'

}

function draw() {
  background(0);  

  movingRect.x =World.mouseX;
  movingRect.y =World.mouseY;

  if (isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor ='blue';
    movingRect.shapeColor ='blue';
  }
    else {
      movingRect.shapeColor ='green';
      gameObject1.shapeColor ='green';
  }
      
  
  drawSprites();
}
function isTouching(object1,object2){
  if(object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.x-object2.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
      return true;
    }
    else{
       return false;
    }
}