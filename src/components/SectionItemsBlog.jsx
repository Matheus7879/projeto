export function SectionItemsBlog(props) {
    return <>
        <div className="pt-12">
            <div className="flex border-t border-gray-200">
            </div>
            <div className="flex">
                <div className="flex pl-12">
                    <span className="text-gray-600 tracking-wider">{props.Date}</span>
                </div>
                <div className="flex pl-79 font-semibold">{props.SubTitle}
                </div>
            </div>
            <div className="pl-[466px] pt-4 text-gray-700">{props.SubText}
            </div>
            <div className="pl-[466px] pt-4 text-sky-500">Read More{props.Read}
            </div>
        </div>
    
     <div className="flex pl-12">
                    <span className="text-gray-600 tracking-wider">{props.Date2}</span>
                </div>

   
   
   
   
   
    </>
}