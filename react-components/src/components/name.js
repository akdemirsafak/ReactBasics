import { useState } from 'react';
function ShowName() {

  //var keyword'ü ile daha önce tanımlanmış değişkeni tekrar tanımlayabiliriz. 
  //let myName="Adam";

  const [myName,setMyName]=useState("Adam") // !* myName'in ilk değerini belirledik.
  // *! state'ler readonly'dir! state'in içeriğini 2. (setMyName) parametre ile değiştiririz.
 

  //const [myLastName,setLastMyName]=useState("Generic")


  return(
  <>
    <b> My Name : </b>{myName}
    <br/>
    <input onChange={(val)=>setMyName(val.target.value)} placeholder='Ad'/>
  </>
  )

}
export function MyName(){
    return (<h1>My Name</h1>)
}
export default ShowName;