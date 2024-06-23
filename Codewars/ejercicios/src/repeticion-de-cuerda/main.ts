const repeatString = (num: number, str: string):string | undefined => {

    let cadena = ""
    for(let i = 0; i < num; i++){
        cadena += str;
    }

    return cadena;     
}

console.log(repeatString(5, "hola"));

const repeatString2 = (num: number, str: string):string | undefined => {

    return str.repeat(num);     
}

console.log(repeatString2(3, "*"));