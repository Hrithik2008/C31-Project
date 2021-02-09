class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Matter.Bodies.circle(x,y,180,options);
        this.image = loadImage("walking_1.png");
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,500,500);
    }
}