import './App.css';
import ShowName,{ MyName } from './components/name';
//state'ler store'lardır. özellikle virtualdom'lar için kullanılır.

function App() {


 
  return (
    <div className="App">
        <ShowName/>
        <MyName/>
    </div>
  );
}

export default App;
