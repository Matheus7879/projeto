export function BlogTitle(props){
    return <main>
    <div className="pt-38">
       <div className="border-t text-8xl font-base tracking-tight pl-12 border-gray-200">{props.Title}</div>
</div>
<div className="pt-12">
<div className="border-t text-[18px] text-gray-800 tracking-wide pl-12 border-gray-200 border-b">{props.Subtitle}
</div>
</div>
<div className="flex">
<div className="flex pl-12 pt-11">
    <i className="flex ri-mail-line border border-r-0 rounded-l-full p-1 text-gray-500 border-gray-200"></i>
    </div>
    <div className="flex pt-11">
    <input type="text" placeholder=" Subscribe via email" className="flex border border-l-0 rounded-r-full border-gray-200 text-gray-500 w-75 outline-none"/>
</div>
       <div class="pl-4 pt-12">
        <span class="border bg-black rounded-l-full rounded-r-full text-white p-2 cursor-pointer">Subscribe</span>
    </div>  
    </div>  

</main>


}
