// Ex 1:
// console.log(RetornarVogais("eu fiz o meu almoço hoje"))
// function RetornarVogais(frase : string) : number {
//     let verificador : RegExp = /[^aeiou]/gi
//     let teste1 : string = frase.replace(verificador,'')
//     console.log("Frase: " +frase+ " - Vogais: " +teste1)
//     return teste1.split('').length
// }
// Ex 2:
console.log(MostrarCaractereDoMeio("código"));
function MostrarCaractereDoMeio(palavra) {
    // let arrayPalavra : string[] = palavra.split('')
    // console.log(arrayPalavra)
    if (palavra.length % 2 == 0) {
        // let caracteresDoMeio :string[] = []
        return palavra[(palavra.length / 2) - 1] + palavra[palavra.length / 2];
        // return caracteresDoMeio.join('') 
    }
    else {
        return palavra[Math.floor(palavra.length / 2)];
    }
}
// Ex 3:
// console.log(OrganizarNumeros(71236412890))
// function OrganizarNumeros(numero : number) : number{
//     console.log("Número inicial: " +numero)
//     let arrayNumeros : string[] = numero.toString().split('')
//     let numeroOrganizado : string = arrayNumeros.sort((a, b) => parseInt(b) - parseInt(a)).join('')
//     return parseInt(numeroOrganizado)
// }
