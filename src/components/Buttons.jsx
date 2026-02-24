export function Buttons(props){
    return <div>
    <div className="pl-11 pt-12">
            <input type="text" placeholder="Search" className="outline-none border border-gray-200" />
       <button className="border bg-black rounded-l-full rounded-r-full text-white p-2 cursor-pointer">Pesquisar</button>
            {props.text}
    </div>
    </div>
}