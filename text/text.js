var input, button, greeting,word;

function setup() {

  // create canvas
  createCanvas(1000, 400);

    input = createInput();
    input.position(0, 65);
    input1 = createInput();
    input1.position(135, 65);
    input2 = createInput();
    input2.position(270, 65);

    button2 = createButton('submit');
    button2.position(input2.x + input2.width, 65);
    button2.mousePressed(change);


    word = createElement('h3', 'what text');
    word.position(0,20);
    xPosition = createElement('h3','what x position');
    xPosition.position(135,20);
    yPosition = createElement('h3','what y position');
    yPosition.position(275,20);
  

  textAlign(CENTER);
  textSize(40);
    
    
}
function change() {
  var t = input.value();
word.position(input1.value(),input2.value());
  word.html(t);

    input.hide();
    input1.hide();
    input2.hide();
    button2.hide();
    xPosition.hide();
    yPosition.hide();
}
