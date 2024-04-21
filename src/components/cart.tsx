'use client'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

export function Cart() {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)


    function handleCart() {
        setIsCartOpen(true)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsCartOpen(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='flex flex-col items-end'>
            <div className='flex'>
                <button aria-label="cart"><HiOutlineShoppingBag className="size-6" onClick={handleCart} /></button>
                <div
                    className='relative -top-2 bg-red-600 rounded-full w-5 h-5 text-[10px] flex items-center align-middle justify-center p-2 text-white'
                >
                    <span className='text-center'>0</span>
                </div>
            </div>


            {
                isCartOpen &&
                <div ref={ref} className='absolute w-96  rounded-md p-2  top-20 z-10 right-8 bg-white shadow-md '>

                    <div className=' max-h-96'>
                        Cart is Empty
                    </div>
                    <button type='button' className='w-full '>Checkout</button>
                </div>

            }

        </div>
    )
}
