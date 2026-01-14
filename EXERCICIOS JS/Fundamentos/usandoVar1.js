{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

//Pode ser acessada fora do bloco
//console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}   

teste()
//console.log(local) //Erro, pois a variável foi declarada dentro da função

//Quando você cria uma variável fora de uma função, ela tem escopo global
//ou seja, ela pode ser visualizada em qualquer lugar do código
//Mas quando você cria uma variável dentro de uma função, ela tem escopo local
//ou seja, só pode ser visualizada dentro daquela função