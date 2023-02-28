// const canvas = document.createElement("canvas");
// canvas.innerText= "DvD"
const canvas= document.getElementById("dvd-animation")
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", 
                "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D"];
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 3;
let dy = -3;
let dvdWidth = 80;
let dvdHeight = 60;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  x += dx;
  y += dy;
  
  if (x + dvdWidth > canvas.width || x < 0) {
    dx = -dx;
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  }
  if (y + dvdHeight > canvas.height || y < 0) {
    dy = -dy;
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  }
  
  ctx.fillRect(x, y, dvdWidth, dvdHeight);
  
  requestAnimationFrame(draw);
}

draw();