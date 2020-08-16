const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var batman;
var maxDrops = 100;
var thunder;

function preload(){

}

function setup(){

    createCanvas(400, 800);

    batman = new Umbrella(200, 600);  

    for(var i = 0; i<maxDrops; i++) {
        drops.push(new Drops(random(0, 400), 0));
    }

    thunder = createSprite(200, 400, 400, 800);
    thunder.shapeColor("white");
    thunder.visible = false;

}

function draw(){

    background("black");

    for(var j = 0; j < drops.radius; j++) {
        drops.display[j];
    }

    for(var k = 0; k < drops.radius; k++) {
        drops.update[k];
    }

    if(frameCount%100) {
        thunder.visible = true;
    } else {
        thunder.visible = false;
    }

    batman.display();

    drawSprites();

}   

