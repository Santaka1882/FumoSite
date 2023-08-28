import React from 'react'

const prosConsTable = ({title, content}) => {
    return (
        <div className='my-4'>
            <h3 className='text-xl text-red-500 font-semibold'>{title}</h3>

            <table className='w-full my-1 text-center border-2 border-red-500 md:text-lg lg:text-xl'>
                <thead>
                    <tr className='text-yellow-200'>
                        <td className='border-spacing-0 border-2 border-red-500 bg-red-500 w-1/2'>
                            Pros
                        </td>
                        <td className='border-spacing-0 border-2 border-red-500 bg-red-500 w-1/2'>
                            Cons
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map(row => (
                            <tr>
                                <td className='border-2 border-red-500'>
                                    <p className='m-2'>{row.pro}</p>
                                </td>
                                <td className='border-2 border-red-500'>
                                    <p className='m-2'>{row.con}</p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default prosConsTable