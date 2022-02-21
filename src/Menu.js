import React from "react";
import Search from "./Search";

function Menu(props) {
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>

                <div className="search">
                    <Search />
                </div>

                <div className="actions">

                </div>

            </div>
        </div>
    );
    
}

export default Menu;