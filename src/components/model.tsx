'use client'
import { useEffect, useRef, useState } from 'react'

export function Model() {
    const ref = useRef<HTMLDivElement>(null);
    const [openModel, setOpenModel] = useState<boolean>(false)
    const handleModel = () => { setOpenModel(!openModel) }

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpenModel(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button type='button' onClick={handleModel} className='bg-red-300'>Open Model</button>
            {
                openModel && <div className='fixed top-0 left-0 flex items-center justify-center z-50  h-screen w-full'>

                    <div ref={ref} className='bg-blue-200 rounded-md w-1/2 '>
                        <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia inventore similique veniam ad, labore mollitia aliquam ipsa aperiam laboriosam, ullam debitis. Ea neque placeat sit reiciendis veniam hic dolore.</p>
                        submit close
                    </div>

                </div>
            }
        </div>
    )
}
