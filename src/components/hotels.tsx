import { hotels } from '@/data/constants'
import { HotelCard } from './card'

export function Hotels() {
    return (
        <div className='flex flex-wrap gap-8 items-center justify-center'>
            {
                hotels.map(({ image, name, rating }) => {
                    return (<HotelCard key={name} image={image} name={name} rating={rating} />)
                })
            }
        </div>
    )
}
