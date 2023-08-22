import React from 'react'
import Image from './Image'

const Card = ({ name, imageId }) => {

  return (
    <div className='flex flex-col items-center self-center rounded-md bg-red-500 overflow-hidden'>
        <div className='w-[90%] mt-4'>
          <Image
              id={imageId}
              alt={name} 
          />
        </div>
        
        <div className='py-2'>
            <p className='text-yellow-200 font-semibold text'>{name}</p>
        </div>
    </div>
  )
}

export default Card