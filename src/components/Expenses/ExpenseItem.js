import { useState } from "react";

function ExpenseItem(props) {
    const date = new Date(props.date).toLocaleString("en-UK",
    {day:"numeric",
    month:"short",
    year:"numeric"
    })
    // const setMarker = (markerColor) =>  markerColor = checked? "good" : "bad";
    // const [checked,setChecked] = useState(props.checked)
    // let markerColor ;
    // markerColor = setMarker(checked)
    
    // const clickHandler = () => {
    //     setChecked(!checked)
    //     markerColor = setMarker(checked)
    // }
    return(
        <div  className="max-w-xl mx-auto flex bg-sky-800 gap-5 p-5 m-4 rounded-lg text-sky-50 font-bold align-middle">
            <div className="text-sky-200 w-28 flex-none">{date}</div>
            <div className="flex-1">{props.name} </div>
            <div className="flex gap-4 align-middle flex-initial">
                <div>{props.price}$</div>
                <div className="w-4 h-4 mt-1 bg-green-400 hover:bg-red-400 rounded-full"> </div>
            </div>
        </div>
    );
}

export default ExpenseItem;