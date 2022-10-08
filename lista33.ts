// Ex 1:
console.log(RetornarVogais("eu fiz o meu almoço hoje"))

function RetornarVogais(frase : string) : number {
    let verificador : RegExp = /[^aeiou]/gi
    let teste1 : string = frase.replace(verificador,'')
    console.log("Frase: " +frase+ " - Vogais: " +teste1)
    return teste1.split('').length
}