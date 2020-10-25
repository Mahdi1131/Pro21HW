var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);
  thickness = random(22,83);
  speed = random(55,90);
  weight = random(400,1500);
  
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "black";

  wall = createSprite(600, 200, thickness, height/2);
  wall.shapeColor ="grey";1

  weight = random(223, 321);
  speed = random(30,52);
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = "red"
    }
    if(damage<10){
      wall.shapeColor = "green"
    }

  }

  drawSprites();

}
function hasCollided(lbullet, lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}else{
  return false;
}
}