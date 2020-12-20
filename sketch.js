var  car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 50);
  car = createSprite(50, 250, 10, 20);
  car = createSprite(50, 300, 10, 20);

  speed = random(55, 90)
  weight = random(400, 1500)

  wall = createSprite(1500, 200, 60, height/2);
  wall = createSprite(2500, 300, 70, height/2);
  
  car.shapeColor = "blue"
  car.shapeColor = "green"
  car.shapeColor = "yellow"

  car.velocityX = speed;
  car.velocityX = speed;
  car.velocityX = speed;
}

function draw() {
  background(0);
  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.VelocityX = 0
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180) {
      car.shapeColor = color(225, 0, 0)
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0)
    }
    if(deformation < 100) {
      car.shapeColor = color(0, 255, 0)
    }
  }

  drawSprites();
}