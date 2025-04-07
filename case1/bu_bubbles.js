"use strict";

//object
var box = {
    width: 1024,
    height: 500
};

//class function for prototyping
function bubble(size, img) {
    this.radius = size;
    this.imageURL = img;
    this.xVelocity = null;
    this.yVelocity = null;
    this.xPos = null;
    this.yPos = null;
    this.opacity = 1;
    this.hue = 0;
    this.rotate = 0;
    this.rotateDirection = 1;
}

//decrease bubbles opacity
bubble.prototype.fadeBubble = function () {
    this.opacity -= .0005;
};

//increase the bubbles hue by 3 modulus 360 degrees
bubble.prototype.changeColor = function () {
    (this.hue += 3) % 360;
};

//rotate bubble in circle direction of 360 degrees
bubble.prototype.rotateBubble = function () {
    (this.rotate += this.rotateDirection) % 360;
};

//move bubble
bubble.prototype.moveBubble = function (height, width) {
    var bubbleTop = this.yPos;
    var bubbleBottom = this.yPos + this.radius;
    var bubbleLeft = this.xPos;
    var bubbleRight = this.xPos + this.radius;
    //bubble has hit top or bottom wall
    if (bubbleTop < 0 || bubbleBottom > height) {
        this.yVelocity = this.yVelocity;
    }
    //bubble has hit right or left wall
    if (bubbleLeft < 0 || bubbleRight > width) {
        this.xVelocity = this.xVelocity;
    }
    //move the bubble to its new location
    this.yPos += this.yVelocity;
    this.xPos += this.xVelocity;
}

//run function after browser reloads
window.addEventListener("load", function() {
   var bubbleBox = document.getElementById("bubbleBox");
   
   // Create a new bubble every 1/2 a second
   setInterval(function() {
      
      // Do not create more than 20 bubbles at any one time
       if (bubbleBox.childElementCount <= 20) {
           //creating a new bubble object for the png images
           var newBubble = new bubble(randInt(50, 120), "bu_bubble" + randInt(1, 10) + ".png");

           //defining property values for newBubble object
           newBubble.xPos = .5 * box.width;
           newBubble.yPos = .5 * box.height;
           newBubble.xVelocity = randInt(-5, 5);
           newBubble.yVelocity = randInt(-5, 5);
           newBubble.rotate = randInt(0, 360);
           newBubble.hue = randInt(0, 360);
           newBubble.rotateDirection = randInt(-2, 2);

           //create inline image displaying bubble image within bubble box setting attributes
           var bubbleImg = document.createElement("img");
           bubbleImg.style.position = "absolute";
           bubbleImg.src = newBubble.imageURL;
           bubbleImg.style.width = newBubble.radius + "px";
           bubbleImg.style.left = newBubble.xPos + "px";
           bubbleImg.style.top = newBubble.yPos + "px";
           bubbleBox.appendChild(bubbleImg);//add img child to the box tag

           //insert commands to animate its appearance
           var bubbleInterval = setInterval(function () {
               //decrease bubbles opacity
               newBubble.fadeBubble();

               //if new bubble opacity is negative
               if (newBubble.opacity < 0) {
                   //remove bubble from the box
                   bubbleBox.removeChild(bubbleImg);

                   //stop animation effects for the bubble
                   clearInterval(bubbleInterval);
               }//animate the bubble

               else {
                   //set image created opacity to new bubble opacity
                   bubbleImg.style.opacity = newBubble.opacity;

                   //change the hue of the bubble
                   newBubble.changeColor();
                   bubbleImg.style.filter = "hue-rotate(" + newBubble.hue + "deg)";

                   //spin the bubble
                   newBubble.rotateBubble();
                   bubbleImg.style.transform = "rotate(" + newBubble.rotate + "deg)";

                   //move bubble
                   newBubble.moveBubble(box.height, box.width);
                   bubbleImg.style.left = newBubble.xPos + "px";
                   bubbleImg.style.top = newBubble.yPos + "px";
               }
           }, 25);
      }
   }, 500);

   /* Function to return a random integer between minVal and maxValue inclusive */
   function randInt(minVal, maxVal) {
      var size = maxVal - minVal + 1;
      return Math.floor(minVal + size * Math.random());
   }  
});