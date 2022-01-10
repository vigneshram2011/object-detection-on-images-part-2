img = "";
status = "";

function preload() {
    img = loadImage("bedroom_toilet.jpeg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    stroke("#FF0000");
    text("Bathroom", 45, 75);
    noFill();
    rect(30, 60, 450, 350);
}