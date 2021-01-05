import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList'
import { RoomConsumer } from '../Context'
import Loading from './Loading'

const RoomsContainer = () => {
    return (
    <RoomConsumer>
        {value => {
            const {loading, sortedRooms, rooms} = value;
            if (loading) {
                return <Loading />
            }
            
            console.log(value)

            return (
                <div>
                   Hello Rooms Container 
                   <RoomFilter rooms={rooms} />
                   <RoomList rooms={sortedRooms} />
                </div>
            );
        }}




    </RoomConsumer>
)
}

export default RoomsContainer;
