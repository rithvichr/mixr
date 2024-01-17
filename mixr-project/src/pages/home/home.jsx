import React from "react"
import "./home.scss"
import Featured from "../../components/featured/Featured"
import {cards} from "../../data"
import Slide from "../../components/slide/Slide"
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
    return(
        <div className="home">
            <Featured/>
            <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
                  <CatCard key={card.id} card={card} />
            ))}
            </Slide>
        </div>
    )
}

export default Home