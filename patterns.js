
// Tissue Patterns: 1/5
var pattern1 = new p5((s) => {
    let cols = 25;
    let rows = 9;
    let maxOff = 2.5;
    let addProb = 0.25;
    let palette = ["#b6cfd6", "#ecdea4", "#627b85"];

    let fillNum = 0;
    let fillColor;

    s.setup = function() {
        s.createCanvas(425, 500);
        s.rectMode(s.CENTER);
        s.noStroke();
        s.generate();
    };

    s.generate = function() {
        let xSize = s.width/cols;
        let ySize = s.height/rows;
        s.background(s.color("#769fa3"));
        for(y = ySize/2; y < s.height; y += ySize) {
            let xOff = s.random(-10, 10);
            for(x = -xSize/2 + xOff; x < s.width+xSize; x+=xSize) {
                if(fillNum != 0) {
                    s.fill(fillColor);
                    fillNum--;
                } else {
                    if(s.random(1) < 0.2) {
                        fillNum = s.round(s.random(1,3));
                        fillColor = palette[s.round(s.random(1,2))];
                    }
                    s.fill(palette[0]);
                }
                
                let w = xSize/[2, 1.5][s.round(s.random(1))];
                let h = ySize/1.2;
                s.beginShape();
                s.vertex(x-w/2 + s.random(-maxOff, maxOff), y-h/2 + s.random(-maxOff, maxOff));
                s.vertex(x+w/2 + s.random(-maxOff, maxOff), y-h/2 + s.random(-maxOff, maxOff));
                if(s.random(1) < addProb)
                    s.vertex(s.random(x, x+w/2), s.random(y-h/2, y+h/2));
                s.vertex(x+w/2 + s.random(-maxOff, maxOff), y+h/2 + s.random(-maxOff, maxOff));
                s.vertex(x-w/2 + s.random(-maxOff, maxOff), y+h/2 + s.random(-maxOff, maxOff));
                if(s.random(1) < addProb)
                    s.vertex(s.random(x-w/2, x), s.random(y-h/2, y+h/2));
                s.endShape();
            }
        }
        fillNum = 0;
    }

}, 'p1');

// Tissue Patterns: 2/5
let pattern2 = new p5((s) => {
    let cols = 5;
    let rows = 25;
    let maxOff = 3;
    let addProb = 0.2;
    let fromColor = "#335455";
    let toColor = "#bce1e3";
    
    s.setup = function() {
        s.createCanvas(425, 500);
        s.rectMode(s.CENTER);
        s.noStroke();
        s.generate();
    }
    
    s.generate = function() {
        s.background(s.color("#f7f4da"));
        let xSize = s.width/cols;
        let ySize = s.height/rows;
        let li = 1/rows;
        let loff = s.random(-li*10, li*2);
        let la = loff;
        for(x = xSize/2; x < s.width; x+=xSize) {
            let yOff = s.random(-ySize, ySize);
            for(y = -ySize+yOff; y < s.height+ySize; y += ySize) {
                s.fill(s.lerpColor(s.color(fromColor), s.color(toColor), la))
                let w = xSize/1.2;
                let h = ySize/1.8;
                s.beginShape();
                s.vertex(x-w/2 + s.random(-maxOff, maxOff), y-h/2 + s.random(-maxOff, maxOff));
                if(s.random(1) < addProb)
                    s.vertex(s.random(x-w/2, x+w/2), s.random(y, y-h/2));
                s.vertex(x+w/2 + s.random(-maxOff, maxOff), y-h/2 + s.random(-maxOff, maxOff));
                s.vertex(x+w/2 + s.random(-maxOff, maxOff), y+h/2 + s.random(-maxOff, maxOff));
                if(s.random(1) < addProb)
                    s.vertex(s.random(x-w/2, x+w/2), s.random(y, y+h/2));
                s.vertex(x-w/2 + s.random(-maxOff, maxOff), y+h/2 + s.random(-maxOff, maxOff));
                s.endShape();
                la += li;
            }
            la = loff;
        }
    }
}, 'p2');

// Tissue Patterns: 3/5
let pattern3 = new p5((s) =>{
    let size = 35;
    let strokeProb = 0.02;
    let maxOffset = 3;
    let fg = "#8763ad";
    let bg = "#b9a7d1";
    let strokeColor = "#f5ea84";
    
    s.setup = function() {
      s.createCanvas(425, 500);
      s.strokeWeight(2.5);
      s.generate();
    }

    s.generate = function() {
      s.background(bg);
      for(y = 0; y <= s.height; y+=size) {
        for(x = (y/size % 2 == 0) ? -size : 0; x <= s.width+size; x+=size/1.5) {
          let top = s.createVector(x+s.random(-maxOffset,maxOffset), y-size/2 + s.random(-maxOffset/2,maxOffset/2));
          let bottom = s.createVector(x+s.random(-maxOffset,maxOffset), y+size/2 + s.random(-maxOffset/2,maxOffset/2));
          let ctrlOff = [];
    
          s.fill(fg);
          if(s.random(1) < strokeProb)
            s.stroke(strokeColor);
          else
            s.noStroke();
    
        s.beginShape();
        s.vertex(top.x, top.y);
        s.bezierVertex(x-size/3, y-size/3 + size/4, x-size/3, y+size/3 - size/4, bottom.x, bottom.y);
        s.bezierVertex(x+size/3, y+size/3 - size/4, x+size/3, y-size/3 + size/4, top.x, top.y);
        s.endShape();
        }
      }
    }
    
   
}, 'p3');

// Tissue Patterns: 4/5
let pattern4 = new p5((s) => {

    s.setup = function() {

    }

    s.generate = function() {

    }
}, 'p4');

// Tissue Patterns: 5/5
let pattern5 = new p5((s) => {

    s.setup = function() {

    }
    
    s.generate = function() {

    }
}, 'p5');

// window.setInterval((refresh) => {
//     pattern1.generate()
//     pattern2.generate()
//     pattern3.generate()
//     pattern4.generate()
// }, 1500);