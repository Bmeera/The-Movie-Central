import React from 'react'
import './Hero.css'
import SearchMovies from '../SearchMovies/searchMovies'
import MovieCard from '../MovieCard/movieCard'

const Hero = () => {
    return (

        <div className='hero-container'>
            <div className="header flexCenter">
                <div className="logo">
                    <img className="logo" src="Logo.png" alt="" />
                </div>
                <div className="search">
                    <SearchMovies />

                </div>
                <div className="sign-in flexCenter">
                    <p>Sign in</p>
                    <img src="Menu.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero