class Persona {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get surname() {
    return this.surname;
  }

  set surname(surname) {
    this._surname = surname;
  }

  nombreCompleto(){

    return this._name + ' ' + this._surname;

  }
}

class Empleado extends Persona {
  constructor(name,surname,departamento) {
    super(name,surname);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  //sobreescritura

  nombreCompleto(){
    return super.nombreCompleto() + ' ' + this._departamento
  }

}

let persona1 = new Persona("Ever", "Ponce");
console.log(persona1.name);

let empleado1 = new Empleado('Maria',"Ponce",'Sistemas');
console.log(empleado1.nombreCompleto());