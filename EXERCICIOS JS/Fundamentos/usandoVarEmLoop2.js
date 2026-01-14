var funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    });
}   

funcs[2]();
funcs[8]();
// Ambos irão imprimir 10, pois a variável 'i' 
//é compartilhada no escopo da função e seu valor final após o loop é 10.
// Isso se torna um erro em javascript.