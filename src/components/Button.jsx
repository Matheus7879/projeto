export function Button(props) {
    return <main>
        <div className="pl-11 pt-12">
            <input type="text" placeholder="Search" className="border bg-black rounded-l-full rounded-r-full text-white p-2 cursor-pointer"/>
            {props.Text}
        </div>
    </main>
}