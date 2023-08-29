import React from 'react'

const Paragraph = ({ children }) => {
    return (
        <p className='my-5 text-justify tracking-wide md:text-lg'>
            { children }
        </p>
    )
}

export default Paragraph