const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var tanker,ground;
var canonball,canonImage;

function preload(){
   //canonImage = loadImage("CanonBall.png");
}

function setup() {
   var canvas = createCanvas(500,500);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(200,500,600,20);
   tanker = new Tanker(40,470,50,50);
// canonball = new CanonBall(400,255,10,10);
   
   shoot = new Shoot(75,470,20,10);

}

function draw() {
    Engine.update(engine);
    tanker.display();
    ground.display();
  //canonball.display();
    shoot.display();

}