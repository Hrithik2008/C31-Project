class Drop{
    constructor(x,y){
        var options = {
            friction : 0,
            isStatic : false
        }
        this.body = Matter.Bodies.circle(x,y,2.5,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    update(){
        var pos = this.body.position;
        var rand = random(0,width);
        if(pos.y > height){
            Matter.Body.setPosition(this.body,{x:rand,y:0});
        }
    }
    display(){
        var pos = this.body.position;
        fill(0,0,255);
        noStroke();
        ellipse(pos.x,pos.y,5);
    }
}