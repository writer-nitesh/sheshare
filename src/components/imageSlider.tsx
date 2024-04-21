'use client'

import { useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"


export interface Images {
    img: string
}

export function ImageSlider({ images }: { images: Images[] }) {
    const [currentImage, setCurrentImage] = useState<number>(0)

    function handleLeft() {
        if (currentImage <= 0) {
            setCurrentImage(images.length - 1)
        }
        else {
            setCurrentImage((prev: number) => prev - 1)
        }


    }

    function handleRight() {
        if (currentImage >= images.length - 1) {
            setCurrentImage(0)
        }
        else {
            setCurrentImage((prev: number) => prev + 1)

        }
    }



    return (
        <div className="flex h-full w-full flex-col justify-between items-center  ">

            <div className="flex relative h-[500px] w-full  ">
                <button className="absolute top-1/2 left-0" onClick={handleLeft} aria-label="Previous">
                    <HiChevronLeft className="w-10 h-10 drop-shadow-md text-primary" />
                </button>

                <img src={images[currentImage].img} alt="image" className="rounded-lg object-cover object-center h-full w-full shadow-md" />

                <button className="absolute top-1/2 right-0" onClick={handleRight} aria-label="Previous">
                    <HiChevronRight className="w-10 h-10 drop-shadow-md text-primary" />
                </button>
            </div>

            <div className="relative bottom-6 flex gap-2 items-center justify-center">
                {images.map((_, index) =>
                    <div
                        key={index}
                        className={`${currentImage === index ? "bg-primary" : "bg-secondary"} cursor-pointer  rounded-full w-3 h-3`}
                        onClick={() => { setCurrentImage(index) }}
                    />
                )}
            </div>


        </div >
    )
}