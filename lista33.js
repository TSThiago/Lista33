// Ex 1:
console.log(RetornarVogais("eu fiz o meu almoço hoje"));
function RetornarVogais(frase) {
    var verificador = /[^aeiou]/gi;
    var teste1 = frase.replace(verificador, '');
    console.log("Frase: " + frase + " - Vogais: " + teste1);
    return teste1.split('').length;
}
