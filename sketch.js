var oceano = createSprite (200,200,40,10);
var titanic = createSprite (200,200,40,10);
function preload(){
oceano = loadImage("sea.png");
titanic = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
oceano.velocityX=4;
}

function setup(){
  createCanvas(400,400);
if (oceano.x< 0){;
  oceano.x = oceano.width/2;
}
}

function draw() {
  background("blue");
    drawSprites();

 
}
