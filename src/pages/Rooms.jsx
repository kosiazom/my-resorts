import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Rooms = () => {
    return (
    <Hero hero="roomsHero">
        <Banner title='our rooms'>
            <Link to='/' className='btn-primary'>
                return home
            </Link>
        </Banner>
    </Hero>
    
    
    )
    //this will overwrite the default Hero we already set up and give it a different image

}
export default Rooms
