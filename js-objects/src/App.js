import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data,setData]=useState([]);
   // https://jsonplaceholder.typicode.com/

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>{
        return response.json();
      })
      .then((incomingData)=>{
        setData(incomingData);
      })
    },[]);

  return (
    <div>
      <ul>
        {
          
          data.map((item,index)=>{
            return (
            <li key={index}>{`Id : ${item.id} - Name:  ${item.title}`}</li>
          )
          })
        }
   </ul>
    </div>
  );
}

export default App;
