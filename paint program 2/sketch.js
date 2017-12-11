var canvas;
var img; 
var count;

function preload() {   
}


function setup() {
canvas =  createCanvas(200, 200);
canvas.drop(gotFile);  
canvas.mouseClicked(imageReact);
    
background( 50,50,200);

    count = 0;
    
}

function gotFile(file) 
{
 loadImage(file.data, 
           function(dropFileImage) 
           {
                resizeCanvas(dropFileImage.width,dropFileImage.height);
                image(dropFileImage,0,0,dropFileImage.width,dropFileImage.height);
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
    image(img,0,0,200,200);
        }
}