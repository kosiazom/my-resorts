
import React, { Component } from 'react';
import defaultBcg from '../images/room-3.jpeg';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context.jsx'
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props) //the prop is being passed by react router dom

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {
       const { getRoom } = this.context;
       const room = getRoom(this.state.slug)
    //    console.log(room.name)
        if(!room) {
            return (<div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>)
        }
        const { name,
             description, 
             capacity, 
             size, 
             price, 
             extras, 
             breakfast, 
             pets, 
             images
            } = room

       return (
      <StyledHero img={images[0] || defaultBcg}> 
      
          
          <Banner title={`${name} room`}>
              <Link to='/rooms' className='btn-primary'>
                  back to rooms
              </Link>
          </Banner>
          
        </StyledHero>
       )
//line 37 allows the image to be rendered dynamically
       
    }
}

export default SingleRoom;

