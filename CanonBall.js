class CanonBall {
  constructor(x, y,width,height) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06,
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    //canonball.addImage(canonballImg)
    
  }

  display(){
    rectMode(CENTER);
    fill("black");
   rect (this.x, this.y, this.width, this.height);
   
  }
}