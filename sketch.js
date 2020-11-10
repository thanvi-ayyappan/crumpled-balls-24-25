
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var dustbin1,dustbin2,dustbin3;
var dustbinImg;
var paper1;
var paperImg;

function preload(){
	paperImg=loadImage("paper.png");
	dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(width/2,680,800,10);

	dustbin1=new Dustbin(600,635,250,20);
    dustbin2=new Dustbin(715,595,20,100);
	dustbin3=new Dustbin(480,595,20,100);
	//dustbin1.addImage("dustbingreen.png",dustbinImg);
	
	paper1=new Paper(100,635,20);
	//paper1.addImage("paper.png",paperImg);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow"); 
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();


}

function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55});
	}
}
//I tried different things but the ball is rolling away


