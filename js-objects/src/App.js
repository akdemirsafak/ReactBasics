import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
  const[ user, setUser ]= useState({}); 


  return (
    <div className="App">
      <main className='container my-5'>
      <input type='text' placeholder='Name'  className='d-block mb-2' onChange={(e)=>setUser({...user,name:e.target.value})}/>
      <input type='text' placeholder='LastName' className='d-block mb-2' onChange={(e)=>setUser({...user,lastname:e.target.value})} />
      <input type='number' placeholder='Age'  className='d-block mb-2'  onChange={(e)=>setUser({...user,age:e.target.value})}/>

      <h3>{user.name} {user.lastname} {user.age}</h3>
      </main>
    </div>
  );
}

export default App;
