class Umbrella {

    constructor(x, y, options) {
        options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10);
        World.add(world, this.body);
        this.image = loadImage("Capture.PNG");
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 200, 400);
        pop();
    }
}