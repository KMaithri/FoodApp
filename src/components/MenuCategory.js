import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({data, showItems, setShowIndex}) =>{
    // console.log(data)

    // const[showItems, setShowItems] = useState(true);
    const Accordion = () => {
        // Toggle show items
        // setShowItems(!showItems);
        setShowIndex();
    }
    return (
        <div>
            <div className="shadow-xl p-4 m-4 ">
                {/* header */}
                <div className="flex justify-between cursor-pointer" onClick={Accordion} >
                    <h2 className="font-bold">{data.title} ({data.itemCards.length})</h2>
                    <p>⬇️</p>
                </div>
                
                {/* body ---> Calling Accordion Body component */}
                <div className="py-2">
                    {showItems && <ItemList items = {data.itemCards}/>}
                </div>
            </div>
            
            
        </div>
    )
}

export default MenuCategory;