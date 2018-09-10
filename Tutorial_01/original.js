function setup() {
  createCanvas(400, 400);
}

function draw() {
	clear()
	background('white')
	
	x1_rnd = random(0, 400)
	y1_rnd = random(0, 400)
	x2_rnd = random(0, 400)
	y2_rnd = random(0, 400)

	line(x1_rnd, y1_rnd, x2_rnd, y2_rnd)
}
