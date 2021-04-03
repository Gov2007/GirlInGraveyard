var grave, graveImage, graveGroup;
var Girl, GirlImage, GirlImage2;
var gameState = "PLAY";

function preload(){
  GirlImage=loadImage("Girl-Standing.png");
  graveImage=loadImage("grave.png");
  GirlImage2=loadImage("Girl-Fallen.png");
}
  
function setup(){
createCanvas(600,600);
  
  Girl = createSprite(200, 200, 50, 50);
  Girl.addImage("girl", GirlImage);
  Girl.scale = 0.03;
  
  graveGroup = new Group();
  climberGroup = new Group();
}

function draw() {
  background("black");
  
  if(gameState === "PLAY") { 
    
  if(keyDown("RIGHT_ARROW")) {
    Girl.x = Girl.x + 3;
  }
  
  if(keyDown("LEFT_ARROW")) {
    Girl.x = Girl.x - 3;
  }
  
  Spawngraves();
  
  if(graveGroup.isTouching(Girl)) {
                                                                                  
    gameState = "END";
   }  
  }
    
 
  if(gameState === "END") {
    Girl.addImage(GirlImage2); 
     Girl.velocityY = 0;
        graveGroup.destroyEach();     
 }  
  drawSprites();
}
  
function Spawngraves() {
  if(frameCount%240 === 0) {
    var grave = createSprite(200,-50);
    grave.addImage("grave", graveImage);
    grave.scale = 0.3;
    grave.x = Math.round(random(120, 400));
    grave.velocityY = 5;
    grave.lifetime = 800;
    graveGroup.add(grave);
    Girl.depth = grave.depth; 
    Girl.depth += 1;
  }
}

