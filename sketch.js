const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies;   
                                                                                                                                                  
var snow; 
var bg;
var ch; 
var snows=[]
var maxDrops=100;

function preload(){
  bg=loadImage("snow1.jpg")
  chImg=loadImage("man.png")

}

function setup() {

  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world;



  ch=createSprite(600, 250, 50, 50);
  ch.addImage("chImg",chImg)
  ch.scale=0.7

  ground=createSprite(400,350,1000,10);
  ground.visible=false;                      


} 

function draw() {

  Engine.update(engine);
  background(bg);  


  ch.velocityX=0
  ch.velocityY=0

  ch.velocityY = ch.velocityY + 2

 if(keyDown("up")){
   ch.velocityY=-2;
  }

  if(keyDown("left")){
  ch.velocityX=-2
  }
  
  if(keyDown("right")){
    ch.velocityX=2
  }

  snows.push(new Snow(random(0,800),0,10));


    for(var i=0; i<snows.length; i++){
    snows[i].display();
    }

 ch.collide(ground)

 ch.display();

 drawSprites();

}