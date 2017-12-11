var canvas;
var img; 
var count;

function preload() {   
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    frameRate(200);
    background(220);
}

//Setting variables.
var c;

var Circle;
var Rectangle;
var Line;

var Density = 255;

var toolbarX = [0,50,100,150,200,250,300,350,400,0,0,0,0,0,0,0,0];
var toolbarY = [0,0,0,0,0,0,0,0,0,50,100,150,200,250,300,350,400];

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
            console.log("circle1");
            canvas.drop(gotFile); 
            fill(155,290,50);
            rect(200,200,200,200);
            //canvas.mouseClicked(imageReact);

            count = 0;

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

    //Outline for toolbar
    stroke(150);
    strokeWeight(5);
    //Inside color of toolbar
    fill(220);
    for (var i = 0; i < toolbarX.length; i++) {
        //Toolbars
        rectMode(CORNER);
        rect(toolbarX[i],toolbarY[i],50,50);
    }
    //Putting images into the toolbar
    fill(c);
    noStroke();

    ellipse(25,75,25,25);

    rectMode(CENTER);
    rect(25,125,25,25);

    stroke(c);
    line(10,160,40,190);
}


function gotFile(file) 
{
    loadImage(file.data, 
           function(dropFileImage) 
           {
                //resizeCanvas(dropFileImage.width,dropFileImage.height);
                image(dropFileImage,50,50,dropFileImage.width,dropFileImage.height);
                img = dropFileImage;
                count++;
            }
            );
}

function imageReact()
{
    if( img.width > 0 )
    {
        resizeCanvas(200,200);
        image(img,200,200,400,400);
    }
}
