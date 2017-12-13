var input, button, greeting,word;

function setup() {
  createCanvas(1000, 400);
//has all the different inputs for the user
    //input is the text
    input = createInput();
    input.position(0, 65);
    //x position input
    input1 = createInput();
    input1.position(135, 65);
    //y position input
    input2 = createInput();
    input2.position(270, 65);
// this is the button the user will use to submit the inputs
    button2 = createButton('submit');
    button2.position(input2.x + input2.width, 65);
    button2.mousePressed(textDisplayed);

    // all the greetings for the user, so that they know which input is which
    word = createElement('h3', 'what text');
    word.position(0,20);
    xPosition = createElement('h3','what x position');
    xPosition.position(135,20);
    yPosition = createElement('h3','what y position');
    yPosition.position(275,20);    
    
}
//This function will display the text the user picked
function textDisplayed() {
  var t = input.value();
    //Position of new word based on user inputs
word.position(input1.value(),input2.value());
  word.html(t);
//hides all the inputs, buttons and greetings once it is pressed.
    input.hide();
    input1.hide();
    input2.hide();
    button2.hide();
    xPosition.hide();
    yPosition.hide();
}
