import { ReactNode } from "react";
import { HiMapPin, HiShieldCheck, HiStar } from "react-icons/hi2"

export interface HotelCardProps {
  image: string
  name: string
  rating: number
}

export function HotelCard({ image, name, rating }: HotelCardProps) {
  return (
    <a href="/post" className="flex flex-col gap-2 h-80 w-80  text-gray-500 font-light justify-between">
      <div className="rounded-lg shadow-md ">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover object-center rounded-lg"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm capitalize">{name}</span>

        <div className="flex gap-2">
          <div className="flex gap-2 items-center justify-center">
            <span className="text-xs">Secured</span>
            <HiShieldCheck className="text-secondary size-6" />
          </div>

          <div className="flex items-center bg-primary text-white px-2 justify-center gap-2">
            <span className="text-xs">{rating}</span>
            <HiStar className="size-4" />
          </div>
        </div>
      </div>
    </a>
  );
}
export interface CityCardProps {
  image: string
  name: string
}

export function CityCard({ image, name }: CityCardProps) {
  return (
    <a href="/" className="relative w-64 h-[350px] rounded-lg  overflow-hidden">
      <div className="opacity-0 absolute top-0 left-0 w-full h-full flex-col gap-2 gradient transition-opacity duration-500 ease-in-out	  p

hover:opacity-100 flex items-center justify-center">
        <HiMapPin className="text-primary size-10" />
        <span className="text-white text-2xl font-light capitalize text-center">{name}</span>
      </div>
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover gradient " />
    </a>


  )
}
export interface HighlightCardProps {
  image: string
  children: string
}
export function HighlightCard({ image, children }: HighlightCardProps) {
  return (
    <a href="" className="relative w-52 h-[350px] rounded-lg overflow-hidden border-2 hover:border-primary ">
      <div className="absolute  top-0 left-0 w-full h-full flex-col gap-2 gradient_higlight flex items-start justify-end p-2">
        <p className="text-white text-sm font-light capitalize  max-h-56  overflow-hidden">
          {children}
        </p>
      </div>
      <img
        src={image}
        aria-label="image"
        className="h-full w-full object-cover gradient " />
    </a>


  )
}


export function QuestionCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="border-[1px]  min-h-16 w-full px-4 py-2 border-primary rounded-md 
      flex flex-col items-start justify-center text-gray-600 font-light"
    >
      <div className="flex items-center justify-center gap-2 py-1">
        <div className='h-8 w-8 rounded-full p-0.5 border-2 border-primary'>
          <img
            src="https://t3.ftcdn.net/jpg/06/46/00/00/360_F_646000029_JTtTlIY4MgOhl6U36hjDFsRjzMkRw9d1.jpg" alt="profile"
            className='h-full w-full object-cover rounded-full object-top'
          />
        </div>
        <h1 className="text-primary">Kamala Harris</h1>
      </div>
      {children}
    </div>
  )
}