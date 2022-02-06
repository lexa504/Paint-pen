let mouseIsDown = false;
let priorMousePos = {
  x: undefined,
  y: undefined,
};
let buttons = {};

function handleMD(e) {
  e.preventDefault();
  mouseIsDown = true;
  priorMousePos.x = e.offsetX;
  priorMousePos.y = e.offsetY;
}

function handleMM(e) {
  e.preventDefault();
  if (!mouseIsDown) {
    return;
  }
  contextBG.strokeStyle = penColor;
  contextBG.lineWidth = penThickness;
  contextBG.lineCap = "round";
  contextBG.beginPath();
  contextBG.moveTo(priorMousePos.x, priorMousePos.y);
  contextBG.lineTo(e.offsetX, e.offsetY);
  contextBG.stroke();
  priorMousePos.x = e.offsetX;
  priorMousePos.y = e.offsetY;
}

function handleMU(e) {
  e.preventDefault();
  mouseIsDown = false;
}

function initButton() {
  buttons.draw = new Button(
    "draw",
    () => {
      document.getElementById("pen-thickness").style.display = "block";
      setTimeout(() => {
        document.getElementById("pen-thickness").click();
      }, 500);
    },
    "pen-thickness",
    (e) => {
      penThickness = Number(e.target.value);
      document.getElementById("pen-thickness").style.display = "none";
    }
  );
  buttons.eraser = new Button("eraser", );
  buttons.color = new Button(
    "color",
    () => {
      document.getElementById("pen-color-selector").style.display = "block";
      document.getElementById("pen-color-selector").click();
    },
    "pen-color-selector",
    (e) => {
      penColor = e.target.value;
      document.getElementById("pen-color-selector").style.display = "none";
    }
  );
  buttons.trash = new Button("trash", () => {
    contextFG.clearRect(0, 0, canvasFG.width, canvasFG.height);
    contextBG.clearRect(0, 0, canvasBG.width, canvasBG.height);
  });
  buttons.background = new Button(
    "background",
    () => {
      document.getElementById("bg-color-selector").style.display = "block";
      document.getElementById("bg-color-selector").click();
    },
    "bg-color-selector",
    (e) => {
      let response = confirm(
        "This will clear the screen. Do you want to continue?"
      );
      if (response) {
        document.getElementById("canvasBG").style["background-color"] =
          e.target.value;
        document.getElementById("bg-color-selector").style.display = "none";
        contextFG.clearRect(0, 0, canvasFG.width, canvasFG.height);
        contextBG.clearRect(0, 0, canvasBG.width, canvasBG.height);
      }
    }
  );
  buttons.fill = new Button("fill");
  buttons.shapes = new Button("shapes");
}
