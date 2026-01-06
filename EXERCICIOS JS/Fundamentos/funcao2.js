//Armazenando uma função em uma variável.

const imprimirSoma = function (a, b) {
    console.log(a + b)
}   

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável.
// Obs: Função arrow não precisa da palavra function e nem das chaves se tiver apenas uma linha de código.
// essa => substitui a palavra function.
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a-b

console.log(subtracao(5, 2))