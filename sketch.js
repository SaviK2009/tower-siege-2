const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() 
{
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    background("white")
    world = engine.world;
    
    ground=new Ground(600,400,30,1200)

    
}

function draw(){
    background("white");
    Engine.update(engine);
    
    ground.display();



    
    
    
    
    
   
     
}

function mouseDragged()
{
    Matter.Body.setPosition(hex.body, {x:mouseX, y:mouseY} )    
}

function mouseReleased()
{
    sling.fly();
}
