import React from 'react'
import { Hero, Hotels, TrendingPlaces } from '@/components';
import { great_vibes } from '@/utils';




export default function Home() {

  return (
    <div className='flex my-4 flex-col gap-4 items-center justify-center'>
      <Hero />

      <div className='flex flex-col gap-4 items-center justify-center overflow-hidden' >
        <h1 className={`text-5xl  py-5 text-primary ${great_vibes.className}`}>Trending Places</h1>
        <TrendingPlaces />
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className={`text-5xl  py-5 text-primary ${great_vibes.className}`}>Top Hotels</h1>
          <Hotels />
        </div>
      </div>


  )
}
