"use client"

import React from "react";


// For the routing to other pages to work the individul page folders have to be in the app folder, 
// not src and not a "pages" folder in the app folder that contains all the folders.


const PaginationComponent = () => {
  return (
    <>  
    {/* <div>
        <h1>The buttons below are Pagination</h1>
    </div> */}
    <div className="join">
        <a href="/">
        <button className="join-item btn">Home</button>
        </a>
        <a href="IsaiahLecture">
        <button className="join-item btn">Isaiah</button>
        </a>
        <a href="JacobLecture">
        <button className="join-item btn">Jacob</button>
        </a>
        <a href="CallApiPage">
        <button className="join-item btn">API</button>
        </a>
      
      
      
      
    </div>
    </>
  );
};

export default PaginationComponent;
