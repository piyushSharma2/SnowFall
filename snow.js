class Snow{

    constructor(x,y,radius) {

    var Options= {
        
        restitution:5,
        friction:0.1,
        density:0.8,
}

        this.body=Bodies.circle(x,y,radius,Options)
        this.radius=radius;
        World.add(world,this.body)

}

display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        fill("white")
        strokeWeight(2)
        stroke("lightblue")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()
}

}