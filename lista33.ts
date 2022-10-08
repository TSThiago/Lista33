// Ex 1:

// console.log(RetornarVogais("eu fiz o meu almoço hoje"))

// function RetornarVogais(frase : string) : number {
//     let verificador : RegExp = /[^aeiou]/gi
//     let teste1 : string = frase.replace(verificador,'')
//     console.log("Frase: " +frase+ " - Vogais: " +teste1)
//     return teste1.split('').length
// }

// Ex 2:

console.log(MostrarCaractereDoMeio("jogando"))

function MostrarCaractereDoMeio(palavra: string) : string{
    let arrayPalavra : string[] = palavra.split('')
    console.log(arrayPalavra)
    if(arrayPalavra.length % 2 == 0){
        let caracteresDoMeio :string[] = []
        caracteresDoMeio.push(arrayPalavra[(arrayPalavra.length/2) - 1],arrayPalavra[arrayPalavra.length/2]) 
        return caracteresDoMeio.join('') 
    }else{
        return arrayPalavra[(arrayPalavra.length/2) - 0.5]
    }

}