import bigInt from "big-integer"

export function textToNumber(secretMessage){
    function toBinary(userString){
        let charCodeArr=[]
        for(let i = 0; i < userString.length; i++){
                let code = userString.charCodeAt(i);
                charCodeArr.push(code.toString(2));
            }
        return (charCodeArr)
    }
    function fixLength(string){
        let addZeros=string
       while(addZeros.length<7){
         addZeros=`0`+`${addZeros}`
       }
       return(addZeros)
    }
    function binaryArrayToBinaryString(binaryArray){
        let binaryString=""
        binaryArray.map((arrayString)=>{
          binaryString=binaryString+arrayString
        })
        return binaryString
      }
    const binaryArray=toBinary(secretMessage);
    const withZerosBinaryArray=binaryArray.map(fixLength);
    const binaryString=binaryArrayToBinaryString(withZerosBinaryArray);
    const numberBase10=bigInt(parseInt(binaryString,10));
    return numberBase10;
 } 
 