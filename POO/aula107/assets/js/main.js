class ValidaFomrulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos(){
    this.formulario.addEventListener('submit', e=>{
      this.handleSubmit(e);
    }); 
  }

  handleSubmit(e){
    e.preventDefault();
    const camposValidos = this.campoSaoValidos();
    const senhaValida = this.senhaValida();

    if(camposValidos && senhaValida){
      alert('formulario enviado');
      this.formulario.submit();
    }
  }

  campoSaoValidos(){
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerHTML;
      
      if(!campo.value){
        this.criaErro(campo, `Campo ${label} não pode estar vazío`);
        valid = false;
      }

      if(campo.classList.contains('cpf')){
        if(!this.validaCpf(campo)) valid = false;
      }


      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valid = false;
      }

    }
    return valid;
  }

  senhaValida(){
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repretirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repretirSenha.value){
      this.criaErro(senha, `Campo senha e repetir senha precisam se iguais`);
      this.criaErro(repretirSenha, `Campo senha e repetir senha precisam se iguais`);

      valid = false;
    }

    if(senha.value.length < 6 || senha.value.length > 12){
      this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');
      valid = false;
    }
  }

  validaCpf(campo){
    const cpf = new ValidaCpf(campo.value);

    if(!cpf.valida()){
      this.criaErro(campo, 'Cpf inválido');
      return false;
    }
    return true
  }

  validaUsuario(campo){
    const usuario =campo.value;
    let valid = true;


    if(usuario.length < 3 || usuario.length > 12){
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(campo, 'Usuário precisa conter apenas letras ou números');
      valid = false;
    }
    return valid;
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }

}


const valida = new ValidaFomrulario();