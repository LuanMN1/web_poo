// Variáveis ou Propriedades estáticas

class Configuracao{

    // propriedade estática
    static versao = '1.0.0'

    // método estático
    static obterVersao(){
        return Configuracao.versao
    }
}

console.log(Configuracao.obterVersao())