import {React, useState} from 'react'
import './App.css';
import Product from './product';
import Header from './header';
function App() {
  
  // function to get state of cart button
  const [show, setShow] = useState(false);
  const getDta =  (a) => {
    setShow(a);
  }
  return (
    <div className="App" >
      {/* pass down function to header to extract button state, set state show then pass down value to product */}
      <Header showing={getDta}/>
      <Product toshow={show}/>
    </div>
  );
}

export default App;
