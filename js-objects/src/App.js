
function App() {

  const clickHandle=()=>{
     var number=5; //var tekrardan tanımlanabilen bir keyword olduğu için var yerine let kullanımı tercih edilir buradaki amaç karmaşayı önlemektir.
    let number2=10;
    const sabit="h";
    //sabit='m'; 
    // alert("Hello");

    // console.log(number);
    // console.log(number2);
    
    var person= {
      name:"safak",
      lastname:"akdemir",
      age:27
    };
   
    console.log(person)
    console.log(person.name);
  }
     //çoklu satırda {} içerisinde yazabiliriz.
 
  return (
    <div className="App">
    <button onClick={clickHandle}>Tıkla</button>
    </div>
  );
}

export default App;
