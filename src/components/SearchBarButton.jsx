export function SearchBarButton(){
    return <div>
<div class="flex">
        <div class="p-2 pl-9 pt-9 pb-20">
            <button
                class="border bg-black text-white rounded-l-full rounded-r-full p-2 font-semibold cursor-pointer">Get
                started</button>
        </div>
        <div class="border border-r-0 mt-12 rounded-l-full h-6">
            <i class="ri-search-line p-1"></i>
        </div>
        <form class="flex pt-12">
            <input type="text" class="border border-l-0 border-r-0 h-6 outline-none text-sm" placeholder="Quick search">
        </input></form>
        <div class="mt-12">
            <span class="border border-l-0 rounded-r-full pr-3 pb-px">
                <span class="text-[12px] text-gray-400">Ctrl k</span>
            </span>
        </div>
    </div>






    </div>
}