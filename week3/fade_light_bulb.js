//variables to store images to show bulb statuses
let bulbOn;
let bulbOff;
let slider;

function setup() {
  createCanvas(400, 400);

  //load bulb images
  bulbOn = loadImage("image/bulb_on.png")
  bulbOff = loadImage("image/bulb_off.png")
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  
}

function draw() {
  background(220);
  imageMode(CENTER);
  tint(255,255);
  image(bulbOff, width / 2, height / 2, 300, 300);
  
// slider effect
  let value = slider.value();
  tint(255,value);
  image(bulbOn, width / 2, height / 2, 300, 300);   
}
