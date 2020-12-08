class Chain{
constructor(bodyA,bodyB){
    var chain_options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.04,
        length : 10
    }
    this.chain = Constraint.create(chain_options);
    World.add(world,this.chain);
}

display(){

    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

}
}