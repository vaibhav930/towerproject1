class Box{
  constructor(x,y,width,height){
  var options= {
  restituition : 0.8,
  density : 0.03,
  friction : 3

      
  }
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width
  this.height=height
  
  World.add(world, this.body)
  
  }
  display(){
  push ()
  translate (this.body.position.x,this.body.position.y) 
  rotate (this.body.angle)  
  rectMode(CENTER)
  fill ("blue")
  rect(0,0,this.width,this.height)
  pop ()
  
  }}