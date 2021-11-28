// // variaveis
// var imgQtd = 0;
// var isParado = false;
// var slideAtual = 0;

// ajax('fotos.json', 'GET', (resposta) => {
//   let fotos = JSON.parse(resposta)
//   imgQtd = fotos.length

//   for (let item of fotos) {
//     console.log(item)
//     document.querySelector('.slider .painel').innerHTML +=
//       `<div class="item" style="background-image: url(${item['url']});">
//         <div class="info">
//           <h3 class="titulo">${item['info']['titulo']}</h3>
//           <p class="subtitulo">${item['info']['subtitulo']}</p>
//         </div>
//       </div>`
//   }
//   // pegando e calculando a quantidade de slideshow
//   document.querySelector('.slider .painel').style.width = `calc(100vw * ${imgQtd})`

//   setInterval(() => { if (! isParado) avancar() }, 8000)
// })

// function voltar() {
//   slideAtual = (slideAtual > 0 ? slideAtual : imgQtd) -1
//   atualizarMargem()
// }

// function togglePausar() {
//   let iconeClasse = `fas fa-${isParado ? 'pause' : 'play'}`
//   document.querySelector('.slider .controle.pausa span').className = iconeClasse
//   isParado = ! isParado
// }

// function avancar() {
//   slideAtual = slideAtual >= (imgQtd -1) ? 0 : slideAtual +1
//   atualizarMargem()
// }

// function atualizarMargem() {
//   let novaMargem = slideAtual * document.querySelector('.slider .item').clientWidth
//   document.querySelector('.slider .painel').style.marginLeft = `-${novaMargem}px`
// }

let totalSlides = document.querySelectorAll('.item').length;
let currentSlide = 0;

document.querySelector('.painel').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.controles').style.height = `${document.querySelector('.slider').clientHeight}px`;

function voltar() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}
function avançar() {
  currentSlide++;
  if (currentSlide > (totalSlides - 1)){
    currentSlide = 0;
  }
  updateMargin();
}
function updateMargin() {
  let slideItemWidth = document.querySelector('.item').clientWidth;
  let newMargin = (currentSlide * slideItemWidth);
  document.querySelector('.painel').style.marginLeft = `-${newMargin}px`;
}
setInterval(avançar, 5000);