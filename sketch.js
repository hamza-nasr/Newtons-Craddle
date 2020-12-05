
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
	rope1 = new rope(ball1.point,roof.body);
	rope2 = new rope(ball2.point,roof.body);
	rope3 = new rope(ball3.point,roof.body);
	rope4 = new rope(ball4.point,roof.body);

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



