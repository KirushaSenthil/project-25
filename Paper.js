class Paper
{
    constructor(x,y,r)
  


{
   var options =
     { 
         density:3.4,
         isStatic:false
         
         } 


this.body=Bodies.circle(x,y,r,options)
this.image=loadImage("paper.png")
this.x=x
this.y=y
this.r=r
World.add(world,this.body)
}

display()
{
    var paperpos=this.body.position;
 var angle=this.body.angle
    push ()
    translate (paperpos.x,paperpos.y)
 //  rotate (angle)
    strokeWeight(3)
    fill (255,0,255)
   // ellipseMode(RADIUS)
  //  ellipse(0,0,this.r,this.r)
    imageMode (CENTER)
  image(this.image,0,0,this.r*3,this.r*3)
    
    pop ();

}
}