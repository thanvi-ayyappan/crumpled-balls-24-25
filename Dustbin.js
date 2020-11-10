class Dustbin{
    constructor(x,y,width,height){
        var opt={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.dustbinImg=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x,y,width,height,opt);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        //rectMode(CENTER);
        fill("red");
        //rect(pos.x,pos.y,this.width,this.height);
        push();
        image(this.dustbinImg,pos.x,pos.y,this.width,this.height);
        pop();
    }
}

