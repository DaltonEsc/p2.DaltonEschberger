let speedUp = false;
let slowDown = false;
let stopCar = false;
let leftTurn = false;
let RightTurn = false;
let firstPress = false;
let currentSpeed = 0;
let tacho = .10;
let leftState = false;
let milesLeft = 250;
let trip = 0;
let blinkHigh = "#ff1414";
let blinkLow = "#FFB8B8";
let blinkerColor = blinkLow;
let blinkerColor2 = blinkLow;
let tachColor = "#52ff52";
let mode = 0;
function setup() {
    img = loadImage("images/abs_engine_airbag_traction.png");
    map = loadImage("images/maps.jpg");
    spotify = loadImage("images/spotify.png");
    phone = loadImage("images/phone.png");
    let width = windowWidth-(windowWidth/6);
    let height = windowHeight-(windowHeight/8)
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-container');
}

function draw() {
    if (frameCount % 15 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        if(tacho >.65){
            tachColor = "#fffa42";
        }
        else{
            tachColor = "#52ff52"
        }
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
                
                tachColor = "#52ff52"
            }
            else{
                tacho += .033;
                milesLeft -=.1;
                trip+= .1;
            }           
            speedUp = true;
            slowDown = false;
            currentSpeed += 1;
        }
        else if (keyCode == 83 && stopCar != true && currentSpeed > 0) {
            if(currentSpeed % 20 == 0){
                tacho = .70;
                tachColor = "#fffa42";
            }
            else{
                tacho -= .033;
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

    fill(color(tachColor));
    rectMode(CORNERS);
    rect(width*.01, height*.1, width*tacho, height*.4, 10);
    
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
    image(img,width*.13,height*.46,width*.14,height*.08);
    line(width*.13, height *.56, width *.27, height*.56);
    fill(1,1,1)
    textSize(30);
    text("Miles left: ", width*.232, height*.62);
    text(ceil(milesLeft),width*.265, height*.62);
    line(width*.13, height *.65, width *.27, height*.65);
    text("MPG: ", width*.2, height*.72);
    text(22,width*.23, height*.72);
    line(width*.13, height *.76, width *.27, height*.76);
    text("Trip: ", width*.2, height*.82);
    text(ceil(trip),width*.23, height*.82);
    line(width*.13, height *.85, width *.27, height*.85);
    circle(width*.145, height*.89, height*.05);
    text("Reset Trip ", width*.27, height*.90);

    //Non-Vehicle Info
    fill(color("#E8E8E8"));
    rect(width - width*.15, height*.7, width - width*.75, height - height*.5, 10);
    line(width*.73, height*.86, width*.97, height*.86);
    triangle(width*.78, height*.90, width*.83, height*.925, width*.83, height*.875);
    triangle(width*.92, height*.90, width*.87, height*.925, width*.87, height*.875);
    switch(mode) {
        case 0:
            image(map,width*.73,height*.46,width*.24,height*.38);
          break;
        case 1:
            image(phone,width*.73,height*.46,width*.24,height*.38);
          break;
        case 2:
            image(spotify,width*.73,height*.46,width*.24,height*.38);
          break;
      }

    //Engine Temp
    fill(color("#E8E8E8"));
    circle(width - width*.93, height*.6, width-width*.90);
    fill(1,1,1);
    textSize(20);
    text("Engine Temp",width - width*.89, height*.49);
    text("0°",width - width*.95, height*.62);
    line(width*.07, height*.66, width*.09, height*.55);
    text("180°",width - width*.885, height*.62);
    circle(width - width*.93, height*.67, 20);

    //Gas Gaguge
    fill(color("#E8E8E8"));
    circle(width - width*.93, height*.8, width-width*.90);
    fill(1,1,1);
    textSize(20);
    text("Gas Level",width - width*.895, height*.93);
    text("0%",width - width*.95, height*.84);
    line(width*.07, height*.86, width*.11, height*.8);
    text("100°",width - width*.885, height*.84);
    circle(width - width*.93, height*.87, 20);

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
function rightPressed(){
    if(mode == 2){
        mode = 0;
    }
    else{
        mode+=1;
    }
}
function leftPressed(){
    console.log(mode);
    if(mode == 0){
        mode = 2;
    }
    else{
        mode-=1;
    }
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
    if(keyCode == 37){
        leftPressed();
    }
    if(keyCode == 39){
        leftPressed();
    }
}