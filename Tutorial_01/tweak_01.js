//Tweaks on Tutorial 01
//@Filippo Guida

function setup() {
  createCanvas(400, 400);
}

function draw() {
	clear()
	background('black')
	stroke('white')
	strokeWeight(random(0, 100))
	
	line(
		random(0, 400),
	  200,
	  random(0, 400),
	  200
	)
}
