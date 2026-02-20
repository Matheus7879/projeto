export function DocsPage(props) {
    return <div>
        <nav className="flex">
            <aside className="fixed left-0">
                <div className="flex pt-12">
                    <div className="pt-12 pl-4">
                        <span className="ri-book-open-line"></span>
                    </div>
                    <div className="pl-2 pt-12">
                        <span className="font-semibold cursor-pointer">Documentation</span>
                    </div>
                </div>
                <div className="flex cursor-pointer hover:font-medium">
                    <div className="pt-3 pl-4">
                        <span className="ri-stack-line"></span>
                    </div>
                    <div className="pt-3 pl-2">
                        <button onClick={() => props.onChange('comp')} className={`cursor-pointer ${props.page === 'comp' ? 'text-blue-600' : 'text-base'} `}>Components</button>
                    </div>
                </div>
                <div className="flex cursor-pointer hover:font-medium" >
                    <div className="pt-3 pl-4">
                        <span className="ri-layout-line"></span>
                    </div>
                    <div className="pt-3 pl-2">
                        <button onClick={() => props.onChange('temp')} className={`cursor-pointer ${props.page === 'temp'? 'text-blue-600' : 'text-base'} `}>Templates</button>
                    </div>
                </div>
                <div className="flex cursor-pointer hover:font-medium" >
                    <div className="pt-3 pl-4">
                        <span className="ri-box-3-line"></span>
                    </div>
                    <div className="pt-3 pl-2">
                        <button onClick={() => props.onChange('ui')} className={`cursor-pointer ${props.page === 'ui'? 'text-blue-600' : 'text-base' } `}>UI Kit</button>
                    </div>
                </div>
                <div className="flex cursor-pointer hover:font-medium">
                    <div className="pt-3 pl-4">
                        <span className="ri-code-s-line"></span>
                    </div>
                    <div className="pt-3 pl-2">
                        <button onClick={() => props.onChange('play')} className={`cursor-pointer ${props.page === 'play' ? 'text-blue-600': 'text-base'}`}>Playground</button>
                    </div>
                </div>
                <div className="flex cursor-pointer hover:font-medium" >
                    <div className="pt-3 pl-4">
                        <span className="ri-graduation-cap-line"></span>
                    </div>
                    <div className="pt-3 pl-2">
                        <span className="">Courses</span>
                    </div>
                </div>
                <div className="flex cursor-pointer hover:font-medium" >
                    <div className="pt-3 pl-4">
                        <span className="ri-discuss-line"></span>
                    </div>
                    <div className="pt-3 pl-2">
                        <span className="">Community</span>
                    </div>
                </div>
            </aside>
        </nav>
        <main class="pl-[420px] p-6">
            <div class="flex pt-20">
                <span
                    class="tracking-widest text-gray-600 rounded-lg text-[12px] cursor-pointer">INSTALLATION</span>
            </div>
            <div>
                <span className="text-[31px] font-medium tracking-tighter">Get started with Tailwind CSS</span>
            </div>
            <div className="pt-6">
                <span className="text-gray-600 text-[18px] tracking-normal">Tailwind CSS works by scanning all of your HTML files,
                    JavaScipt components, and any other template  for class names, <br></br>
                    generating the correspoding styles and then writing them to a static CSS file.</span>
            </div>
            <div className="pt-5">
                <span className="text-gray-600 text-[18px] tracking-normal">It's fast, flexible, and reliable — with zero-runtime.</span>
            </div>
            <div className="pt-10">
                <span className="font-medium text-[20px] tracking-tight hover:border-b">Installation</span>
            </div>
            <div className="flex pt-6 border-b border-gray-200">
                <span className="text-gray-700 text-[15px] cursor-pointer hover:border-b">Using Vite</span>
                <div className="flex">
                    <span className="ml-7 text-gray-700 text-[15px] cursor-pointer hover:border-b">Using PostCSS</span>
                </div>
                <div className="flex">
                    <span className="ml-7 text-gray-700 text-[15px] cursor-pointer hover:border-b">Tailwind CLI</span>
                </div>
                <div className="flex">
                    <span className="ml-7 text-gray-700 font-medium border-b pb-2 text-[15px] cursor-pointer">Framework Guides</span>
                </div>
                <div className="flex">
                    <span className="ml-7 text-gray-700 text-[15px] cursor-pointer hover:border-b">Play CDN</span>
                </div>
            </div>
            <div className="pt-7">
                <span className="text-gray-700 text-[15px]">Framework-specific guides that cover our recommended approach to
                    installing Tailwind CSS in a number of <br></br> popular environments.
                </span>
            </div>
            <div className="flex">
                < div className="pt-14 pl-2">
                    <span className="text-4xl ri-nextjs-fill "></span>
                </div>
                <div className="pt-10 pl-3">
                    <span className="font-medium">Next.js</span>
                    <div className="pt-2">
                        <span>Full-featured React framework<br></br>
                            with great developer experience</span>
                    </div>
                </div>
                <div className="pt-14 pl-12">
                    <span className="text-4xl ri-svelte-fill"></span>
                </div>
                <div className="pt-10 pl-3">
                    <span className="font-medium">SvelteKit</span>
                    <div className="pt-2">
                        <span>The fastest way to build apps of<br></br>
                            all sizes with Svelte.js.</span>
                    </div>
                </div>

                <div className="pt-14 pl-12">
                    <span className="text-4xl ri-gatsby-fill"></span>
                </div>
                <div className="pt-10 pl-3">
                    <span className="font-medium">Gatsby</span>
                    <div className="pt-2">
                        <span>Framework for building static sites<br></br>
                            with react and GraphQL</span>
                    </div></div>
            </div>
            <div className="flex">
                < div className="pt-14 pl-2">
                    <span className="text-4xl ri-angularjs-fill "></span>
                </div>
                <div className="pt-10 pl-3">
                    <span className="font-medium">Angular</span>
                    <div className="pt-2">
                        <span>Plataform for buiding mobile and<br></br>
                            desktop web application.</span>
                    </div>
                </div>
                <div className="pt-14 pl-12">
                    <span className="text-4xl ri-router-fill"></span>
                </div>
                <div className="pt-10 pl-3">
                    <span className="font-medium">React Router</span>
                    <div className="pt-2">
                        <span>A standards-focused router you<br></br>
                            can deploy anywhere.</span>
                    </div></div>
                <div className="pt-14 pl-12">
                    <span className="text-4xl ri-meteor-fill"></span>
                </div>
                <div className="pt-10 pl-3">
                    <span className="font-medium">Meteor</span>
                    <div className="pt-2">
                        <span>The full stack JavaScript<br></br>
                            framework for developing cross-<br></br>
                            plataform apps.</span>
                    </div></div>
            </div>
            <div className="pt-6">
                <div className="border p-4 rounded-md border-gray-300 w-[900px]">
                    <span className="ri-information-line text-2xl"></span>
                    <span className="pl-2">Don't you see your framework of choice? Try using the <span className="font-semibold border-b border-sky-300 cursor-pointer hover:border-sky-700">Tailwind CLI</span>
                        , the <span className="border-b border-sky-300 font-semibold cursor-pointer hover:border-sky-700">Vite Plugin</span> or the <span className="border-b border-sky-300 font-semibold cursor-pointer hover:border-sky-700">PostCSS plugin </span>
                        instead.</span>
                </div>
            </div>
        </main>
    </div>

}