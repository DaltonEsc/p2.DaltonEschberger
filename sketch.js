let speedUp = false;
let slowDown = false;
let stopCar = false;
let leftTurn = false;
let RightTurn = false;
let firstPress = false;
let currentSpeed = 0;
let tacho = .10;
let leftState = false;
let blinkHigh = "#ff1414";
let blinkLow = "#FFB8B8";
let blinkerColor = blinkLow;
let blinkerColor2 = blinkLow;
function setup() {

    let width = windowWidth-(windowWidth/6);
    let height = windowHeight-(windowHeight/8)
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-container');
}

function draw() {
    if (frameCount % 60 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        if (keyCode == 65 && leftTurn) {
            if(leftState){
                blinkerColor = blinkHigh;
                leftState = false;
            }
            else{
                blinkerColor = blinkLow;
                leftState = true;
            }
        }
        else if (keyCode == 68 && RightTurn) {
            if(leftState){
                blinkerColor2 = blinkHigh;
                leftState = false;
            }
            else{
                blinkerColor2 = blinkLow;
                leftState = true;
            }
        }
        if (keyCode == 87 && stopCar != true && currentSpeed <= 100) {
            if(currentSpeed % 20 == 0){
                tacho = .10;
            }
            else{
                tacho += .03;
            }           
            speedUp = true;
            slowDown = false;
            currentSpeed += 1;
        }
        else if (keyCode == 83 && stopCar != true && currentSpeed > 0) {
            if(currentSpeed % 20 == 0){
                tacho = .70;
            }
            else{
                tacho -= .03;
            }  
            slowDown = true;
            speedUp = false;
            currentSpeed -= 1
        }
    }

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
    rect(width/2, height*.25, width - width*.36, height - height*.7, 10);
    fill(color("#B8FFB8"));
    rect(width-width*.665, height*.25, width - width*.35, height - height*.7, 10);
    fill(color(1,1,1));
    textAlign(LEFT);
    textSize(35);
    text("1000", width*.13, height*.08);
    line(width*.16, height*.1, width*.16, height*.4);
    text("2000", width*.29, height*.08);
    line(width*.32, height*.1, width*.32, height*.4);
    text("3000", width*.47, height*.08);
    line(width*.5, height*.1, width/2, height*.4);
    text("4000", width*.63, height*.08);
    line(width*.66, height*.1, width*.66, height*.4);
    text("5000", width*.79, height*.08);
    line(width*.82, height*.1, width*.82, height*.4);

    fill(color("#d3d3d3"));
    rectMode(CORNERS);
    rect(width*.01, height*.1, width*tacho, height*.4, 10);
    //rect(width*.1, height*.1, width*tacho, heigh*.1);
    
    rectMode(CENTER);
    //Speedometer
    fill(color("#E8E8E8"));
    rect(width/2, height*.65, width - width*.6, height - height*.6, 10);
    fill(1,1,1);
    textAlign(RIGHT);
    textSize(150);
    text(currentSpeed, width*.55, height*.75);
    textSize(75);
    text("MPH",  width*.7, height*.75);

    //Vehicle Info
    fill(color("#E8E8E8"));
    rect(width - width*.8, height*.7, width - width*.85, height - height*.5, 10);

    //Non-Vehicle Info
    fill(color("#E8E8E8"));
    rect(width - width*.15, height*.7, width - width*.75, height - height*.5, 10);

    //Engine Temp
    fill(color("#E8E8E8"));
    circle(width - width*.93, height*.6, width-width*.90);

    //Gas Gaguge
    fill(color("#E8E8E8"));
    circle(width - width*.93, height*.8, width-width*.90);

    //left turn signal
    fill(color(blinkerColor));
    triangle(width*.3, height*.90, width*.35, height*.925, width*.35, height*.875);

    //right turn signal
    fill(color(blinkerColor2));
    triangle(width*.7, height*.90, width*.65, height*.925, width*.65, height*.875);

}

function windowResized() {
    resizeCanvas(windowWidth-(windowWidth/6), windowHeight-(windowHeight/8));
}

function keyPressed() {
    if (keyCode == 87) {
        stopCar = false
    }
    else if(keyCode == 83 && firstPress){
        stopCar = false;
        firstPress = false;
    }
    else if (keyCode == 83 && speedUp == true) {
        stopCar = true;
        firstPress = true;
    }
    if (keyCode == 65){
        leftTurn = !leftTurn;
    }
    if (keyCode == 68){
        RightTurn = !RightTurn;
    }
}