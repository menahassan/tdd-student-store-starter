import { useState, useEffect} from "react"
import * as React from "react"
import "./Hero.css"

export default function Hero({handleSearch}) {
    const [name, setName] = useState("");

    useEffect(async () => {
        handleSearch(name)
      });
    return (
        <div className="hero">
                <div className="content">
                    <div className="intro">
                        <h1>Welcome!</h1>
                    </div>
                    <div className="img-container">
                        <img className="hero-img" src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="hero image" />
                    </div>
                    <div className="form">
                        <form id="search-form">
                        <input id="search-input" type="text" placeholder="Search" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        </form>
                    </div>
            </div>
        </div>
    ) 
  }