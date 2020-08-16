class Drops {

    constructor(x, y, options){
        options = {
            friction: 0.1
        }
        this.body = Bodies.circle(x, y, 10);
        World.add(world, this.body);
    }

    update() {
        if(this.body.position.y>800) {
            this.body.position.y = y;
        }
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.radius);
        pop();
    }
}
