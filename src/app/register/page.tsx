import { great_vibes } from "@/utils";

export default function Register() {
    return (
        <div className="h-[90vh] m-4 overflow-hidden">
            <img
                src="/assets/images/register_bg.png"
                alt="register_bg"
                className="h-full w-full object-cover object-center rounded-xl"
            />
            <div className="relative flex flex-col justify-between py-10 h-full -top-[100%]">
                <div className="backdrop flex items-center justify-between  self-end px-4 h-[80px] rounded-l-full w-[50%]">
                    <a
                        href="/"
                        className="flex rounded-full h-14 bg-primary  py-1 
                        text-white shadow items-center justify-center px-10 "
                    >
                        Plan Vacation
                    </a>
                    <span
                        className="text-white text-5xl font-thin"
                    >
                        Find a room
                    </span>
                </div>

                <div className="text-6xl drop-shadow-md text-white flex items-center justify-center ">
                    <p className={`rotatingText ${great_vibes.className}  capitalize flex justify-center items-center gap-6`}>
                        <span className="rotatingText-adjective">list |</span>
                        <span className="rotatingText-adjective">rent |</span>
                        <span className="rotatingText-adjective">share 👌</span>
                    </p>
                </div>

                <div className="backdrop flex items-center justify-between px-4  h-[80px] rounded-r-full w-[50%]">

                    <span
                        className="text-white text-5xl font-thin"
                    >
                        Room to rent
                    </span>
                    <a
                        href="/"
                        className="flex rounded-full h-14 bg-primary  py-1 
                        text-white shadow items-center justify-center px-10 "
                    >
                        Let's Do It
                    </a>

                </div>
            </div>
        </div>
    )
}
