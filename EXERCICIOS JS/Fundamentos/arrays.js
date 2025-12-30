/* ARRAY OU VETOR
    Se trata de uma estrutura de dados que guarda várias informações do mesmo tipo (menos no caso de JS),
    organizada de forma contigua na memória.
    Pense nele como uma fila de itens identificados por posição.
    Todos os elementos ocupam o mesmo lugar na memória, facilitando a leitura e o uso.

    Por que usar um Array?

    Organização: guardar muitos itens do mesmo tipo (números, palavras, etc.) em um único lugar.
    Acesso rápido: pegar um elemento é muito rápido pelo índice.
    Tamanho fixo: ao criar o array, você define quantos itens ele pode armazenar.

    Em JS o Array é heterogênio pode ser colocado em um único array, ums String em seguida um 
    Number etc, e também não possui um tamanho fixo. 
*/

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Esse índice não está presente no Array

valores[4] = 10 //Adicionando o valor 10 no array.

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Adicionando mais valores ao Array.
console.log(valores)

console.log(valores.pop(9)) //Essa função pega o último valor do array e retira esse valor
console.log(valores)

//Outra forma de deletar um índice é:
delete valores [0]

console.log(valores)

console.log(typeof valores)