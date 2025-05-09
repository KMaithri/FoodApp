import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem,removeItem } from "../utils/cartSlice";

const ItemList = ({items,isAdd}) => {
    // console.log("items====",items)
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    const handleDeleteItem =(id) => {
        dispatch(removeItem(id))
    }
    return(
        
        <div>
            {
                items.map((item) => <div key={item.card.info.id} className=" border-b-2 border-gray-200 py-4 flex justify-between">

                    <div className="text-left w-9/12">
                        <p className="font-bold text-lg">{item.card.info.name}</p>
                        <p className="font-bold"> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                        {isAdd ? <p className="text-green-600 font-bold">{item.card.info.ratings.aggregatedRating.rating}</p> : ""}
                        {isAdd?<p className="text-gray-400 text-s">{item.card.info.description}</p>:""}
                    </div>
                    <div className="w-3/12">
                       {isAdd ? <button className="absolute text-white bg-green-500 py-2 px-6 rounded-lg align-bottom cursor-pointer" onClick={() => handleAddItem(item)}>Add</button> : <button className="absolute py-2 px-6 rounded-lg align-bottom cursor-pointer" onClick={()=>handleDeleteItem(item.card.info.id)}>❌</button>} 
                        
                        {(item.card.info.imageId && isAdd)? <img className = "w-[200] h-[200] rounded-lg" src = {CDN_URL + item.card.info.imageId }/>:<img className = "w-[100] h-[100] rounded-lg" src = {CDN_URL + item.card.info.imageId }/>}
                        
                    </div>
                    
                </div>)
            }
        </div>
    )
}

export default ItemList;