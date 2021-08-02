import geraSenha from './geraSenha';

const senhaGerada = document.querySelector('.senha-gerada');

const qtdCaractere = document.querySelector('.inp-num');
const chkMaiusculas= document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumero = document.querySelector('.chk-numero');
const chkSimbolos = document.querySelector('.chk-simbolos');

const btnGera = document.querySelector('.gerar-senha');

export default () =>{
  btnGera.addEventListener('click', ()=>{
    senhaGerada.innerHTML = gerar();
  })
};

function gerar(){
  const senha = geraSenha(
    qtdCaractere.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumero.checked,
    chkSimbolos.checked
  );
  
  return senha || 'Nada Selecionado.';
  
}