/** Global Parameters Object */
const params = { };

/**
 * @param {Number} n
 * @returns Random Integer Between 0 and n-1
 */
const randomInt = n => Math.floor(Math.random() * n);

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @returns String that can be used as a rgb web color
 */
const rgb = (r, g, b) => `rgba(${r}, ${g}, ${b})`;

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @param {Number} a Alpha Value
 * @returns String that can be used as a rgba web color
 */
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;

/**
 * @param {Number} h Hue
 * @param {Number} s Saturation
 * @param {Number} l Lightness
 * @returns String that can be used as a hsl web color
 */
const hsl = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`;

/** Creates an alias for requestAnimationFrame for backwards compatibility */
window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        /**
         * Compatibility for requesting animation frames in older browsers
         * @param {Function} callback Function
         * @param {DOM} element DOM ELEMENT
         */
        ((callback, element) => {
            window.setTimeout(callback, 1000 / 60);
        });
})();

// add global parameters here

const PARAMS = {
    DEBUG: true,
    //SCALE: 3,
    //BITWIDTH: 16
};

/**
 * Returns distance from two points
 * @param {Number} p1, p2 Two objects with x and y coordinates
 * @returns Distance between the two points
 */
const getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

//------//
// TEXT //
//------//

function setBlackStroke(ctx) {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
};

function setRainbowStroke(ctx, boundingbox) {
    let BB = boundingbox;
    let coordX = BB.left;
    let coordY = BB.top;
    let boxW = BB.left + BB.width;
    let boxH = BB.top + BB.height;
    let rainbow = ctx.createLinearGradient(coordX, coordY, boxW, boxH);

    rainbow.addColorStop(0, "red");
    rainbow.addColorStop(0.2, "orange");
    rainbow.addColorStop(0.4, "green");
    rainbow.addColorStop(0.6, "blue");
    rainbow.addColorStop(0.8, "indigo");
    rainbow.addColorStop(1.0, "violet");

    ctx.strokeStyle = rainbow;
    ctx.fillStyle = rainbow;
};