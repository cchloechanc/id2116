//variables to store images to show bulb statuses
let bulbOn;
let bulbOff;
let count;
let slider;
count = 0;

function setup() {
  createCanvas(400, 400);

//load bulb images
  bulbOn = loadImage("image/bulb_on.png")
  bulbOff = loadImage("image/bulb_off.png")
 
}

function draw() {
  background(220);
  imageMode(CENTER);
  
  if (brightness == 1){
  image(bulbOff, width / 2, height / 2, 300, 300);
  }
  else{
  image(bulbOn, width / 2, height / 2, 300, 300);   
  }
  
//toggle
  if (count % 2 == 0) {
    brightness = 1;
  }
  
  else{
    brightness = 0;
  }
}

function mouseReleased() {
  count += 1
}
