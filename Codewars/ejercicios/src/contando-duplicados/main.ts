

// const duplicateCount = (text: string):number => {
//     const parseTextToArray =  text.split("");
//     let results = 0;

//     parseTextToArray.filter((el,index ) => {
//         if(text.indexOf(el[index]) === text.lastIndexOf(el[index])){
//             results++;
//         }        
//     })
    
//     return results;
// }

const duplicateCount = (text:string): number => {
    const charactersOfText = Array.from(text);
    const count:Record<string, number> = {};

    for(const character of charactersOfText){
        if(character >= "a" && character <= "z"){
            count[character] = (count[character] || 0) + 1;
        }
    }

    const lettersRepeat = Object.values(count).filter(el => el > 1);
    const totalLetterRepeat =  lettersRepeat.reduce((total, currentValue) => total + currentValue, 0);
    
    return totalLetterRepeat;

}


console.log(duplicateCount("hooolaaa"));
