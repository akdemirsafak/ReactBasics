import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productRequests } from './requests/product';

function App() {
  const [product,setProduct]=useState({});
  const [products,setProducts]=useState([]);
  
  useEffect(() =>{
    productRequests.get().then((res)=>{ 
      setProducts(res.data.data);
    })
  },[])

    const clickHandle = ()=>{
      productRequests.post(product)
        .then((response)=>{
            setProducts([...products,response.data.data]);
            //setProduct() Inputları temizleyemiyoruz 
        }).catch((error)=>console.log(error))
    }
    const removeProduct=(productId)=>{
      productRequests.delete(productId)
      .then((response)=>{
        console.log(response);
        setProducts(products.filter(x=>x.id!==productId))
      })
    }
  return (
    <div className='container mt-5'>
      <h3>Var olan Datalarımız : </h3>
      {
        products.length===0?<h3>ürün yok</h3> :
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
          {
            products.map((item,index)=>{
              return(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><button className='btn btn-danger' onClick={()=>removeProduct(item.id)}>Delete</button></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        
      }
      <hr/>
      <h3> Ekle</h3>
      <input className='form-control mb-2' name='name' type='text' placeholder='Name' onChange={(e)=>setProduct({...product, name : e.target.value})}/>
      <input className='form-control mb-2' name='price' type='text' placeholder='Price' onChange={(e)=>setProduct({...product, price : e.target.value})}/>
      <button className='btn btn-outline-primary' onClick={()=>clickHandle()}>Add New Product</button>
   
    </div>
  );
}

export default App;
