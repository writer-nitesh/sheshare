'use client'
import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMap, HiMapPin } from 'react-icons/hi2'
import { DateRangePicker } from 'react-date-range';
import { IoCalendarOutline } from "react-icons/io5";
import { great_vibes } from '@/utils';

export function Hero() {
    const [showCalender, setshowCalender] = useState<boolean>(false)
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    function handleSelect() {

    }
    function handleCalender() {
        setshowCalender(!showCalender)
    }
    return (
        <div className='flex flex-col w-full px-5'>

            <div className='bg-secondary shadow-md h-32 mx-5 rounded-t-lg flex items-center  '>
                <div
                    className='flex items-center gap-4 px-4 h-16 bg-white w-full rounded-md overflow-hidden mx-4 '
                >
                    <HiMapPin className='text-primary size-8' />
                    <input
                        type="text"
                        className='outline-none font-light w-full h-full text-lg text-gray-400 '
                        placeholder='Search Destination'
                    />
                    <div>
                        <button title='Choose Date' onClick={handleCalender} > <IoCalendarOutline className='size-8 text-primary' /></button>

                        {
                            showCalender && <DateRangePicker
                                ranges={[selectionRange]}
                                onChange={handleSelect}
                                className='absolute right-8 top-56'

                            />
                        }
                    </div>


                    <button
                        className='flex items-center gap-2 bg-primary h-12 px-4 rounded-md text-white'
                        aria-label='search'
                    >
                        <HiMagnifyingGlass className='size-5' />
                        <span>Search</span>
                    </button>

                </div>
            </div>
            <div className='h-72 shadow-md'>
                <img
                    src="https://plus.unsplash.com/premium_photo-1712685296167-40032b5bcea3?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className='flex w-full h-full object-cover object-center rounded-lg'
                />


            </div>

        </div>
    )
}
