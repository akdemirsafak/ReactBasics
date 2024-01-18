import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data,setData]=useState(0);
    // const getDatas= async()=>{

    //   setTimeout(()=>{
    //     setData(5);
    //   },1500);
    // }
      const getDatas= async()=>{
        //Data return etmesi için promise değeri oluşturmamız gerekli

     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(5);
      },2000);
      if(data===1){
        reject("Başarısız");
      }
     })
     //Resolve işlem başarılı gerçekleştiği durumda, reject ise işlem başarısızlığa uğradığı durumda 
    }
    //---------
    useEffect(()=>{
      getDatas()
      .then((result)=>setData(result))
      .catch((error)=>{alert(error)});
    },[])


  return (
    <div>
      {/* <button onClick={getDatas}>Tıkla</button> */}
      {
        data===0 ? <p>Yükleniyor</p>:<p>{data}</p>
      }
    </div>
  );
}

export default App;
