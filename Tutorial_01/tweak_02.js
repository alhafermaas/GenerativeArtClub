//Tweaks on Tutorial 01
//@Filippo Guida

function setup() {
  createCanvas(400, 400);
}

function draw() {
	clear()
	background(random(50), random(50), random(50))
	stroke(random(255), random(255), random(255))
	strokeWeight(random(0, 100))
	
	line(
		random(0, 400),
	  200,
	  random(0, 400),
	  200
	)
	
	line(
		300,
		random(0, 400),
		200,
	  random(0, 400)
	)
}
