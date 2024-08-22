// Métodos estáticos
// tudo q é estático não vai para o objeto quando este é criado

class Calculadora {

    // método estático para somar dois valores
    static somar(a,b){
        return a+b
    }

    // método estático para subtrair dois valores
    static subtrair(a,b){
        return a-b
    }
}

console.log(Calculadora.somar(1,2))
console.log(Calculadora.subtrair(4,2))