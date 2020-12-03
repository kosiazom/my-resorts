import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import { Link } from 'react-router-dom'

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
           </>
           
        
    )
}

export default Home
