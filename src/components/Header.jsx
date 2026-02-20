export function Header(props) {
    return <main>
        <header className="flex fixed border-b border-gray-100 bg-white">
            <div className="flex pl-8 pt-4">
                <button onClick={() => props.onChange('home')} className={`cursor-pointer ri-tailwind-css-fill text-sky-400 text-3xl ${props.page === 'home'}`}></button>
            </div>
            <div className="flex pt-3 pl-2">
                <button onClick={() => props.onChange('home')} className={`cursor-pointer text-2xl text-black font-semibold ${props.page === 'home'}`}>tailwindcss</button>
            </div>
            <div className="pt-5 pl-4">
                <button className="cursor-pointer border bg-gray-100 rounded-l-full rounded-r-full border-gray-100 text-sm w-14    ">v4.1
                    <i className="ri-arrow-down-s-line"></i>
                </button>
            </div>
            <div className="flex pl-[820px]">
                <div className="pt-4">
                    <i className="border rounded-l-full border-r-0 ri-search-line p-1 border-gray-200 bg-gray-50"></i>
                </div>
                <div className="pt-4 ">
                    <input type="text" placeholder="Ctrl K" className="border border-l-0 rounded-r-full w-12 border-gray-200 bg-gray-50 outline-none" />
                </div>
                <div className="pl-4 pt-4">
                    <button onClick={() => props.onChange('docs')} className={`cursor-pointer ${props.page === 'docs' ? 'text-blue-600' : 'text-base'}`} >Docs</button>
                </div>
                <div className="pl-4 pt-4">
                    <button onClick={() => props.onChange('blog')} className={`cursor-pointer ${props.page === 'blog' ? 'text-blue-600' : 'text-base'} `}>Blog</button>
                </div>
                <div className="pl-4 pt-4">
                    <button onClick={() => props.onChange('case')} className={`cursor-pointer ${props.page === 'case' ? 'text-blue-600' : 'text-base'}`} >Showcase</button>
                </div>
                <div className="pl-4 pt-4">
                    <button onClick={() => props.onChange('sponsor')} className={`cursor-pointer ${props.page === 'sponsor' ? 'text-blue-600' : 'text-base'}`}>Sponsor</button>
                </div>
                <div className="pl-4 pt-4">
                    <button onClick={() => props.onChange('plus')} className={`border bg-sky-100 border-blue-200 w-10 text-sky-300 cursor-pointer ${props.page === 'plus' ? 'border-blue-800 bg-blue-400' : 'text-base'}`}>Plus</button>
                </div>
                <div className="pl-4 pt-3">
                    <button onClick={() => props.onChange('github')} className={`ri-github-line text-2xl cursor-pointer ${props.page === 'github' ? `text-blue-400` : `border-blue-800`} `}></button>
                </div>
            </div>
            {props.Header}
        </header>
    </main>
}