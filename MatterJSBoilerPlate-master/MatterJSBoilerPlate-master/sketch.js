
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
	ball1 = createSprite(200,500,50,50);
	ball1 = createSprite(300,500,50,50);
	ball2 = createSprite(400,500,50,50);
	ball3 = createSprite(500,500,50,50);
	ball4 = createSprite(600,500,50,50);
	
	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(0);
  
  drawSprites();
 
}


