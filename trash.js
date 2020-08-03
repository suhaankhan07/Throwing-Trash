class Trash {
 constructor(x,y,radius) {
 
   var options = {
    'restitution':0.8, 
    'friction':0.4,
    'density':1.2
   } 


  this.body  = Matter.Bodies.circle(x,y,radius,options);
  this.width = 40;
  this.height = 40;
  

   World.add(world,this.body);

 }

 display() {
  
  var pos = this.body.position

   fill(255);  
   stroke("red");
   strokeWeight(5);
   
    ellipse(pos.x,pos.y,this.width,this.height);

 }
}