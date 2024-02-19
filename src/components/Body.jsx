import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
const Body = () => {
    const [ data , setData ] = useState([]);
    const [ filterData , setFilterData ] = useState([]);
    const [ searchValue , setSearchValue ] = useState('');

    const searchFilter = () => {
        setFilterData( data.filter( (d) => d.info.name.toLowerCase().includes(searchValue.toLowerCase()) ) )
    }
    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const res = await response.json();
        console.log(res);
        setData( res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );
        setFilterData( res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );
    }

    useEffect( () => {
        fetchData();
    } , [] );
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex gap-2">
                <input type='text'
                    placeholder="Search"
                    className="focus:outline-none border "
                    value={ searchValue }
                    onChange={ (e) => setSearchValue(e.target.value) }
                />
                <button onClick={ searchFilter }
                className="border p-3">Search</button>
            </div>
            <p className="font-bold text-3xl">Top restaurants for you</p>
            {
                filterData.length === 0 ? <Shimmer/>
                : (
                    <div className="flex flex-wrap gap-4 items-start justify-center">
                        {
                            filterData.map( (res , index) => <RestrauntCard data={ res.info } key={index}/> )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Body;