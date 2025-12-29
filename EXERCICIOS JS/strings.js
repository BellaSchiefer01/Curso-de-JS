const escola = "Cod3r"

console.log(escola.charAt(4)) //Me monstra qual caractere está na posição/indice 4.
//Lembrando que começamos contando na posição 0,1,2,3 e 4.

console.log(escola.charCodeAt(3)) //código relacionado a tabela unicode, com relação ao índice 3

console.log(escola.indexOf(3)) //Existe esse índice/valor dentro dessa String?

console.log(escola.substring(1)) //vai mostrar a String a partir do índice 1.

console.log(escola.substring(0, 3)) //Vai mostrar do índice 0 até o indice 2

console.log('Escola ' .concat(escola).concat('!'))

console.log(escola.replace(3, 'e')) //Substitui um caractere pelo outro.

console.log('Joseph, James, Alice'.split(',')) //Cria um Array com três elementos independentes


