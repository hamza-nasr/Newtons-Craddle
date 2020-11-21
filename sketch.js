
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
	chain1 = new Chain(ball1.body,roof.body);
	chain2 = new Chain(ball2.body,roof.body);
	chain3 = new Chain(ball3.body,roof.body);
	chain4 = new Chain(ball4.body,roof.body);

	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(0);
	chain1.display(); 
	chain2.display(); 
	chain3.display(); 
	chain4.display(); 
  drawSprites();
 
}



