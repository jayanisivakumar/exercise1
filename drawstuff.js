/* classes */ 

// Color constructor
class Color {
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color change method
} // end color class


/* utility functions */

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
} // end drawPixel
    

/* main -- here is where execution begins after window load */

function main() {

    // Get the canvas, context, and image data
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
    var w = context.canvas.width; // as set in html
    var h = context.canvas.height;  // as set in html
    var imagedata = context.createImageData(w,h);
 
    // Draw a 200x120 block-textured rectangle with pixels
    var c1 = new Color(255,192,203,255); // light pink
    var c2 = new Color(238,130,238,255); // violet
    var c3 = new Color(221,160,221,255); // plum
    var c4 = new Color(255,182,193,255); // light pink variation

    for (var x=150; x<350; x++) {
        for (var y=180; y<300; y++) {

            var blockX = Math.floor((x - 150) / 20);
            var blockY = Math.floor((y - 180) / 20);

            var pattern = (blockX + blockY) % 4;

            if (pattern == 0) {
                drawPixel(imagedata,x,y,c1);
                // console.log("draw at " +x+ " " +y);
            } else if (pattern == 1) {
                drawPixel(imagedata,x,y,c2);
                // console.log("draw at " +x+ " " +y);
            } else if (pattern == 2) {
                drawPixel(imagedata,x,y,c3);
                // console.log("draw at " +x+ " " +y);
            } else {
                drawPixel(imagedata,x,y,c4);
                // console.log("draw at " +x+ " " +y);
            }
        }
    }
    
    context.putImageData(imagedata, 0, 0); // display the image in the context
}
