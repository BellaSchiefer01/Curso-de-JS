let valor //Não vou atribuir nenhum valor
console.log(valor) //undefined

valor = null //ausência de valor, e não aponta para nenhum endereço na memória.

console.log(valor)
 //console.log(valor.toString()) //Erro! Cannot read property 'toString' of null

 const produto = {}
 console.log(produto.preco) //undefined
 console.log(produto) //Objeto vazio.

 produto.preco = 3.50

 console.log(produto.preco) //3.5

 produto.preco = undefined //Evite atribuir undefined. Use null para limpar um valor.
 console.log(!!produto.preco) //false
 console.log(produto)

delete produto.preco //Deleta a propriedade do objeto.

console.log(produto) //Objeto vazio novamente.

produto.preco = null //Sem preço
console.log(!! produto.preco) //false;
console.log(produto)

