import React from 'react'
import { Logo } from './logo'
import { description, social, contact, name } from "@/application.json";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className='flex flex-col mt-4 ' >


            <div className='bg-accent rounded-md translate-y-4 p-4 flex items-center justify-between mx-10 shadow-lg'>
                <div className='flex flex-col items-center '>
                    <div><Logo /></div>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <input
                        type="text"
                        placeholder='Enter your E-mail'
                        className='py-1 px-2 outline-none rounded-md bg-secondary text-white placeholder:text-white '
                    />
                    <button  type='button'>Subscribe</button>
                </div>
            </div>

            <div className='bg-primary text-white py-2 px-4'>
                <div className=' flex lg:flex-row flex-col items-center pt-8 justify-between gap-8 px-4'>

                    <div className='flex lg:flex-row flex-col gap-4 w-full justify-between px-2'>
                        <div className=''>
                            <h1 className='font-bold uppercase'>About Us</h1>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">careers</a></li>
                            </ul>

                        </div>
                        <div className=''>
                            <h1 className='font-bold uppercase'>Support</h1>
                            <ul>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Cancellation Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                            </ul>

                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold uppercase'>Become a Host</h1>
                            <ul>
                                <li><a href="#">Hosting Resources</a></li>
                                <li><a href="#">Hosting Responsibiilty</a></li>
                                <li><a href="#">Share a Room</a></li>
                            </ul>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='font-bold uppercase'>Terms & Privacy</h1>
                            <ul>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center py-2 items-center gap-2'>
                    <h1>Follow Us</h1>
                    <div className='flex gap-2 items-center'>
                        <a href={social.facebook} aria-label='facebook link'><FaFacebookSquare className='size-5' /></a>
                        <a href={social.instagram} aria-label='instagram link'><FaInstagram className='size-5' /></a>
                        <a href={social.twitter} aria-label='facebook link'><FaXTwitter className='size-5' /></a>
                        <a href={social.linkedin} aria-label='facebook link'><FaLinkedin className='size-5' /></a>
                    </div>
                </div>
                <hr />
                <div className='pt-2 space-x-4 text-center text-xs'>
                    <p>ⓒ 2016-{new Date().getFullYear()}  {name}. All rights reserved</p>
                </div>
            </div >



        </footer >
    )
}
