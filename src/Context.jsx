import React, { Component } from 'react';

const RoomContext = React.createContext()
//The provider is responsible for allowing all the components(which are consumers) in the tree to access it. 
//All consumers that are desendants of a Provider will re-render whenver the Providers values prop changes

class RoomProvider extends Component {
    render() {
        return (
            <RoomContext.Provider value="hello">
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};
