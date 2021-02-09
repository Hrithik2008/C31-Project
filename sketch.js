const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var array=[] , drops=100,engine,world,umbrella , thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(250,500);
    for(var i = 0; i < drops; i++){
        array[i] = new Drop(random(0,width),random(0,height));
    }
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i = 0; i < drops; i++){
        array[i].update();
        array[i].display();
    }
    umbrella.display();
    thunder();
    drawSprites();
}   

function thunder() {
    var rand = Math.round(random(1,4));
    var v = 255;
     v = v - 10;
    if(frameCount%50 === 0){
        var thunder = createSprite(random(10,460),random(10,30),10,10);
        thunder.life=10;
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            case 4 : thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale=random(0.3,0.6);
    }
    console.log(frameCount%80);
}
