class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.paperImg=loadImage("paper.png");
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        //ellipseMode(CENTER);
        push();
        image(this.paperImg,pos.x,pos.y,this.radius*2,this.radius*2);
        //fill("white");
        //ellipse(pos.x,pos.y,20,20);
        pop();
    }
}
