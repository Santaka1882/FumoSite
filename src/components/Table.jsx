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
                        data.map(item => (
                            <tr key={item.node.en}>
                                <td 
                                    key={item.node.en} 
                                    className='border-2 border-red-500'
                                >
                                    <p className='m-2'>
                                        {item.node.en}
                                    </p>
                                    
                                </td>
                                <td 
                                    key={item.node.jp} 
                                    className='border-2 border-red-500'
                                >
                                    <p className='m-2'>
                                        {item.node.jp}
                                    </p>
                                    
                                </td>
                                <td 
                                    key={item.node.jp_alt} 
                                    className='border-2 border-red-500'
                                >
                                    <p className='m-2'>
                                        {
                                            item.node.jp_alt !== null ?
                                                item.node.jp_alt.map(item => (
                                                    <span className='block border-b-2 border-yellow-200'>{item}</span>
                                                ))
                                            : null
                                        }
                                    </p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table