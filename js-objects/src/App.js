import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userRequests } from './requests/user';

function App() {
  const [user,setUser]=useState({});
  
    //useEffect(()=>{
      // axios.get("https://localhost:7079/Content").then((response)=>{
      //   setData(response.data.data);
      //   console.log(response.data.data);
      // })
    //},[]);
    const clickHandle = ()=>{
      userRequests.register(user)
        .then((response)=>{
          console.log(response);
        }).catch() //catch for error cases
    }
  return (
    <div className='container mt-5'>
        <input className='form-control' name='email' type='email' placeholder='Email' onChange={(e)=>setUser({...user, email : e.target.value})}/>
        <input className='form-control' name='password' type='text' placeholder='Password' onChange={(e)=>setUser({...user, password : e.target.value})}/>
        <input className='form-control' name='confirmPassword' type='text' placeholder='Password Again' onChange={(e)=>setUser({...user, confirmPassword : e.target.value})}/>
        <button className='btn btn-primary' onClick={()=>clickHandle()}>Register</button>
      
    </div>
  );
}

export default App;
