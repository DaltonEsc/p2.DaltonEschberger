function setup() {
    let width = windowWidth-(windowWidth/6);
    let height = windowHeight-(windowHeight/8)
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-container');
}

function draw() {
    // --------------------------------------------------------
    // Controls section for the car dashboard
    if (keyIsDown(UP_ARROW)) {
        //speed up
    }
    
    if (keyIsDown(DOWN_ARROW)) {
        //speed down
    }
    // --------------------------------------------------------
    

    strokeWeight(4);
    stroke(51);
    //Main dash
    rectMode(CENTER);
    fill(color("#D1D1D1"));

    rect(width/2, height/2, width - 20, height - 20, 10);

    //Tachometer
    fill(color("#FFB8B8"));
    rect(width/2, height*.25, width - width*.05, height - height*.7, 10);
    fill(color("#FFFDB8"));
    rect(width/2, height*.25, width - width*.4, height - height*.7, 10);
    fill(color("#B8FFB8"));
    rect(width-width*.65, height*.25, width - width*.35, height - height*.7, 10);

    //Tachometer
    fill(color("#E8E8E8"));
    rect(width/2, height*.65, width - width*.6, height - height*.6, 10);

    //Vehicle Info
    fill(color("#E8E8E8"));
    rect(width - width*.8, height*.7, width - width*.85, height - height*.5, 10);

    //Non-Vehicle Info
    fill(color("#E8E8E8"));
    rect(width - width*.15, height*.7, width - width*.75, height - height*.5, 10);

    //Engine Temp
    fill(color("#E8E8E8"));
    circle(width - width*.93, height*.6, width-width*.90, 10);

    //Gas Gaguge
    fill(color("#E8E8E8"));
    circle(width - width*.93, height*.8, width-width*.90, 10);

    //Right turn signal
    fill(color("#FFB8B8"));
    triangle(width*.3, height*.90, width*.35, height*.925, width*.35, height*.875);

    //Left turn signal
    fill(color("#FFB8B8"));
    triangle(width*.7, height*.90, width*.65, height*.925, width*.65, height*.875);

}

function windowResized() {
    resizeCanvas(windowWidth-(windowWidth/6), windowHeight-(windowHeight/8));
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        //left turn signal;
    } else if (keyCode === RIGHT_ARROW) {
        //right turn signal;
    }
    
  }