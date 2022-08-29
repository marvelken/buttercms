import React from "react";
import "./App.css";

function Header({showing}) {
  //host this in butter
//   burron state
    const [show, setShow] = React.useState(false);
  return (
    <div>
      <div className="d">
        <h1 className="header">WELCOME TO BUTTER PIZZA</h1>
        {/* view cart button */}
        <button href="/cart" className="cart-btn" onClick={()=>{setShow(!show)
        showing(!show)
        }}>
          {show? "close": "View Cart"}
        </button>
      </div>
      
    </div>
  );
}

export default Header;