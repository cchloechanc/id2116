//variables to store images to show bulb statuses
let bulbOn;
let bulbOff;
let count;
let slider;

count = 128;

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
  //set origin point of the image to the center of image
  //draw bulbOn image at the coordinate x:0 y:0
  //Check whether brightness is 0:off or 1:on.
    //show bulbOn image  
  let count = slider.value();
  tint(255,count);
  image(bulbOn, width / 2, height / 2, 300, 300);   
}

  
//   if (count % 2 == 0) {
//     brightness = 1;
//   }
  
//   else{
//     brightness = 0;
//   }


// function on(){
//   brightness = 1;
//   print("the bulb is on!");
// }

// function off(){
//   brightness = 0;
//   print("the bulb is off!"); 
// }

function mouseReleased() {
  count += 1
}