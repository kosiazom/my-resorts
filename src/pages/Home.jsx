import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

//Parent to Banner ...props are being passed dow
const Home = () => {
    return (
        
           <Hero>
               <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                   <Link to="/rooms" className="btn-primary">
                       our rooms
                   </Link>
               </Banner>
               {/* defaultHero is found in the app.css */}
           </Hero>
           
        
    )
}

export default Home
