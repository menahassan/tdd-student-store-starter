import * as React from "react"
import "./CategoryMenu.css"

export default function CategoryMenu({handleClickCategory, category}) {
    var listClassName = "menu-item"
    var activeClassName = "menu-item active"

    return (
        <div className="row">
            <ul className="category-menu">
                {
                    category == "All Categories" 
                    ?
                    <li className= {activeClassName}><button className="btn" onClick={() => handleClickCategory("All Categories")}>All Categories</button></li>
                    : <li className= {listClassName}><button className="btn" onClick={() => handleClickCategory("All Categories")}>All Categories</button></li>
                }
                {
                    category == "food" 
                    ?
                    <li className= {activeClassName}><button className="btn" onClick={() => handleClickCategory("food")}>Food</button></li>
                    : <li className= {listClassName}><button className="btn" onClick={() => handleClickCategory("food")}>Food</button></li>
                }
                {
                    category == "clothing" 
                    ?
                    <li className= {activeClassName}><button className="btn" onClick={() => handleClickCategory("clothing")}>Clothing</button></li>
                    : <li className= {listClassName}><button className="btn" onClick={() => handleClickCategory("clothing")}>Clothing</button></li>
                }
                {
                    category == "accessories" 
                    ?
                    <li className= {activeClassName}><button className="btn" onClick={() => handleClickCategory("accessories")}>Acessories</button></li>
                    : <li className= {listClassName}><button className="btn" onClick={() => handleClickCategory("accessories")}>Accessories</button></li>
                }
                {
                    category == "tech" 
                    ?
                    <li className= {activeClassName}><button className="btn" onClick={() => handleClickCategory("tech")}>Tech</button></li>
                    : <li className= {listClassName}><button className="btn" onClick={() => handleClickCategory("tech")}>Tech</button></li>
                }
            </ul>
        </div>
    ) 
  }