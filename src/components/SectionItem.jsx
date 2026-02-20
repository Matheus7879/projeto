export function SectionItem(props) {
    return <main>
        <div className="pt-12 pl-12 border-b border-gray-200 text-gray-200">
            {props.TopStyle}</div>
        <div className="pl-11 text-4xl text-gray-950 tracking-tighter text-balance font-semibold">
            {props.Title}</div>
        <div className="pl-12 pt-2 border-b border-gray-200 text-gray-200">
            {props.BottomStyle}</div>
        <div className="text-balance pl-12 text-base text-gray-600">{props.SubText}
        </div>
        <div className="pl-12 pt-6 text-2xl tracking-tighter font-medium">{props.SubTitle}
        </div>




    </main>
}