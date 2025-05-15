import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem,removeItem,addResName, addResId } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({items,isAdd,resName,resId}) => {
    // console.log("items====",items)
    const cartResName = useSelector((store) => store.cart.resName);
    const cartItems = useSelector((store) => store.cart.items);
    // const [btnVal, setBtnVal] = useState("Add");
    // console.log(resName)
    // console.log(cartResName)

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        if(cartResName === resName){
            dispatch(addItem(item));
            // setBtnVal("Added")
        }else if(cartResName === "" || cartItems.length === 0){
            
            dispatch(addItem(item))
            dispatch(addResName(resName));
            dispatch(addResId(resId));
            // setBtnVal("Added")
        }else{
            alert("You cannot add items from different restaurants at once, please add items only from " + cartResName + " or empty your cart to continue")
        }
        
    }

    const handleDeleteItem =(id) => {
        dispatch(removeItem(id))
    }
    
    return(
        
        <div>
            {
                items.map((item) => <div key={item.card.info.id} className=" border-b-2 border-gray-200 py-4 flex justify-between">

                    <div className="text-left sm:w-9/12 w-6/12">
                        <p className="font-bold text-lg">{item.card.info.name}</p>
                        <p className="font-bold"> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                        {isAdd ? <p className="text-green-600 font-bold">{item.card.info.ratings.aggregatedRating.rating}</p> : ""}
                        {isAdd?<p className="text-gray-400 text-s">{item.card.info.description}</p>:""}
                    </div>
                    <div className="sm:w-3/12 w-6/12">
                        {isAdd ? <button className=" text-white bg-green-500 py-2  px-2 sm:px-6 rounded-lg align-bottom cursor-pointer" onClick={() => handleAddItem(item)}>Add</button> : <button className="absolute py-2 px-6 rounded-lg align-bottom cursor-pointer" onClick={()=>handleDeleteItem(item.card.info.id)}>❌</button>}
                        {item.card.info.imageId ? ((isAdd)? <img className = "rounded-lg w-[200] h-[200]" src = {CDN_URL + item.card.info.imageId }/>:<img className = "w-[100] h-[100] rounded-lg" src = {CDN_URL + item.card.info.imageId }/>) : ""}
                    </div>
                    
                </div>)
            }
        </div>
    )
}

export default ItemList;