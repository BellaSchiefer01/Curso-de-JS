const peso1 = 1.0

const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// isInteger serve para mostrar se é um número inteiro.

const avaliacao1 = 9.971
const avaliacao2 = 6.871
const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))

console.log(media.toString())

console.log(media.toString(2))

console.log(typeof media)

//Typeof serve para mostrar qual é o tipo de dado

//toFixed serve para definir quantas casas decimais eu quero mostrar

//toString serve para converter de number para String

//Para mostrar em valor binário inserir valor 2 em toString EX. console.log(media.toString(2))