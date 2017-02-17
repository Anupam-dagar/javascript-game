var canvasWidth = 800;
var canvasHeight = 500;

var egg = {
	x: 385,
	y: 20,
	yVel: 0,
	width: 30,
	color: "#fff",
	draw: function() {
		fill(this.color);
		ellipse(this.x, this.y, this.width);
	},
	update: function() {
		this.y += this.yVel;
		if (this.y + this.width >= canvasHeight) {
			this.y = 20;
			this.yVel = 0;
		}
	}
};

var bucket = {
	x: 20,
	y: 450,
	xVel: 5,
	direction: 0,
	width: 90,
	height: 35,
	color: "#fff",
	draw: function() {
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
	},
	update: function() {
		this.x += this.xVel;
		if (this.x + this.width > canvasWidth) {
			this.xVel = -4;
		} else if (this.x < 0) {
			this.xVel = 4;
		}
	}
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	background(45);
}

function collision(a, b) {
	return a.y + a.width > b.y && a.y < b.y + b.height && a.x + a.width > b.x && a.x < b.x + b.width;
}
function draw() {
	clear();
	background(45);
	egg.draw();
	egg.update();
	bucket.draw();
	bucket.update();
	if (keyIsDown(32)) {
		egg.yVel = 4;
	}
	if (collision(egg, bucket)) {
		console.log("successfully crashed!");
		egg.y = 20;
		egg.yVel = 0;
	}
}