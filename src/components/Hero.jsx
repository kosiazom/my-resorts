import React from 'react'

const Hero = ({children, hero}) => {
    return (
        <header className={hero}>{ children }</header>
    )

}
Hero.defaultProps = {
    hero: "defaultHero"
      // this default is here so that the home page isnt just rendering a blank screen, so in the event there isnt a change there wil be something 
    // in the background at alltime..so i fi go to rooms and want to render something else then the props will change
}

export default Hero



