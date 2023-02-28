var oyuncu = document.getElementById("player");
var oyunYeri = document.getElementById("game-board");
var positionX = 0;
var positionY = 0;

window.addEventListener("keydown", hereketEtmek);

function hereketEtmek(event) {
  switch (event.key) {
    case "SolaTeref":
      positionX -= 8;
      break;
    case "SagaTeref":
      positionX += 8;
      break;
    case "Yuxari":
      positionY -= 8;
      break;
    case "Asagi":
      positionY += 8;
      break;
  }
  if (positionX < 0) {
    positionX = 0;
  }
  if (positionX > oyunYeri.offsetWidth - oyuncu.offsetWidth) {
    positionX = oyunYeri.offsetWidth - oyuncu.offsetWidth;
}
  if (positionY < 0) {
    positionY = 0;
  }

  if (positionY > oyunYeri.offsetHeight - oyuncu.offsetHeight) {
    positionY = oyunYeri.offsetHeight - oyuncu.offsetHeight;
}
  oyuncu.style.left = positionX + "px";
  oyuncu.style.top = positionY + "px";
}
