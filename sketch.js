var rest,motion;





function setup() {
  createCanvas(800,400);
  rest=createSprite(200, 200, 50, 50);
  motion=createSprite(350,200,50,50);
}

function draw() {
  background(255,255,255);
  motion.y=World.mouseY;
  motion.x=World.mouseX;

  if(motion.x-rest.x<=motion.width/2+rest.width/2 && rest.x-motion.x <=motion.width/2+rest.width/2 && motion.y-rest.y<=motion.height/2+rest.height/2 && rest.y - motion.y<=motion.height/2+rest.height/2
    ){
rest.shapeColor="red";
motion.shapeColor="red";
  }
  else{
    rest.shapeColor="blue";
motion.shapeColor="blue";
  }

  drawSprites();
}