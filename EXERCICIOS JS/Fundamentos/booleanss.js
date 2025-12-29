let isAtive = false
console.log(isAtive)

isAtive = true

console.log(isAtive)

isAtive = 1
console.log(!! isAtive) //Para deixar o valor booleano precisamos primeiro negar 

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1) //Número negativo
console.log(!!' ') //String com espaço
console.log(!![]) //Array
console.log(!!{}) //Objeto literal
console.log(!!Infinity) //Infinito
console.log(!!(isAtive = true))


console.log('Os falsos...')
console.log(!!0)
console.log(!!'') //String vazia
console.log(!!null)
console.log(!!NaN) //NOT A NUMBER
console.log(!!undefined) //Indefinido
console.log(!!(isAtive = false))


console.log('Para finalizar...') //Utilizando OU - Onde pelo menos um deles tem que ser verdadeiro
console.log(!!("" || null || 0 || ' '))


let nome = 'Lucas'
console.log(nome || 'Desconhecido')