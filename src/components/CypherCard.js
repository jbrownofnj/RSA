import React from 'react'
import styled from "styled-components"
import bigInt from "big-integer"

const StyledDiv=styled.div`
font-size:20px;
margin:10px;
border:solid darkGreen 4px;
`

function CypherCard({d,cypherObject}) {

function decryption(number,userD){
        function correctLength(string){
          let correctedString=string
          while( (correctedString.length) % 7 !== 0){
            correctedString=`0`+correctedString;
          }
          return(correctedString)
        }
        function putInArray(userString){
    
          let newArray=[]
          for(let i=0;i<userString.length;i=i+7){
            if( i+7 < userString.length+1){
          
              newArray.push(userString.slice(i,(i+7)))
            }
          }
          return newArray
        }
        function binaryToAscciMapper(string){
          return(String.fromCharCode(parseInt(string,2)))
        }
        function ArrayToWord(characterArray){
          let decriptedWord=""
          characterArray.map((character)=>{
            decriptedWord=decriptedWord+character
          })
          return decriptedWord
        }
        console.log("d: "+userD+" number: "+number)
        const bigIntD=bigInt(userD)
        const n=bigInt(2469018203);
            console.log(n.value.toString())
        const userCode=number!==""?number:0
            console.log(userCode)
        const decript=bigInt(userCode).modPow(bigIntD,n)
            console.log(decript.value.toString())
        const decriptAsBinary=decript.value.toString(2)
            console.log(decriptAsBinary)
        const binaryOfCorrectedLength=correctLength(decriptAsBinary)
          console.log(binaryOfCorrectedLength)
        const binaryStringArray=putInArray(binaryOfCorrectedLength)
          console.log(binaryStringArray)
        const charDecriptArray=binaryStringArray.map(binaryToAscciMapper)
          console.log(charDecriptArray)
        const answer=ArrayToWord(charDecriptArray)
          console.log("answer"+answer)
        return(answer)
      }

  return (
    <StyledDiv>
        <p>{cypherObject.name}</p>
        <p>Coded word: {d.length<9?cypherObject.encodedWord:decryption(cypherObject.encodedWord,d)}</p>
        <p>Date Entered: {cypherObject.date}</p>
    </StyledDiv>
  )
}

export default CypherCard
