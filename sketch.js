const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var backgroundIMG;
var returnButtonIMG;
var lockLevelIMG;
var headingIMG;
var buttonIMG;
var levelButtonIMG;

var Background;
var returnButton;
var introButton;
var playButton;
var creditButton;
var level1,level2,level3,level4,level5;

var gamestate="home"; 


function preload(){
  backgroundIMG=loadImage("images/backgroundImage.jpg");
  returnButtonIMG=loadImage("images/returnButtonImage.png");
  lockLevelIMG=loadImage("images/lockImage.png");
  headingIMG=loadImage("images/headingImage.png");
  buttonIMG=loadImage("images/buttonImage.png");
  levelButtonIMG=loadImage("images/levelButtonImage.png");
  spikeIMG=loadImage("images/spikeImage.png");

  KnightWalkingANM=loadAnimation( "a/6.png","a/5.png","a/4.png","a/3.png","a/2.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create();
  world=engine.world;   
 
  Background=createSprite(width/2,height/2,width,height);
  Background.addImage(backgroundIMG);
  Background.scale=1.8;

  returnButton=createSprite(70,70,50,50);
  returnButton.addImage(returnButtonIMG);
  returnButton.scale=0.3;
  
  introButton=createSprite(width/2+75,height/2+250,200,100);
  introButton.addImage(buttonIMG);
  introButton.scale=1.3;
  introButton.setCollider("rectangle",-75,-15,230,110);

  playButton=createSprite(width/2+75,height/2+50,200,100);
  playButton.addImage(buttonIMG);
  playButton.scale=1.3;
  playButton.setCollider("rectangle",-75,-15,230,110);

  creditButton=createSprite(displayWidth-100,displayHeight-100,100,100);
  creditButton.addImage(buttonIMG);
  creditButton.scale=0.7
  creditButton.setCollider("rectangle",-75,-15,230,110);

  level1=createSprite(width/4-150,height/2-height/8,200,100);
  level1.setCollider("rectangle",-5,-5,125,125);

  level2=createSprite(width/3,height/2+height/8-10,200,100);
  level3=createSprite(width/2,height/2-height/8,200,100);
  level4=createSprite(width/3+width/3,height/2+height/8-10,200,100);
  level5=createSprite(width/4+width/2+150,height/2-height/8,200,100);
   
  returnForLevel=createSprite(70,70,50,50);
  returnForLevel.addImage(returnButtonIMG);
  returnForLevel.scale=0.3;

  spike=createSprite(800,700,100,100);
  spike.addImage(spikeIMG);
  spike.scale=0.2


  knight = new Knight(100,700,225,150);

  ground1 = new Ground(width/2,1000,width,500);
  ground2 = new Ground(width/2,100,width,500);


}

function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
  
  spike.visible=0;

  gamestates();
}

function gamestates(){
  if(gamestate==="home"){
    Background.visible=1;
    introButton.visible=1;
   
    creditButton.visible=1;
    playButton.visible=1;
     
    returnForLevel.visible=0;
    returnButton.visible=0;
    level1.visible=0;
    level2.visible=0;
    level3.visible=0;
    level4.visible=0;
    level5.visible=0;

    if(mousePressedOver(playButton)){
      gamestate="level"
    } 
    if(mousePressedOver(introButton)){
      gamestate="storyAndControls"
    }
    if(mousePressedOver(creditButton)){
      gamestate="credits"
    }
  
    imageMode(CENTER);
    image(headingIMG,width/2,height/2-250,500,230)

    textFont("Ariel")
    fill("black")
    textSize(100);
    text("Play",playButton.x-185,playButton.y+10);
    textSize(50);
    text("Story and",introButton.x-190,introButton.y-30);                            
    text("Controls",introButton.x-180,introButton.y+30);

    text("Credits",1725,855)
}
if(gamestate==="storyAndControls"){
  Background.visible=1;
  returnButton.visible=1;

  returnForLevel.visible=0;
  creditButton.visible=0;
  playButton.visible=0;  
  level1.visible=0;
  level2.visible=0;
  level3.visible=0;
  level4.visible=0;
  level5.visible=0;
  introButton.visible=0;

  if(mousePressedOver(returnButton)){
    gamestate="home"
  } 

  fill("white");
  rectMode(CENTER);
  rect(width/2,height/2,width-300,height-100);
 
  textFont("Ariel")
  fill("black");
  textSize(35);
  text("You are a knight who was gifted the ability to make big jumps by your god because of the good works you had",180,120);
  text("done throughout your life. One day,you were going through the forest to go back home after completing your",190,170);
  text("quest. But suddenly, a witch appears in front of you, captures you in a magic bubble, and takes you to her tower",175,220);
  text("and locks you on the top floor to trap you while she was preparing the magic to extract your special ability. She",170,270)
  text("told you that after she takes your ability, she will kill you because the quest which your were coming from was to",165,320);
  text("kill her SISTER(she was a bad person btw). You have to exit the tower as soon as possible so that you can stop",180,370)
  text("the witch from taking your special ability and also to stop her from executing her plan to kill you after taking",200,420);
  text("your ability.",870,470)
  textSize(40)
  text("Jump with 'Up Arrow' or 'SpaceBar'",700,575);
  text("Move left with 'Left Arrow'                            Move right with 'Right Arrow'",380,675);
  
  textSize(70);
  text("All The Best!!",width/2-200,800);
}
if(gamestate==="level"){
  Background.visible=1;
  returnButton.visible=1;
  
  level1.visible=1;
  level1.addImage(levelButtonIMG);

  level2.visible=1;
  level2.addImage(lockLevelIMG);
  level2.scale=0.7
  
  level3.visible=1;
  level3.addImage(lockLevelIMG);
  level3.scale=0.7
  
  level4.visible=1;
  level4.addImage(lockLevelIMG);
  level4.scale=0.7
  
  level5.visible=1;
  level5.addImage(lockLevelIMG);
  level5.scale=0.7
  
  returnForLevel.visible=0;
  creditButton.visible=0;
  introButton.visible=0;
  playButton.visible=0;

  if(mousePressedOver(returnButton)){
    gamestate="home"
  } 
  if(mousePressedOver(level1)){
    gamestate="level1"
  }
  
}
if(gamestate==="credits"){

  returnButton.visible=1;
  Background.visible=1;

  returnForLevel.visible=0;
  level1.visible=0;
  level2.visible=0;
  level3.visible=0;
  level4.visible=0;
  level5.visible=0;
  creditButton.visible=0;
  introButton.visible=0;
  playButton.visible=0;

  fill("white");
  rectMode(CENTER);
  rect(width/2,height/2,900,500);

  if(mousePressedOver(returnButton)){
    gamestate="home"
  } 

  textFont("Ariel");
  fill("black");
  textSize(50);
  text("Coding                        Kushagra Agarwal",550,300);
  text("Game idea                   Kushagra Agarwal",550,375);
  text("Teaching the coder      Garima Aggarwal",550,450);
  text("from Whitehat jr.",1000,525);
  text("Guidance                     Garima Aggarwal",550,625);
}

if(gamestate==="level1"){
  knight.display();
  ground1.display();
  ground2.display()
  
  returnForLevel.visible=1;

  Background.visible=0;
  introButton.visible=0;
  creditButton.visible=0;
  returnButton.visible=0;
  playButton.visible=0;
  level1.visible=0;
  level2.visible=0;
  level3.visible=0;
  level4.visible=0;
  level5.visible=0;

  if(keyDown("RIGHT_ARROW")){
    knight.body.position.x=knight.body.position.x+0.5
  }
  if(keyDown("LEFT_ARROW")){
    knight.body.position.x=knight.body.position.x-0.5
  }
  if(mousePressedOver(returnForLevel)||knight.body.position.x>windowWidth-100){
    gamestate="level"
  }
  if(frameCount%Math.round(random(10,30))===0){
    spike.x=random(400,800)
    spike.visible=1
    
  }   


}
}