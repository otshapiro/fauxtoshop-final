var img;
var input1, input2, input3,button, title;
// loads the image first
// going to need to change when combined with other code. 
function  preload() {
     img = loadImage("download.jpg");
}
// create the canvas, and puts the image first
function setup(){
  createCanvas(600,600);
    image(img,0,0);
    // This allows all the user to add an input
    input1 = createInput();
    input1.position(100, 300);
    //This is the physical button   
    button = createButton('submit');
    button.position(input1.x + input1.width, 300)
    button.mousePressed(change);
    //This is the prompt
    title1 = createElement('h2', 'what red');
    title1.position(100, 250);
    textAlign(CENTER);
    textSize(50);
    // This allows all the user to add an input
    input2 = createInput();
    input2.position(200, 300);
    //This is the physical button   
    button = createButton('submit');
    button.position(input2.x + input2.width, 300)
    button.mousePressed(change);
    //This is the prompt
    title2 = createElement('h2', '  blue');
    title2.position(200, 250);
    textAlign(CENTER);
    textSize(50);
    // This allows all the user to add an input
    input3 = createInput();
    input3.position(300, 300);
    //This is the physical button   
    button = createButton('submit');
    button.position(input3.x + input3.width, 300)
    button.mousePressed(change);
    //This is the prompt
    title3 = createElement('h2', ' green filter?');
    title3.position(300, 250);
    textAlign(CENTER);
    textSize(50);
}
//Get each pixel and change by amount requested by user.
function change() {
    noStroke();
    img.loadPixels();
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var currentPixel = img.get(x,y);
           //This is for the r,g,b, values and if they go over or under 0 or 255
            currentPixel[0] = currentPixel[0]+ input1.value();
            currentPixel[1] = currentPixel[1]+ input2.value();
            currentPixel[2] = currentPixel[2]+ input3.value();
            
               if (currentPixel[0]>255){
                currentPixel[0] = currentPixel[1] - input1.value();
            }
               if (currentPixel[0]<0){
                currentPixel[0] = currentPixel[1] + input1.value();
            }
               if (currentPixel[1]>255){
                currentPixel[1] = currentPixel[1] - input2.value();
            }
               if (currentPixel[1]<0){
                currentPixel[1] = currentPixel[1] + input2.value();
            }
               if (currentPixel[2]>255){
                currentPixel[2] = currentPixel[1] - input3.value();
            }
               if (currentPixel[2]<0){
                currentPixel[2] = currentPixel[1] + input3.value();
            }
            
        

            
             fill(currentPixel[0],currentPixel[1],currentPixel[2])
             rect(x,y,1,1);
        }
    }
   updatePixels(); 
    
}



