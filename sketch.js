var apple1;
var wolf;
var littlered;
var x;
var y;

function setup() {
    createCanvas(windowWidth, windowHeight);

    noCursor();
    
	apple1 = loadImage("images/apple1.png");
    wolf = loadImage("images/wolf.png");
    littlered = loadImage("images/littlered.png");
	

    x = windowWidth / 3 - wolf.width / 3;
    y = windowHeight / 5 - wolf.height / 5;
	
	apple1 = new Jitter();
}

function draw() {
    background(204, 239, 255);
    image(wolf, x, y);
	image(littlered, mouseX, mouseY);
	

    if (mouseX >= x && mouseX <= x + wolf.width &&
        mouseY >= y && mouseY <= y + wolf.height) {
        x += random(-12, 12);
        y += random(-3, 3);
    }
	
	 apple1.move();
     apple1.display();
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(20, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

//http://coursescript.com/notes/interactivecomputing/images/
//http://p5js.org/examples/examples/Objects_Multiple_Objects.php
//http://p5js.org/examples/examples/Interaction_Tickle.php