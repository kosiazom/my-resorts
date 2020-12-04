import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

 class Services extends Component {
 state = {
     services:[ 
    {
         icon: <FaCocktail/>,
         title: "Free Cocktails",
         info: " Get your free drinks here!"
     },
     {
        icon: <FaHiking/>,
        title: "Endless Trails",
        info: "Get to explore vast amounts of trails!" 
    },
    {
        icon: <FaShuttleVan/>,
        title: "Free Shuttle Services",
        info: " Take a ride anywhere!"
    },
    {
        icon: <FaBeer/>,
        title: "Taste The Beer!",
        info: " Get your free beers here!"
    }  
]
 }

    render() {
        return (
            <section className="services">
            <Title title="services" />
            <div className="services-center">
                {this.state.services.map((service, index) => {
                   return <article key={index} className='service'>
                       <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
                   </article>
                })}
            </div>
            </section>
        )
    }
}

export default Services

