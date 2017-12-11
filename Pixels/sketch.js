var img;
var input, button, title;
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
    input = createInput();
    input.position(200, 300);
    //This is the physical button   
    button = createButton('submit');
    button.position(input.x + input.width, 300)
    button.mousePressed(change);
    //This is the prompt
    title = createElement('h2', 'what filter?');
    title.position(200, 300);
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
            currentPixel[0] = currentPixel[0]+ input.value();
            currentPixel[1] = currentPixel[1]+ input.value();
            currentPixel[2] = currentPixel[2]+ input.value();
            
               if (currentPixel[0]>255){
                currentPixel[0] = currentPixel[1] - input.value();
            }
               if (currentPixel[0]<0){
                currentPixel[0] = currentPixel[1] + input.value();
            }
               if (currentPixel[1]>255){
                currentPixel[1] = currentPixel[1] - input.value();
            }
               if (currentPixel[1]<0){
                currentPixel[1] = currentPixel[1] + input.value();
            }
               if (currentPixel[2]>255){
                currentPixel[2] = currentPixel[1] - input.value();
            }
               if (currentPixel[2]<0){
                currentPixel[2] = currentPixel[1] + input.value();
            }
            
        

            
             fill(currentPixel[0],currentPixel[1],currentPixel[2])
             rect(x,y,1,1);
        }
    }
   updatePixels(); 
    
}



