const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground;
var pig;
var pig2;
var logs;
var logs2;
var logs3;
var logs4;
var bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);
  ground = new Ground(600,390,1200,20)
  pig = new Pig(810,350)
  pig2 = new Pig(810,220)
  logs = new Logs(810,180,300,PI/2)
  logs2 = new Logs(810,180,300,PI/2)
  logs3 = new Logs(760,120,150,PI/7)
  logs4 = new Logs(870,120,180,-PI/7)
  bird = new Bird(100,100)
}

function draw() {
  background("blue"); 
  Engine.update(engine); 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig.display();
  pig2.display();
  logs.display();
  logs2.display();
  logs3.display();
  logs4.display();
  bird.display();
}