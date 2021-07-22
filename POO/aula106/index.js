class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf(){
    const cpfSemDigito = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
    const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);
    this.novoCpf = cpfSemDigito + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos){
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let StringNumerica of cpfSemDigitos){
      total += reverso * Number(StringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11)
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.eSequencia()) return false;
    this.geraNovoCpf();
    return this.novoCpf == this.cpfLimpo;
  }
}


let validaCpf = new ValidaCpf('070.987.720-03');
//validaCpf = new ValidaCpf('999.999.999-99');
validaCpf.valida() ? console.log('Cpf valido') : console.log('Cpf invalido');