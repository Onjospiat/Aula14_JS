function mudaTexto() {
  var text = document.getElementById('text');
  var language = document.getElementById('lang');

  if (language.innerHTML == 'EN') {
    text.innerHTML = 'Página Inicial';
    language.innerHTML = 'PT';
  } else {
    text.innerHTML = 'Home page';
    language.innerHTML = 'EN';
  }
}
window.mudaTexto = mudaTexto;
