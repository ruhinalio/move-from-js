var element = document.getElementById("hereket-eden");
var position = 0;

function hereket() {
  // if(position>=100)return

  if (position <= 100) {
    position += 1;
    // px ona gore yazmisigki yazilanda reqemler tekce yazilir yanina px elave elemek ucun
    element.style.top = position + "px";
    // element.style.left= position+"px"

    window.requestAnimationFrame(hereket);
  }

  setTimeout(()=>{
      if(position<=500){
          position+=1
          element.style.left= position+"px"
          window.requestAnimationFrame(hereket)
      }
  },1000)
//   if (position <= 500) {
//     position += 1;
//     element.style.left = position + "px";
//     window.requestAnimationFrame(hereket);
//   }
}
window.requestAnimationFrame(hereket);
