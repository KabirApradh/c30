const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImg

var cannon,cannonball
var angle

var balls = []

function preload() {
  backgroundImg = loadImage("assets/background.gif")           
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150,350,160,310)

  angle = -PI/4
  cannon = new Cannon(180,110,110,50,angle)





  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height)

  tower.show()

 

  Engine.update(engine);

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i)
  }

  cannon.display()
}

function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    balls[balls.length - 1].shoot()
  }
}

function keyPressed() {
  if(keyCode == DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x,cannon.y)  
    balls.push(cannonBall)
  }
}

function showCannonBalls(ball,index) {
  ball.display()
  if (ball.position.x >= width || ball.position.y >= height - 50) {
    World.remove(world,ball.body)
    balls.splice(index,1)
  }
}


