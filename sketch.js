
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boy;
var tree;

function preload()
{
boy = loadImage("Plucking mangoes/boy.png");
tree = loadImage("Plucking mangoes/tree.png");
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,850,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
 imageMode(CENTER);
 image(boy,200,630,200,200);
 image(tree,600,)
 
}



