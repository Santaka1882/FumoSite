import React from 'react'

import Card from './Card'

const CharacterCardGrid = ({ title, regular, puppets, dekas, straps }) => {
    return (
        <div className='w-full mx-auto mt-5 text-center md:text-left'>
            <h3 className='text-xl text-red-500 font-semibold'>{title}</h3>
            <div className='grid grid-cols-1 gap-2 mt-4 md:grid-cols-3 lg:grid-cols-4'>
                {
                    regular.map(plush => (
                        <Card key={plush.name} name={plush.name} imageId={plush.id}/>
                    ))
                }
                {   puppets !== null &&
                        puppets.map(plush => (
                            <Card key={plush.name} name={plush.name} imageId={plush.id}/>
                        ))
                }
                {
                    dekas !== null &&
                        dekas.map(plush => (
                            <Card key={plush.name} name={plush.name} imageId={plush.id}/>
                        ))
                }
                {
                    straps !== null &&
                        straps.map(plush => (
                            <Card key={plush.name} name={plush.name} imageId={plush.id}/>
                        ))
                }
            </div>           
        </div>
    )
}

export default CharacterCardGrid