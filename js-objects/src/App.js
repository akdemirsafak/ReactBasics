
function App() {
const clickHandle=()=>{
    const student={id:1,name:"adam",age:6};
    const student2={id:8,name:"lana",age:15};
    const students=[student,student2];
    console.log(students[0].name);
    students[3]={id:2,name:"ali",age:27};
    console.log(students[3].name);
    console.log(students[2]);
    students.push({id:7,name:"person",age:67});
    console.log(students);
  }
  return (
    <div className="App">
    <button onClick={()=>clickHandle()}>Tıkla</button>
    </div>
  );
}

export default App;
