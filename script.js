const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const resolution = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
ctx.canvas.width = canvasWidth;
ctx.canvas.height = canvasHeight;


function randomNoiseMatrix() {
    let matrix = [];
    for (let x = 0; x < canvasWidth / resolution; x++) {
        matrix[x] = [];
        for (let y = 0; y < canvasHeight / resolution; y++) {
            matrix[x][y] = Math.random() >= 0.5;
        }
    }
    return matrix;
}

function drawMatrix() {
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y]) {
                ctx.fillStyle = "black";
                ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
            }
        }
    }
}

const matrix = randomNoiseMatrix();
drawMatrix();