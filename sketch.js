
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash,ground;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	trash = new Trash(200,200,20);
    ground = new Ground(200,580,400,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  trash.display();
  ground.display();

  drawSprites();
 
}



