let canvasFG;
let canvasBG;
let contextFG;
let contextBG;

function drawAll() {}

function initCanvas() {
  canvasFG = document.getElementById("canvasFG");
  canvasBG = document.getElementById("canvasBG");
  contextFG = canvasFG.getContext("2d");
  contextBG = canvasBG.getContext("2d");
  canvasFG.addEventListener("mousedown", handleMD);
  canvasFG.addEventListener("mouseup", handleMU);
  canvasFG.addEventListener("mousemove", handleMM);
  canvasFG.addEventListener("mouseout", handleMU);
}

function initResize() {
  onresize = resize;
  resize();
}

function resize() {
  canvasFG.width = canvasBG.width =
    document.getElementById("canvas-container").offsetWidth;
  canvasFG.height = canvasBG.height =
    document.getElementById("canvas-container").offsetHeight;
}
