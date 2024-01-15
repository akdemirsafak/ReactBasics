import React,{ useState } from 'react';
function App() {
    
  const[students,setStudents]= useState([]); //useState() içerisinde bir değer vermemizin sebebi null check yapmak istemeemizden dolayı.

  const clickHandle=()=>{

    const friends=[];
    friends.push({id:1,name:"anna",age:25,gender:"fm"})
    friends.push({id:2,name:"zack",age:19,gender:"m"})
    friends.push({id:3,name:"mirella",age:22,gender:"fm"})
    friends.push({id:4,name:"Patrick",age:27,gender:"m"});


    setStudents(friends);

    //console.log(students);

    for (let index = 0; index < friends.length; index++) {
      console.log(friends[index]);
    }


    };
  return (
    <div className="App">
    <button onClick={()=>clickHandle()}>Tıkla</button>
    {
      students.map((student)=>{
        return <h4 key={student.id} >Name : {student.name} | Age {student.age} | Gender : {student.gender}</h4>
      
        //eğer state'in başlangıç değeri olmasaydı aşağıdaki kullanım yapılabilirdi.:
        // students && students.map((student)=>{
        // return <h4 key={student.id} >Name : {student.name} | Age {student.age} | Gender : {student.gender}</h4>
      
      })

    }
    </div>
  );
}

export default App;
