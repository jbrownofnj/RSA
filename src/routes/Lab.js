import React, { useEffect,useState } from 'react'
import styled from "styled-components"
import bigInt from "big-integer"
import CypherCard from "../components/CypherCard"


const StyledDiv=styled.div`
height:100%;
user-select:"text";
`

const StyledHeader=styled.header`
font-size:40px;
align-self:center;
`

const StyledForm=styled.form`
`

const StyledInput=styled.input``

const StyledLabel=styled.label`
font-size:25px;
`

const StyledButton=styled.button`
`

function textToNumber(secretMessage){
  function toBinary(userString){
      let charCodeArr=[]
      for(let i = 0; i < userString.length; i++){
              let code = userString.charCodeAt(i);
              charCodeArr.push(code.toString(2));
          }
          console.log(`number was:${userString} and now its:${charCodeArr}`)
      return (charCodeArr)
  }
  function fixLength(string){
      let addZeros=string
     while(addZeros.length<7){
       addZeros=`0`+`${addZeros}`
     }
     console.log(`String was ${string} and its now ${addZeros}`)
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
  const numberBase10=parseInt(binaryString,2);
  return numberBase10;
} 

function Lab({updateEntries,onChangeNameHandler,userName,d,onChangeDValueHandler,message, onChangeMessageHandler}) {
  const[cyphers,setCyphers]=useState([])
  const [renderToggle,setRenderToggle]=useState(true)

console.log(updateEntries)
  function renderHandler(result){
    setCyphers(result)
    console.log(result)
    updateEntries(result.length)
  }

  function onSubmitHandler(evt){
    function textToNumber(secretMessage){
      function toBinary(userString){
          let charCodeArr=[]
          for(let i = 0; i < userString.length; i++){
                  let code = userString.charCodeAt(i);
                  charCodeArr.push(code.toString(2));
              }
              console.log(`number was:${userString} and now its:${charCodeArr}`)
          return (charCodeArr)
      }
      function fixLength(string){
          let addZeros=string
         while(addZeros.length<7){
           addZeros=`0`+`${addZeros}`
         }
         console.log(`String was ${string} and its now ${addZeros}`)
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
      const numberBase10=parseInt(binaryString,2);
      return numberBase10;
   } 

    evt.preventDefault()
    const n=bigInt(2469018203);
    const e=bigInt(65537);
    const numberinput=message===""?0:textToNumber(message)
    const encript=bigInt(numberinput).modPow(e,n)
    const newCypher={
      "name":userName,
      "encodedWord":parseInt(encript,10),
      "date":Date()
    }
    fetch(" http://localhost:3000/cyphers",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newCypher)
    }).then(res=>res.json()).then(result=>{setRenderToggle(renderToggle=>!renderToggle)})
  }

 

  useEffect(()=>{
    fetch(" http://localhost:3000/cyphers").then(res=>res.json()).then(result=>{renderHandler(result)})
  },[renderToggle])

const n=bigInt(2469018203);
const e=bigInt(65537);
const numberinput=message===""?0:textToNumber(message)
const encript=bigInt(numberinput).modPow(e,n)

  return (
    <div>
    <StyledDiv>
      <StyledHeader>Lab</StyledHeader>
      <StyledForm>
        <StyledLabel htmlFor="userName">Enter user name: </StyledLabel>
        <StyledInput id="userName" type="text" onChange={onChangeNameHandler} value={userName}/>
      </StyledForm>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledLabel htmlFor="code">Enter Message Here:</StyledLabel>
        <StyledInput onChange={onChangeMessageHandler} id="code" value={message} maxLength="4" />
        <StyledButton>Submit</StyledButton>
      </StyledForm>
      <StyledForm>
        <StyledLabel htmlFor="d">d:</StyledLabel>
        <StyledInput id="d" onChange={onChangeDValueHandler} type="number" value={d} />
      </StyledForm>
      
      {message!==""?<p tabIndex="0">The encripted word is:{encript.value.toString()}</p>:null}
      {cyphers.map((cypherObject)=>{return <CypherCard d={d} key={cypherObject.id}cypherObject={cypherObject}/>})}
    </StyledDiv>
    </div>
  )
}


export default Lab