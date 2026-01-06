// Função sem retorno

function imprimirSoma (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

imprimirSoma(2) // NaN - Not a Number

//Função com retorno

function soma (a, b = 0){ //Aqui tramamos um valor padrão para b.
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //No caso de não passar o segundo parâmetro, ele usará o valor padrão 0.

