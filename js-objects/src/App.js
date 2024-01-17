import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
  const[ user, setUser ]= useState({}); 

  const[users,setUsers]=useState([]);

  const changeHandler = (e)=>{
    setUser({...user, [e.target.name] : e.target.value});
  }
  const clickHandler = ()=>{
    setUsers([...users,user]);
    setUser({});
  }

  return (
    <>
      <main className='container my-5'>

      <input type='text' placeholder='Name' name='Name'  className='d-block mb-2' onChange={(e)=>changeHandler(e)}/>
      <input type='text' placeholder='LastName' name='LastName' className='d-block mb-2' onChange={(e)=>changeHandler(e)} />
      <input type='number' placeholder='Age' name='Age' className='d-block mb-2'  onChange={(e)=>changeHandler(e)}/>
      
      <h3>{user.Name} {user.LastName} {user.Age}</h3>

      <button onClick={()=>clickHandler()}> Ekle </button>
      {
        // Eğer users daha önce tanımlanmadıysa undefined'dır. Undefined'ın property'si olmaz. users && users.length şeklinde kullanabiliriz.
        users.length===0 ? <h3>Öğrenci yok.</h3> :
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index) => 
              {
                return (
                  <tr key={index}>
                    <td>{user.Name}</td>
                    <td>{user.LastName}</td>
                    <td>{user.Age}</td>
                  </tr>
                )
              })
            } 
          </tbody>

        </table>
      }
      
      </main>
    </>
  );
}

export default App;
