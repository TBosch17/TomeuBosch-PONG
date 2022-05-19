let bolla1= [];
let playyer1 = [];
let playyer2 = [];

function setup() {

  const canvasDiv = document.getElementById("canvasContainer");
  canvasDiv.style.width = "500px";
    canvasDiv.style.height = "400px";
    canvasDiv.style.margin = "auto";
  let ampleCanvas = canvasDiv.offsetWidth;
  let altCanvas= canvasDiv.offsetHeight;
  let cnv = createCanvas(ampleCanvas, altCanvas);
  cnv.parent("canvasContainer");

  bolla1 = new bolla(width/2, height/2, 30, 0, 3, 0, 0, 255);
  playyer1 = new jugador(width/2 - 75, 20, 30, 150, 3, 3, 0, 255, 0, 65, 68, 0, 10, height/2 -50, 1);
  playyer2 = new jugador(width/2 - 75, height - 50, 30, 150, 3, 3, 255, 0, 0, 37, 39, 0, 10, height/2 + 50, 2);
  
}

function draw() {
  background(0);
  
playyer1.dibuixa();
playyer1.moviment();
playyer1.marcador();
  
playyer2.dibuixa();
playyer2.moviment();
playyer2.marcador();
  
bolla1.dibuixa();
bolla1.moviment();
}
