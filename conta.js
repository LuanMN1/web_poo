class Conta {

    // campo ou propriedade privado(a)
    #numero
    #saldo
    #titular
    
    constructor(numero, titular, saldoInicial){
        this.#numero = numero
        this.#titular = titular
        this.#saldo = saldoInicial
    }

    // getters

    get saldo(){
        return this.#saldo
    }

    get titular(){
        return this.#titular
    }

    get numero(){
        return this.#numero
    }

    set titular(titular){
        this.#titular = titular
    }

    depositar(valor){
        this.#saldo += valor
    }

    sacar(valorSaque){
        if (valorSaque <= this.#saldo)
            this.#saldo -= valorSaque
        else
            console.log('*** Sem Saldo')
    }

    toString(){
        return `Número: ${this.#numero} // Titular: ${this.#titular} // Saldo: R$ ${this.#saldo}`
    }
}

// cria objetos
const conta1 = new Conta(1, 'Joao da Silva', 100)
const conta2 = new Conta (2, 'Maria da Silva', 200)

conta1.depositar(100)
console.log(conta1.saldo)
console.log(conta1.numero)
console.log(conta1.titular)
console.log(conta1.toString())

conta2.titular = 'Joana Paz'
conta2.sacar(150)
console.log(conta2.titular)
console.log(conta2.saldo)
console.log(conta2.toString())