
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,40);
	dustbinObj=new Dustbin(1200,650);
	paperObj = new Paper(100,45,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
 

  groundObject.display();
  dustbinObj.display();
 paperObj.display();

keypressed();
 drawSprites();
 
 
}
function keypressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 15,y: -15});
	}
}

