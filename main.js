class Persona{

    constructor(name, surname){

        this._name = name;
        this._surname = surname;

    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;

    }



}

let persona1 = new Persona("Ever", "Ponce" );
persona1.name = "Francisco";
console.log(persona1.name);
