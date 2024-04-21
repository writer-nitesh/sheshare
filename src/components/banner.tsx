import React from 'react'

export function Banner({ message }: { message: string }) {
    return (
        <h2 className='text-center py-1 capitalize bg-primary text-white text-sm items-center '>
            {message}
        </h2>
    )
}
