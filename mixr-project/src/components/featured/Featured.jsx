import React from 'react'
import "./featured.scss"

const Featured = () => {
    return(
        <div className='featured'>
            <div className="container">
                <div className="left">
                <h1>Find the <i>perfect</i> musician for your event</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt=""/>
                        <input type="text" placeholder='Try "Jazz Quartet"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>DJs</button>
                    <button>Vocalists</button>
                    <button>Jazz</button>
                    <button>Guitarists</button>
                </div>
                </div>
                <div className="right">
                    <img src="./img/guitarist.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Featured