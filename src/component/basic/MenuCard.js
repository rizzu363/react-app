import React from 'react';

const MenuCard = ({ menuData }) => {
    return (
        <>
        {menuData.map((curElem) => {
          const {id, name, category, image, description} = curElem;
         return (
          <>   
            <div className="col-sm-4">
            <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span className="card-author subtle">   {name} </span>
                    <h2 className="card-title"> {category} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={process.env.PUBLIC_URL + image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div> 
            </div>
              
                  
          </>

         )

        })}
      
        </>
    )
}

export default MenuCard;
