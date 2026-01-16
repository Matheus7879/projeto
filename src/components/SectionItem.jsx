export function SectionItem(props){
    return <div>
        <div class="pt-12 pl-12 border-b border-gray-200 text-gray-200">
    {props.TopStyle}</div>
    <div class="pl-11 text-4xl text-gray-950 tracking-tighter text-balance font-semibold">
    {props.Title}</div>
    <div class="pl-12 pt-2 border-b border-gray-200 text-gray-200">
    {props.BottomStyle}</div>
    <div class="text-balance pl-12 text-base text-gray-600">{props.SubText}
    </div>
    </div>
}