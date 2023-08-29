import React from 'react'

const Table = ({data, title, headers}) => {
    return (
        <div className='my-4'>
            <h3 className='text-xl text-red-500 font-semibold'>{title}</h3>

            <table className='w-full my-4 text-center border-2 border-red-500 md:text-lg lg:text-xl'>
                <thead>
                    <tr key="headers" className='text-yellow-200'>
                        {
                            headers.map(header => (
                                <td 
                                    key={header} 
                                    className='border-spacing-0 border-2 border-red-500 bg-red-500'
                                >
                                    {header}
                                </td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            const data = item.node
                            const values = Object.values(data)
                            return (
                                <tr>
                                    {
                                        values.map(value => (
                                            value !== null ?
                                                <td 
                                                    key={value} 
                                                    className='border-2 border-red-500'
                                                >
                                                    <p className='m-2'>
                                                        {
                                                            typeof value === "string" ?
                                                                <span>{value}</span>
                                                            :
                                                                value.map(item => (
                                                                    <span 
                                                                        key={item} 
                                                                        className='block border-b-2 border-yellow-200'
                                                                    >
                                                                        {item}
                                                                    </span>
                                                                ))
                                                        }
                                                    </p>
                                                    
                                                </td>
                                            : null
                                        ))
                                    }        
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table