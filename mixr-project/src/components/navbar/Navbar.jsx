import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
    const[active, setActive] = useState(false)
    const[open, setOpen] = useState(false)

    const {pathname} = useLocation

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
        <div className={active || pathname !=="/"  ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                    <span className='text'>MIXR</span>
                    </Link>
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
                                        <Link classname="link" to="/mygigs">Gigs</Link>
                                        <Link classname="link" to="/add">Add New Gig</Link>
                                        </>
                                    )}
                                        <Link classname="link" to="/orders">Orders</Link>
                                        <Link classname="link" to="/messages">Messages</Link>
                                        <Link classname="link" to="/">Logout</Link>
                            </div>}
                        </div>
                     )}
                </div>
            </div>
            {(active || pathname !=="/") && (
            <>
            <hr />
            <div className="menu">
                <Link className="link menulink" to="/">All Musicians</Link>
                <Link className="link" to="/">Rock</Link>
                <Link className="link" to="/">DJs</Link>
                <Link className="link" to="/">Pianists</Link>
                <Link className="link" to="/">Jazz</Link>
                <Link className="link" to="/">Blues</Link>
                <Link className="link" to="/">Vocalists</Link>
            </div>
            </>
            )}
        </div>
    )
}

export default Navbar