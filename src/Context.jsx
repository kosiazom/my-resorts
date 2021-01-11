import React, { Component } from 'react';
// import items from './data';
import Client from './Contentful';

// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: "c7qplrb7bbfg",
//   accessToken: 'AuUK7-xahZhzTLp0vggiuYJ7Hu5VgB4OHNnaK54exTc'
// })

// const response = await client.getEntries()
// .console.log(response.items)

const RoomContext = React.createContext()
//The provider is responsible for allowing all the components(which are consumers) in the tree to access it. 
//All consumers that are desendants of a Provider will re-render whenver the Providers values prop changes
//this can only be done a class component and not a functional one
class RoomProvider extends Component {

    state = {
       rooms:[], 
       sortedRooms: [],
       featuredRooms: [], 
       loading: true, 
       type: 'all',
       capacity: 1,
       price: 0,
       minPrice: 0,
       maxPrice: 0,
       maxSize: 0,
       minSize:0,
       breakfast: false,
       pets: false
    };
    
    //getData
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "beachResortRoom",
                order: 'sys.createdAt' // order from when it was created
            });
            let rooms = this.formatData(response.items)
            console.log(rooms);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(room =>
                room.price));
            let maxSize = Math.max(...rooms.map(room =>
                    room.size));
                 
         
            this.setState({
                rooms, 
                sortedRooms: rooms, 
                featuredRooms, 
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            })
        } catch (error) {
            console.log(error)
        }

    }
    componentDidMount(){
       this.getData()
    };

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => 
                image.fields.file.url);

            let room = {...item.fields, images, id}

            return room
        })
        return tempItems
    };

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        //console.log(tempRooms)
        const room = tempRooms.find(room => room.slug === slug)
        return room
    };

    handleChange = (e) => {
        const target = e.target;
        
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = e.target.name;

        this.setState(
            {
            [name] : value
            }, 
            this.filterRooms )
        // console.log(e.type)
       
        //console.log(`this is type: ${type}, name: ${name}, value:${value}`)
    };

    filterRooms = () => {
        let {
            rooms, 
            type, 
            capacity, 
            price, 
            minSize, 
            maxSize, 
            breakfast, 
            pets
        } = this.state
    // all the rooms
        let tempRooms = [...rooms];
    // transform value
        capacity = parseInt(capacity);
        price = parseInt(price)

    // filter by type 
        if(type !== 'all'){
            tempRooms = tempRooms.filter( room => room.type === type);
        }
    // filter by capacity
        if(capacity !== 1 ) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
            };

    // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)

    // filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <=  maxSize)
    //filter breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
    //filter pets
        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

    
    //change state
        this.setState({
            sortedRooms : tempRooms
        })
    };



    render() {
        return (
            //the provider is what allows you to pass this value to the tree and any component can read it!
            <RoomContext.Provider 
            value={{ 
            ...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange
            
            }}> 
            
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
