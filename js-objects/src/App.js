import React,{ useState } from 'react';
function App() {
    
  const[ friends, setFriends ]= useState([
    {id:1,name:"Angejia",age:25,gender:"fm"},
    {id:2,name:"zack",age:19,gender:"m"},
    {id:3,name:"mirella",age:22,gender:"fm"},
    {id:4,name:"Patrick",age:27,gender:"m"}
    ]
  ); 

  const clickHandle=()=>{
    const someFriends=friends.filter((friend)=>friend.gender==="fm");

    // setFriends(friends.filter(friend=>friend.age<=19)); //tek değer gelse de bu değer bir array içerisinde gelir.
    // console.log(friends.filter(friend=>friend.age<=19));
    //console.log(someFriends);


    //setFriends([...someFriends]);  
    setFriends([...friends.filter((friend)=>friend.gender==="fm"), {id:123,name:"joe",age:15,gender:"m"}]);  //Burada yeni dizi oluşturmadan filtreleme yaptık. 3 noktanın önemi burada ortaya çıkıyor.Aslında bir dizi var fakat bir isimle tanımlaması yapılmadı.
    setFriends([...someFriends, {id:123,name:"joe",age:15,gender:"m"}]);
  };

  return (
    <div className="App">
    <button onClick={()=>clickHandle()}>Tıkla</button>
    {
      friends && friends.map((friend)=>{
        return <h4 key={friend.id} >Name : {friend.name} | Age {friend.age} | Gender : {friend.gender}</h4>      
      })
    }
    </div>
  );
}

export default App;
