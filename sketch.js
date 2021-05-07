

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("space image.png")
  arrowImage = loadImage("laser.png");
  bowImage = loadImage("Spaceship.png");
  red_balloonImage = loadImage("a.png");
  green_balloonImage = loadImage("a.png");
  pink_balloonImage = loadImage("a.png");
  blue_balloonImage = loadImage("a.png");
  
}



function setup() {
  canva = createCanvas(displayWidth, displayHeight);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = displayWidth,displayHeight - 500;
  
  // creating bow to shoot arrow
  bow = createSprite(1300,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = .25;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
   if(frameCount %30 === 0){
  if (keyDown("f")) {
    createArrow();
  } 
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 50 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

  
  drawSprites();
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 500;
  red.scale = 0.5;
  red.debug = false;
  redB.add(red);

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 500;
  blue.scale = 0.5;
  blue.debug = false;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 500;
  green.scale = 0.5;
  green.debug = false;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 500;
  pink.scale = .5;
  pink.debug = false;
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.x=bow.x;
  arrow.velocityX = -6;
  arrow.lifetime = 500;
  arrow.scale = 0.10;
  arrow.debug = false; 
  arrowGroup.add(arrow); 
}
