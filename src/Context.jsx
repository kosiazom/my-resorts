import React, { Component } from 'react';
import items from './data'


const RoomContext = React.createContext()
//The provider is responsible for allowing all the components(which are consumers) in the tree to access it. 
//All consumers that are desendants of a Provider will re-render whenver the Providers values prop changes
//this can only be done a class component and not a functional one
class RoomProvider extends Component {

    state = {
       rooms:[]
    }

    render() {
        return (
            //the provider is what allows you to pass this value to the tree and any component can read it!
            <RoomContext.Provider value={{ ...this.state}}> 
            
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};
