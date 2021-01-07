import React from 'react';
import {useContext} from 'react';
//useContext accepts  value returned from createContext, (which is the object) and returns the current context value for that context
import {RoomContext} from '../Context';
import Title from "../components/Title";


const RoomFilter = () => {
    const context = useContext(RoomContext)
    console.log(context)


    return (
        <div>
            Hello from Room Filter
        </div>
    );
}

export default RoomFilter;
