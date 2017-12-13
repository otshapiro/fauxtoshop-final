//Vann
//3 November 2017
//Jackson Pollock Project
//In this project, you can draw with ar ectangle or a cirlce by clicking. The faster you move your mouse, the larger the stroke. To use a circle, press the 1 key. To use a rectangle, press the 2 key. To use a line, press the 3 key. To change the color to red, press the up key. To change the color to blue, press the right key. To change the color to green, press the down key. To change the color to black, press the left key. To randomize the color, press the space bar. To change the opacity of the colors, use the plus and minus key. 
//One glitch that we have is that ou need to change the color (or set the color to the color that you already have) before you see the change in opacity.

var toolbar1;

function setup() {  
  createCanvas(windowWidth, windowHeight);
  frameRate(200);
	background(220);
	
	//First toolbar that opens up
	toolbar1 = createImg("https://i.imgur.com/WWHYNKn.png");
	toolbar1.position(8,55);
	toolbar1.size(53,405);
	toolbar1.hide();
	toolbar1.mousePressed(toolbar1Hide);
} 

//Setting variables.
var c;

var Circle;
var Rectangle;
var Line;

var Density = 255;

var toolbarTopX = [0,50,100,150,200,250,300,350,400];
var toolbarTopY = [0,0,0,0,0,0,0,0,0];


function draw() {
  //This says that if you press the plus or minus key, the density gets larger or smaller.
  //Density can not be larger than 100%, or 255, nor can it be smaller than 0, or 0%.
  if (keyIsDown(187)) {
    Density = Density +1
  }
  if (keyIsDown(189)) {
    Density = Density -1
  }
  if (Density > 255) {
    Density = 255
  }
  if (Density < 0) {
    Density = 0
  }
  
  //This says that, if you press the left, right, up, or down key, you get a certain color.
  //Also says that if you press the space bar, you get a randomized color.
  if (keyCode == 0) {
    c = color(0,0,0, Density);
  } else if (keyCode == UP_ARROW) {
    c = color(255,0,0, Density);
  } else if (keyCode == DOWN_ARROW) {
    c = color(0,255,0, Density);
  } else if (keyCode == RIGHT_ARROW) {
    c = color(0,0,255, Density);
  } else if (keyCode == LEFT_ARROW) {
    c = color(0,0,0, Density);
  } else if (keyIsDown(32)) {
    c = color(random(0,255),random(0,255),random(0,255), Density); 
  }
  

	
	
	//This says that, when you press the mouse key, you get a shape.
  //This also says that if you press the 1 key or 2 key, you get a circle or a rectangle.
	//To be learned: switch (toolNum);
		//case 1:
  fill(c);
  noStroke();
  if (mouseIsPressed) {
    if (mouseY >= 50 && mouseY <= 100 && mouseX <= 50) {
      Circle = true;
      Rectangle = false;
      Line = false;
    } else if (mouseY >= 100 && mouseY <= 150 && mouseX <= 50) {
      Circle = false;
      Rectangle = true;
      Line = false;
    } else if (mouseY >= 150 && mouseY <= 200 && mouseX <= 50) {
      Circle = false;
      Rectangle = false;
      Line = true;
    }
		
    //This makes the circles and rectangles change size if you move your mouse faster.
    if (Circle == true) {
      ellipse(mouseX, mouseY, abs(mouseX-pmouseX) + abs(mouseY-pmouseY), abs(mouseX-pmouseX) + abs(mouseY-pmouseY));
    }
    if (Rectangle == true) {
      rectMode(RADIUS);
      rect(mouseX, mouseY, abs(mouseX-pmouseX) + abs(mouseY-pmouseY), abs(mouseX-pmouseX) + abs(mouseY-pmouseY));
    }
    if (Line == true) {
      stroke(c)
      strokeWeight((abs(mouseX-pmouseX) + abs(mouseY-pmouseY))/4)
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
	
	//Clear function. Press c to clear the screen.
  if (keyCode == 67) {
		fill(220);
		rectMode(CORNER);
		rect(0,0,windowWidth,windowHeight);
	}
	
	//This makes sure that the user always knows what the value of Density is. 
  noStroke();
  fill(220);
	rectMode(CORNER);
	rect(20, windowHeight-45, 150, 30);
  fill(0,0,0);
  textSize(20);
   
  text("Opacity = " +int(Density/255*100) +"%" , 25, windowHeight-25);
	

	for (var a = 0; a < toolbarTopX.length; a++) {
		//Outline for top toolbar
		stroke(150);
		strokeWeight(5);
		//Inside color of top toolbar
		fill(220);
		rectMode(CORNER);
		rect(toolbarTopX[a],toolbarTopY[a],50,50);
		//Text on the toolbar
		textSize(12);
		text("Shapes",5,25);
	}
}

//When toolbar1Show is true, show the first toolbar
function toolbar1Show() {
	toolbar1.show();
}

//When toolbar1Hide is true, hide the first toolbar
function toolbar1Hide() {
	toolbar1.hide();
}

//When the mouse is clicked in certain areas, open up the toolbar. 
function mouseClicked() {
	if (mouseX <= 50 && mouseX >= 0 && mouseY <= 50 && mouseY >= 0) {
		toolbar1Show();
	}
}


