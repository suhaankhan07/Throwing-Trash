class Ground {
    constructor(x,y,width,height) {
     
      var options = {
          isStatic:true
      }
  
     this.body = Bodies.rectangle(x,y,width,height,options);
  
     World.add(world,this.body);
    
    }

     display() {
    var pos = this.body.position
    this.width = width;
    this.height = height;
  
   
    fill(0,255,0);
    stroke("red");
    rect(pos.x,pos.y,this.width,this.height);
  
  }
 
}


