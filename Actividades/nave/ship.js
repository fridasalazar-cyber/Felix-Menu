function Navecita (radius) {
	if (radius === undefined){radius = 150;}
  this.x = 0;
  this.y = 0;
  this.radius = radius;
  this.width = 25;
  this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
}

Navecita.prototype.draw = function (context) {
 var nave = new Image();
	nave.src = "nave.png";
	var naveflame = new Image;
	naveflame.src = "navef.png";
	
	context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  
context.drawImage(nave, -nave.width/2, -nave.height/2);

  if (this.showFlame)
  {
   context.drawImage(naveflame, -naveflame.width/2, -naveflame.height/2);

  }
  context.restore();
};
