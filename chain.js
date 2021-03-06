class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.pointA.position;
        var pointB = this.rope.pointB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        //rope1 = new rope(ball1.body, roof.body, -bobDiamater*2,0);
        //rope2 = new rope(ball2.body, roof.body, -bobDiamater*2,0);
        //rope3 = new rope(ball3.body, roof.body, -bobDiamater*2,0);
        //rope4 = new rope(ball4.body, roof.body, -bobDiamater*2,0);
    }
    
}