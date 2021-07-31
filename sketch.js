var sea , seaIng;
var ship , shipIng;

function preload(){
seaIng = loadImage("sea.png");
shipIng = loadAnimation("s1.png","s2.png","s3.png","s4.png");

}

function setup(){
createCanvas(400,400);
background("lightblue");

sea = createSprite(200,200);
sea.addImage(seaIng);
sea.scale = 0.3;
sea.velocityX = -1;

ship = createSprite(70,250)
ship.addAnimation("sailing" ,shipIng);
ship.scale = 0.2;
}

function draw(){
background(0);
    

    if (sea.x < 0){
        sea.x = sea.width/2;
}
drawSprites();
}