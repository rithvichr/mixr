import React from "react"
import "./Navbar.scss"

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <span className='text'>MIXR</span>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Explore Musicians</span>
                    <span>Find a Gig</span>
                    <span>About</span>
                    <span>Sign In</span>
                    <button>Join</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar