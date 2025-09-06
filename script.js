const canvas = document.getElementById("pookkalam");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 220;

// Colors for layers
const colors = ["#ff9800", "#ffeb3b", "#4caf50", "#e91e63", "#9c27b0", "#03a9f4"];

// Draw concentric circles
function drawPookkalam() {
  for (let i = 0; i < colors.length; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - i * 35, 0, 2 * Math.PI);
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.closePath();
  }
}

// Draw petals
function drawPetals() {
  const petals = 24;
  const petalRadius = 60;
  for (let i = 0; i < petals; i++) {
    let angle = (i * 2 * Math.PI) / petals;
    let x = centerX + Math.cos(angle) * 120;
    let y = centerY + Math.sin(angle) * 120;

    ctx.beginPath();
    ctx.arc(x, y, petalRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "#f44336";
    ctx.fill();
    ctx.closePath();
  }
}

// Draw center circle
function drawCenter() {
  ctx.beginPath();
  ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
  ctx.closePath();
}

// Draw complete pookkalam
drawPookkalam();
drawPetals();
drawCenter();
