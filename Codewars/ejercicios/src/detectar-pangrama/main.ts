const isPangram = (phrace: string): boolean =>{ 
   const alphabet = "abcdefghijklmnopqrstuvxwyz";
    const phraceLowerCase = phrace.toLowerCase();

    for(let char of alphabet){
        if(phraceLowerCase.indexOf(char) == -1){
            return false;
        }
    }

    return true;

}

// console.log(isPangram("abcdefghijklmnopqrstuvxwyz"));
console.log(isPangram("Hola mundo"));