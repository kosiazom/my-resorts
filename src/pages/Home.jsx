import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms  from '../components/FeaturedRooms'
import { Link } from 'react-router-dom'
import Button from '../components/StyledHero'

//Parent to Banner & Hero ...props are being passed down
const Home = () => {
    return (
        <>
           <Hero>
               <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                   <Link to="/rooms" className="btn-primary">
                       our rooms
                   </Link>
               </Banner>
               {/* defaultHero is found in the app.css */}
           </Hero>
               <Services />
               <FeaturedRooms />
               <Button>I am a styled Buttone</Button>
           </>
           
        
    )
}

export default Home
