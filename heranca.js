// classe mãe ou superclasse
class Animal {

    constructor(nome){
        this.nome = nome
    }

    // método que será herdado
    falar(){
        console.log(`${this.nome} faz um som`)
    }
}

// classe filha
class Cachorro extends Animal {
    // sobrescrita de método
    // sobrescreve o método falar da classe mãe
    falar(){
        console.log(`${this.nome} late: AU AU AU`)
    }
}

class Gato extends Animal {
    // sobrescreve o método falar da classe mãe
    falar(){
        console.log(`${this.nome} mia: MEOW MEOW MEOW`)
    }

    arranhar(){
        console.log(`${this.nome} arranhando sofá`)
    }

    comer(){
        this.#comendoWhiskas()
    }

    // método privado
    #comendoWhiskas(){
        console.log('Gato comendo Whiskas')
    }
}


toto = new Cachorro('Totó')
toto.falar()

console.log("====================================")

tom = new Gato('Tom')
tom.falar()
tom.arranhar()
tom.comer()

// exemplo de POLIMORFISMO
// criando um array de animais
const animais = [new Animal("xxx"), new Cachorro('Scooby'), new Gato('Felix')]
animais.forEach(animal => animal.falar())