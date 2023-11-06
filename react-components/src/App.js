import './App.css';
import Product from './components/Product';
//import ShowName,{ MyName } from './components/name';
import SayHello from './components/SayHello';
//state'ler store'lardır. özellikle virtualdom'lar için kullanılır.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <div className="container pt-5" >
        {/* <ShowName/>
        <MyName/> */}


        {/* <SayHello personName="Cruel"/> */}
    
        <Product product={{title:"Pencil",description:"Red pencil. You can use for titles."}}/>
    </div>
  );
}

export default App;
