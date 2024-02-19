import { useEffect, useState } from "react";
import { MENU_API } from "../constants";

const useRestaurantMenu = ( resId ) => {
    const [ resInfo , setResInfo ] = useState([]);

    const fetchMenu = async () => {
        const res = await fetch( MENU_API + `${resId}` );
        const jsonData = await res.json();
        setResInfo( jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards );
    }
    useEffect( ()=>{
        console.log(resId);
        fetchMenu();
    } , [])

    return resInfo;
}

export default useRestaurantMenu;