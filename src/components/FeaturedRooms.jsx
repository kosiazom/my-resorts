import React, { Component } from 'react';
import {RoomContext} from '../Context'
import Room from './Room'
import Loading from './Loading'
import Title from './Title'

class FeaturedRooms extends Component {

    static contextType = RoomContext
    //when you assign a content type then that component is able to read the value of that prop..react will then be able to find the closest Provider and use its value
    render() {
     const { loading, featuredRooms: rooms } = this.context //gives you access to the whole context you use this so you dont have to keep passing props down 
       
     console.log(rooms)
       
        return (
            <div>
              from featured rooms
              <Room />
              <Loading />
            </div>
        );
    }
}

export default FeaturedRooms;
