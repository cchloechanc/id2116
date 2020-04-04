let start;
let float; 
let pop;
let hans;
let current_image = 0;

let image_filelist = ['images/start.jpg','images/pop.gif']
let imagelist = []

function preload() {
  for(let filename of image_filelist){
    imagelist.push(loadImage(filename));
 }
}

function setup() {
  createCanvas(400, 400);
  
  // start = loadImage("images/start.jpg");
  // float = loadImage("images/float.jpg");
  // pop = loadImage("images/pop.jpg");
  // hans = loadImage("images/hans.jpg");
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(imagelist[current_image],width/2, height/2, 300, 300);
}

function mousePressed(){
  current_image += 1;
}
