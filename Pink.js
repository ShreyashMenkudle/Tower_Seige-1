class Pink {
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  }
  
  display() {
  var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill(255);
        fill("pink");
        rect(0, 0, this.width, this.height);
        rotate(angle);
        pop();
   
  }
};
