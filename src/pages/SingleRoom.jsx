
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
        const [mainImg,...defaultImg] = images //destructuring the images here 
        console.log(defaultImg)
       return (
           <>
      <StyledHero img={mainImg|| this.state.defaultBcg}> 
          <Banner title={`${name} room`}>
              <Link to='/rooms' className='btn-primary'>
                  back to rooms
              </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item, index) => {
                    return <img key={index} src={item} alt={name} />
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3> room information</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : ${size} SQFT</h6>
                    <h6>
                        max capacity : {
                            capacity > 1 ? `${capacity} people` : `${capacity} person`
                        }
                    </h6>
                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast ? "free breakfast included" : "no breakfast"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
               { extras.map( (extraInfo, index)=> 
               {  return <li key={index}>- {extraInfo}</li> 
                })}
            </ul>
        </section>
        </>
       )
//line 37 allows the image to be rendered dynamically
       
    }
}

export default SingleRoom;

