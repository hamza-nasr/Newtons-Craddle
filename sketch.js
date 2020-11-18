
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = createSprite(400, 200,700,40);
	ball1 = createSprite(200,400,50,50);
	ball1 = createSprite(275,400,50,50);
	ball2 = createSprite(350,400,50,50);
	ball3 = createSprite(425,400,50,50);
	ball4 = createSprite(500,400,50,50);
	
	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(0);
  
  drawSprites();
 
}



