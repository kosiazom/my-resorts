import React from 'react';
import {useContext} from 'react';
//useContext accepts  value returned from createContext, (which is the object) and returns the current context value for that context
import {RoomContext} from '../Context';
import Title from "../components/Title";

//get all unique values

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value] ))] //Set only accepts unique values
    

}

const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    console.log(context) //this returns everything in the state ...a great way to pass down props..context if you dont want to use higher order components then use Context
    const {
         handleChange,
         type, 
         capacity, 
         price, 
         minPrice, 
         maxPrice, 
         minSize, 
         maxSize, 
         breakfast, 
         pets
        } = context;
    
        //get unique types
    let types = getUnique(rooms, 'type');
    console.log(types)
    //add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people =   getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
          <Title title="search rooms" />
          <form className="filter-form">
              {/* {select type} */}
              <div className="form-group">
                  <label htmlFor="type">room type</label>
                  <select 
                  name="type" 
                  id="type" 
                  value={type} 
                  className="form-control"
                  onChange={handleChange}
                  >
                      {types}
                  </select>
              </div>
              {/* {end select type} */}

              {/* {guests} */}
              <div className="form-group">
                  <label htmlFor="capacity">Guests</label>
                  <select 
                  name="capacity" 
                  id="capacity" 
                  value={capacity} 
                  className="form-control"
                  onChange={handleChange}
                  >
                      { people }
                  </select>
              </div>
                {/* end guests*/}

                {/* room price  */}
                <div className="form-group">
                <label htmlFor="price">
                    room price ${price}
                </label>
                <input 
                type="range" 
                name="price" 
                min={minPrice} 
                max={maxPrice} 
                id="price" 
                onChange={handleChange} 
                className="form-control"/>

                </div>
                {/* end room price  */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input 
                        type="number" 
                        name="minSize" 
                        id="size" 
                        value={minSize} 
                        onChange={handleChange} 
                        className="size-input"
                        />

                        <input 
                        type="number" 
                        name="maxSize" 
                        id="size" 
                        value={maxSize} 
                        onChange={handleChange} 
                        className="size-input"
                        />
                    </div>
                </div>
                {/* end of size */}

                {/* extras */}
                {/* end of extras */}


          </form>
        </section>
    );
}

export default RoomFilter;
