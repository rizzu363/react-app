import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
     <>
    <div className="container">
      <nav className="navbar">
          <div className="btn-group">
              {
                menuList.map((curElem) => {
                    return(
                        <div className=" btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</div>
                    )
                })
              }        

          </div>
      </nav>  
      </div>
       </>
    );
};

export default Navbar
