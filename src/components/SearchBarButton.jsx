export function SearchBarButton(){
    return <main>
<div className="flex">
        <div className="p-2 pl-9 pt-9 pb-20">
            <button
                className="border bg-black text-white rounded-l-full rounded-r-full p-2 font-semibold cursor-pointer">Get
                started</button>
        </div>
        <div className="border border-r-0 mt-12 rounded-l-full h-6">
            <i className="ri-search-line p-1"></i>
        </div>
        <form className="flex pt-12">
            <input type="text" className="border border-l-0 border-r-0 h-6 outline-none text-sm" placeholder="Quick search">
        </input></form>
        <div className="mt-12">
            <span className="border border-l-0 rounded-r-full pr-3 pb-px">
                <span className="text-[12px] text-gray-400">Ctrl k</span>
            </span>
        </div>
    </div>






    </main>
}