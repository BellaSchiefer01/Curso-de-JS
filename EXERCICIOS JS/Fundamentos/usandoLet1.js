var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)

//Como o let tem escopo de bloco, o console.log dentro do bloco imprime o
//valor 2, enquanto o console.log fora do bloco imprime o valor 1.