function setup() {
    let canvas = createCanvas(windowWidth-(windowWidth/6), windowHeight-(windowHeight/10));
    canvas.parent('sketch-container');
}

function draw() {
    background(0, 100, 200);
}

function windowResized() {
    resizeCanvas(windowWidth-(windowWidth/6), windowHeight);
}