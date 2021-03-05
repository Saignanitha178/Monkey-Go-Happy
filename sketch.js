
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
  
monkey = createSprite(80,315,10,10);
monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  background("white");
  survivalTime = Math.ceil(frameCount/frameRate());
   text("Survival Time :" + survivalTime,100,100);
  if(ground.x < 0){
    ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  bananaGroup = createGroup();
  food();
  obstacles();
  drawSprites(); 
}

function food(){
  if(frameCount % 80 === 0){
  banana = createSprite(400,120,10,10);
  banana.scale = 0.1
  banana.addImage(bananaImage);
  banana.y = Math.round(random(120,200));
  banana.velocityX = -4;
  banana.setLifetme = 45;
  bananaGroup.add(banana);
  }
}

 function obstacles(){
   if(frameCount % 300 === 0){
     obstacle = createSprite(400,315,10,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.2
     obstacle.velocityX = -4;
     obstacle.setLifetime = 50
     
   }
 }


