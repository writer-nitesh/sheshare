import { CityCard } from './card'
import { places } from '@/data/constants'

export function TrendingPlaces() {
    return (
        <div className='flex gap-4 overflow-x-scroll'>
            {places.map(({ image, name }) => (
                <CityCard key={name} image={image} name={name} />
            ))}

        </div>
    )
}


