import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
    const[active, setActive] = useState(false)
    const[open, setOpen] = useState(false)

const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
};

useEffect(()=>{
    window.addEventListener("scroll", isActive);
    return ()=>{
        window.removeEventListener("scroll", isActive);
    }
}, [])

const currentUser= {
    id:1,
    username: "John Doe",
    isSeller: true 
}

    return(
        <div className={active ? "navbar active" : "navbar"}>
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
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="https://cdn4.vectorstock.com/i/1000x1000/17/53/dj-avatar-playing-music-graphic-vector-9421753.jpg" alt="" />
                            <span>{currentUser?.username}</span>
                           {open && <div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                        <span>Orders</span>
                                        <span>Messages</span>
                                        <span>Logout</span>
                                        </>
                                    )
                                }
                            </div>}
                        </div>
                     )}
                </div>
            </div>
            {active && (
            <>
            <hr />
            <div className="menu">
                <span>Test</span>
                <span>Test2</span>
                <span>Test3</span>
            </div>
            </>
            )}
        </div>
    )
}

export default Navbar