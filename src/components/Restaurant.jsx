import React from 'react'
import { URL } from '../utils/constants'; 
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/customHooks/useRestaurantMenu';
import useOnlineStatus from '../utils/customHooks/useOnlineStatus';
import { useParams } from 'react-router-dom';
function Restaurant() {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu( resId );
    const onlineStatus = useOnlineStatus();
    if( onlineStatus == false )return <div>Looks like you are Offline...</div>
    return(
        <div>
            {
                resInfo.length === 0 ? <Shimmer/>
                : (
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='text-3xl font-bold'>Menu</p>
                        {
                            resInfo.map( info => (
                                <div key={ info.card.info.id }  className='border border-gray-500 p-4'>
                                    <img src={ URL + info.card.info.imageId } className='h-[150px] w-[200px] object-cover aspect-square'/>
                                    <p>{info.card.info.name}</p>
                                    <p>{info.card.info.description}</p>
                                </div>
                            ) )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Restaurant