import GeraCpf from './modules/GeraCpf';

import './assets/css/style.css';

(function(){
  const gera = new GeraCpf();
  const cpfgerado = document.querySelector('.cpf-gerado');

  cpfgerado.innerHTML = gera.geraNovoCpf();
})();