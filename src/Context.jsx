import React, { Component } from 'react';
import items from './data'


const RoomContext = React.createContext()
//The provider is responsible for allowing all the components(which are consumers) in the tree to access it. 
//All consumers that are desendants of a Provider will re-render whenver the Providers values prop changes
//this can only be done a class component and not a functional one
class RoomProvider extends Component {

    state = {
       rooms:[], 
       sortedRooms: [],
       featuredRooms: [], 
       loading: true
    }
    
    componentDidMount(){
        let rooms = this.formatData(items)
        console.log(rooms)
        let featuredRooms = rooms.filter(room => room.featured === true)

        this.setState({
            rooms, 
            sortedRooms: rooms, 
            featuredRooms, 
            loading: false
        })
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => 
                image.fields.file.url);

            let room = {...item.fields, images, id}

            return room
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        console.log(tempRooms)
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }

    render() {
        return (
            //the provider is what allows you to pass this value to the tree and any component can read it!
            <RoomContext.Provider value={{ ...this.state,
            getRoom: this.getRoom }}> 
            
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext};
