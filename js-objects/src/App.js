import React,{ useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data,setData]=useState([]);
  
    useEffect(()=>{
      axios.get("https://localhost:7079/Content").then((response)=>{
        setData(response.data.data);
        console.log(response.data.data);
      })
      // fetch("https://localhost:7079/Content")
      // .then((response)=>{
      //   return response.json();
      // })
      // .then((incomingData)=>{
      //   setData(incomingData.data); //Response'umuzda error data gibi alanlar vardı biz data ile ilgileniyoruz.
      // })
    },[]);
    

  return (
    <div>

      Gelen veri miktarı :{data.length===0?"Veriler yükleniyor":data.length}
      <ul>
        {
          
          data.map((item,index)=>{
            return (
            <li key={index}>{`Id : ${item.id} - Name:  ${item.name}`}</li>
          )
          })
        }
    </ul>
    </div>
  );
}

export default App;
