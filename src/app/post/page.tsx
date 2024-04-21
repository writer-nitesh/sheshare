
import { ImageSlider } from '@/components'
import React from 'react'
import { HiShieldCheck, HiStar } from 'react-icons/hi2'

const images = [
    { img: 'https://a0.muscache.com/im/pictures/e2c7a4f1-0cc5-4a45-94ab-adb95b8c7493.jpg?im_w=1200' },
    { img: 'https://a0.muscache.com/im/pictures/af048451-a0be-49a7-9dfc-1aca0e31b3df.jpg?im_w=720' },
    { img: 'https://a0.muscache.com/im/pictures/76d16bcb-5bb9-4537-b847-f57babeba966.jpg?im_w=720' },
    { img: 'https://a0.muscache.com/im/pictures/19c13723-1439-4bb4-bf9b-69f228c51ea2.jpg?im_w=720' },
    { img: 'https://a0.muscache.com/im/pictures/e3bf5042-4d86-41d7-9a63-ec6c976dee5d.jpg?im_w=720' },
    { img: 'https://a0.muscache.com/im/pictures/47b117b8-aadc-4979-a03f-92b6572bc04e.jpg?im_w=720' },
    { img: 'https://a0.muscache.com/im/pictures/9011fb11-af37-4ebb-aad2-bd7335b39e7b.jpg?im_w=720' }
]

export default function Post() {
    return (
        <div className='flex '>

            <div className='h-full w-full px-10'>
                <ImageSlider images={images} />
                <div className='flex flex-col gap-2  '>
                    <h1 className='text-2xl font-bold text-primary' >Garden View Hotel</h1>
                    <div className='flex flex-col gap-2'>
                        <h2 className=' font-medium text-secondary'>Description</h2>
                        <p className='text-sm text-gray-600'>
                            The POP 89779 Garden View Hotel & Restaurant is a budget hotel with standardised amenities at the best value. Situated in Gurgaon, 17 km from Ambience Mall and 15 km from DLF CyberHub, this property offers an in-house restaurant with quality food and CCTV cameras for added security.

                        </p>
                        <button className='text-primary text-sm'>Read More</button>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27667.184962539275!2d81.01177439247846!3d26.848319441581726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd09c18f1e13%3A0xbf01e68d3158fb37!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1713679761744!5m2!1sen!2sin" className='rounded-lg h-80 mt-6'   loading="lazy" ></iframe>
                </div>


            </div>



            <div className='h-full w-4/12 p-2 flex flex-col  gap-4'>
                <h1 className='capitalize text-xl  font-light text-primary'>Consider these also</h1>

                <div className='flex flex-col gap-4'>



                    <div className='flex h-48  overflow-hidden gap-2'>
                        <img
                            src="https://images.oyoroomscdn.com/uploads/hotel_image/222815/medium/dygsvrnybqxx.jpg"
                            alt=""
                            className='h-full w-1/2 object-cover object-center rounded-lg'
                        />
                        <div className='flex flex-col gap-2 justify-between'>
                            <div className='space-y-1'>
                                <h1 className='capitalize  text-lg font-bold text-primary '>Singh's Hotel</h1>
                                <p className='text-sm text-gray-500   '>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit non accusamus quae.
                                </p>
                            </div>


                            <div>
                                <div className="flex gap-2 justify-center ">
                                    <h1 className='text-primary'>₹ 500</h1>
                                    <div className="flex gap-2 items-center justify-center">
                                        <HiShieldCheck className="text-secondary size-6" />
                                    </div>

                                    <div className="flex items-center bg-primary text-white px-2 justify-center gap-2">
                                        <span className="text-xs">4.5</span>
                                        <HiStar className="size-4" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex h-48  overflow-hidden gap-2'>
                        <img
                            src="https://images.oyoroomscdn.com/uploads/hotel_image/222815/medium/dygsvrnybqxx.jpg"
                            alt=""
                            className='h-full w-1/2 object-cover object-center rounded-lg'
                        />
                        <div className='flex flex-col gap-2 justify-between'>
                            <div className='space-y-1'>
                                <h1 className='capitalize  text-lg font-bold text-primary '>Singh's Hotel</h1>
                                <p className='text-sm text-gray-500   '>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit non accusamus quae.
                                </p>
                            </div>


                            <div>
                                <div className="flex gap-2 justify-center ">
                                    <h1 className='text-primary'>₹ 500</h1>
                                    <div className="flex gap-2 items-center justify-center">
                                        <HiShieldCheck className="text-secondary size-6" />
                                    </div>

                                    <div className="flex items-center bg-primary text-white px-2 justify-center gap-2">
                                        <span className="text-xs">4.5</span>
                                        <HiStar className="size-4" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex h-48  overflow-hidden gap-2'>
                        <img
                            src="https://images.oyoroomscdn.com/uploads/hotel_image/222815/medium/dygsvrnybqxx.jpg"
                            alt=""
                            className='h-full w-1/2 object-cover object-center rounded-lg'
                        />
                        <div className='flex flex-col gap-2 justify-between'>
                            <div className='space-y-1'>
                                <h1 className='capitalize  text-lg font-bold text-primary '>Singh's Hotel</h1>
                                <p className='text-sm text-gray-500   '>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit non accusamus quae.
                                </p>
                            </div>


                            <div>
                                <div className="flex gap-2 justify-center ">
                                    <h1 className='text-primary'>₹ 500</h1>
                                    <div className="flex gap-2 items-center justify-center">
                                        <HiShieldCheck className="text-secondary size-6" />
                                    </div>

                                    <div className="flex items-center bg-primary text-white px-2 justify-center gap-2">
                                        <span className="text-xs">4.5</span>
                                        <HiStar className="size-4" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex h-48  overflow-hidden gap-2'>
                        <img
                            src="https://images.oyoroomscdn.com/uploads/hotel_image/222815/medium/dygsvrnybqxx.jpg"
                            alt=""
                            className='h-full w-1/2 object-cover object-center rounded-lg'
                        />
                        <div className='flex flex-col gap-2 justify-between'>
                            <div className='space-y-1'>
                                <h1 className='capitalize  text-lg font-bold text-primary '>Singh's Hotel</h1>
                                <p className='text-sm text-gray-500   '>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit non accusamus quae.
                                </p>
                            </div>


                            <div>
                                <div className="flex gap-2 justify-center ">
                                    <h1 className='text-primary'>₹ 500</h1>
                                    <div className="flex gap-2 items-center justify-center">
                                        <HiShieldCheck className="text-secondary size-6" />
                                    </div>

                                    <div className="flex items-center bg-primary text-white px-2 justify-center gap-2">
                                        <span className="text-xs">4.5</span>
                                        <HiStar className="size-4" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}
