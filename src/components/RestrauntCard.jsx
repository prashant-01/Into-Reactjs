import React from 'react'
import { URL } from '../utils/constants'
import { Link } from 'react-router-dom';
const RestrauntCard = ({ data }) => {
  const {
    id ,
    name , 
    areaName , 
    costForTwo , 
    cuisines , 
    avgRating , 
    sla , 
    cloudinaryImageId
  } = data;
  return (
    <Link to={ `/restaurant/${ id }` } 
    className='w-[200px] max-h-max border hover:border-gray-600 p-3 shadow-lg hover:scale-110 transition-all duration-200 ease-in-out'>
        <img src={URL + cloudinaryImageId} className='h-[100px] w-full aspect-square object-cover'/>
        <div>
          <p className='text-xl font-semibold'>{name}</p>
          <p>
            <span className={ `font-bold ${ avgRating >= 4 ? 
            'text-green-500' : 
            avgRating >= 3 ? 'text-brown-500' 
            : 'text-red-600' }` }>⭐{ avgRating + ' ' }</span>
            <span>{sla.slaString}</span>
          </p>
          <div className='flex gap-1 flex-wrap'>
            {
              cuisines.map( (c , index) => <p key={index}>{c}</p> )
            }
          </div>
          <p>{areaName}</p>
          <p>{costForTwo}</p>
        </div>
    </Link>
  )
}

export default RestrauntCard