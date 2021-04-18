class Paper
{

    constructor(x,y,r)
    {
        var parameters={
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r
       
       this.image = loadImage("paperss.png")
      // this.image.scale = 0.5
        this.body = Bodies.circle(this.x,this.y,this.r/2,parameters);
        World.add(world, this.body);
    }

    display()
    {
        var paperPos = this.body.position;

        push()
			translate(paperPos.x, paperPos.y);
            //rectMode(CENTER);
            strokeWeight(0);
            //rotate(this.body.angle);
            imageMode(CENTER);
			ellipseMode(RADIUS)
			//fill("white")
            ellipse(0,0,this.r, this.r);
		pop()
    }


}