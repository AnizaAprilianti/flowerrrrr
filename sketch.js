
var bgcolor = (100, 100, 100);
var k = 4;
function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(51);
  translate(85,75);

  beginShape();
  stroke(255);
  strokeWeight(2);
  for (var a= 0; a < TWO_PI; a+= 0.02) {
    var r = 55 * cos(k*a);
    var x = r * cos(a);
    var y = r * sin(a);
    fill(235, 194, 204, 240);

    vertex(x,y);
    line(125,-100,125,300);
    line(2, 50, 2, 150);
    strokeWeight(3);
    
  }
    endShape(CLOSE);

    function ground() {
      //noStroke();
      fill(170, 150, 146, 240);
      rect(0,180, 600, 530);
    }

  
  //drawFlower();

  //flower2
  for (var r21 = 0; r21 < 5; r21++) {
    stroke(255);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(250, 50, 250, 400 + frameCount / 5);
    }
    if (frameCount > 600) {
      line(250, 50, 250, 400);
    }

    function ground() {
      fill(170, 150, 146, 240);
      rect(0,180, 600, 530);
    }
    noStroke();
  }
  
  push();
  fill(235, 194, 204, 240);
  translate(250, 5);
   stroke(255);
  strokeWeight(2);

  for (var a= 0; a < TWO_PI; a+= 0.02) {
    if (frameCount <= 700) {
      ellipse(0, 0 + frameCount / 20, 0 + frameCount / 40, 10 + frameCount / 20);
    }
    if (frameCount > 700) {
      ellipse(0, 30, 15, 40)
    }
    rotate(PI / 5);
  }
  pop();
}