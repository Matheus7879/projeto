import {Footer} from "../components/Footer"

export function TemplatePage(){ 
    return <div>
        <div className="pl-12 pt-56">
            <span className="text-[14px] tracking-widest text-gray-800">TEMPLATES BY THE MAKERS OF TAILWIND CSS</span>
        </div>
        <div className="pt-2 pl-10">
            <span className="text-6xl tracking-tight">Modern website templates,<br></br>crafted with Tailwind CSS.</span>
        </div>
        <div className="flex">
        <div className="pt-9 pl-12">
            <span className="ri-reactjs-fill text-3xl text-gray-400"></span>
        </div>
           <div className="pl-3 text-bold pt-10">
            <span className="font-medium">React</span>
            </div>
            <div className="pt-9 pl-10">
            <span className="ri-nextjs-line text-3xl text-gray-300"></span>
            </div>
            <div className="pl-3 text-bold pt-10">
            <span className="font-medium">Next.js</span>
            </div>
        </div>

        <div className="pt-8 pl-12">
            <span className="text-gray-600 font-medium text-[18px] tracking-wider tracking-tighter">Visually-stunning, easy to
        customize site templates built with React and<br></br> 
        Next.js. The perfect starting point for your next project and the ultimate<br></br>
        resource for learning how experts build real websites with Tailwind CSS. 
            </span>
        </div>
        <div className="flex">
        <div className="pt-12 pl-12">
            <button className="border bg-black text-white p-2 rounded-r-full rounded-l-full font-medium">Browse templates</button>
        </div>
        <div className="pt-12 pl-4">
            <button className="border rounded-l-full rounded-r-full font-medium p-2 border-gray-300">Get everything with Tailwind Plus</button>
        </div>
        </div>
        <div className="flex">
        <div className="pl-12 pt-24">
        <span className="text-sky-500 text-3xl ri-tailwind-css-fill"></span>
        </div>
        <div className="pt-25 pl-2">
            <span className="text-[18px] font-medium">tailwind</span>
            <span className="text-[16px] font-medium text-sky-500">PLUS</span>
        </div>
        </div>
<Footer />
    </div>
}