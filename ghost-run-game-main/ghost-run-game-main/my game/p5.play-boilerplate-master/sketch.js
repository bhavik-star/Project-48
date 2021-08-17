var dakrai,gangar,micarl,misdreavus,priest,background1;
var score=0;

function preload() {
   dakraiImage=loadImage("image/dakrai.png");
   gangarImage=loadImage("image/gangar.png");
   micarlImage=loadImage("image/micarl.png");
   misdreavusImage=loadImage("image/misdreavus.png");
   priestImage=loadImage("image/priest.png");
   backgroundImage=loadImage("image/background.jpg");

}
function setup() {
createCanvas(1200,800);
background1= createSprite(600, 400, 10, 10);
background1.addImage(backgroundImage);
background1.scale=5;
background1.velocityY=5;

  priest= createSprite(600, 500, 10, 10);
  priest.addImage(priestImage);
  priest.scale=0.3;

  dakraiGroup=new Group()
  gangarGroup=new Group()
  micarlGroup=new Group()
  misdreavusGroup=new Group()
}

function draw() {
  background("black");  
  if(background1.y > 800  ) {
    background1.y = 400;
 }
   priest.x=mouseX
   if(dakraiGroup.isTouching(priest)) {
     dakraiGroup.destroyEach()
     score=score+10;
   }

   priest.x=mouseX
   if(gangarGroup.isTouching(priest)) {
     gangarGroup.destroyEach()
     score=score+10;
   }

   priest.x=mouseX
   if(micarlGroup.isTouching(priest)) {
     micarlGroup.destroyEach()
     score=score+10;
   }

   priest.x=mouseX
   if(misdreavusGroup.isTouching(priest)) {
     misdreavusGroup.destroyEach()
     score=score+10;
   }
   spawnDakrai();
   spawnGangar();
   spawnMicarl();
   spawnmisdreavus();
   drawSprites();

  fill("red");
  textSize(35)
  text("Score: "+ score,800,100)
 
  if(score >= 100){
    background("green");
    text("You win!",600,400)
  }
}

function spawnDakrai(){
  if(frameCount%200===0) {
    dakrai= createSprite(800, -50, 10, 10);
  dakrai.addImage(dakraiImage);
  dakrai.scale=0.4;
  dakrai.velocityY=1.8;
  dakrai.x= Math.round(random(100,900))
  dakraiGroup.add(dakrai);
  }
}

function spawnGangar(){
  if(frameCount%200===0) {
    gangar= createSprite(800, -50, 10, 10);
  gangar.addImage(gangarImage);
  gangar.scale=0.8;
  gangar.velocityY=1.8;
  gangar.x= Math.round(random(200,700))
  gangarGroup.add(gangar);
  }
}

function spawnMicarl(){
  if(frameCount%200===0) {
    micarl= createSprite(800, -50, 10, 10);
  micarl.addImage(micarlImage);
  micarl.scale=0.8;
  micarl.velocityY=1.8;
  micarl.x= Math.round(random(200,700))
  micarlGroup.add(micarl);
  }
}

function spawnmisdreavus(){
  if(frameCount%200===0) {
    misdreavus= createSprite(800, -50, 10, 10);
  misdreavus.addImage(misdreavusImage)
  misdreavus.scale=0.8;
  misdreavus.velocityY=1.8;
  misdreavus.x= Math.round(random(200,700))
  misdreavusGroup.add(misdreavus);
  }
}