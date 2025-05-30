import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Cart = () =>{

    // subscribing to the store to get the items in the cart
    let cartItems = useSelector((store) => store.cart.items)
    const resId = useSelector((store) => store.cart.resId)
    // console.log(cartItems)
    // console.log(cartItems)
    // calculating total price for the items in the cart
    const [totalPrice, setTotalPrice] = useState(0);
    let total = 0;

    const Total = (cartItems) => {
        if(cartItems.length > 0){
            cartItems.map((item) => total = total + (item.card.info.price/100 || item.card.info.defaultPrice/100))
            setTotalPrice(total)
        }else{
            
            setTotalPrice(0)
        }
    }

    useEffect(() => {
            Total(cartItems);
        
    }, [cartItems])

    const dispatch = useDispatch();

    const handleClearItems = () => {
        dispatch(clearItems());
        setTotalPrice(0);
    }

    return(
        <div className="text-center">
            <h1 className="text-2xl font-bold my-5">Cart</h1>
            <div className="w-9/12 mx-auto">
                {cartItems.length > 0 ? <ItemList items = {cartItems} isAdd = {false}/> : <h1 className="font-bold text-xl m-6">Oops! Your cart is empty, add items to your cart</h1>}
                {cartItems.length == 0 ? <button className="border-2 border-red-600 text-red-600 font-bold p-4 m-4 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white hover:font-bold"><Link to="/">Browse Restaurants</Link></button> : ""}
                {cartItems.length > 0 ? <p className="text-lg font-bold text-right m-4"> To Pay {totalPrice.toFixed(2)}</p> : ""}
                
            </div>
            {cartItems.length > 0 ? <Link to={"/restaurant/" + resId}><button className="border-2 border-gray-600 text-gray-600 font-bold p-4 m-4 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white hover:font-bold">Add Items</button></Link> : ""}
            {/* {cartItems.length > 0 ? <button className="border-2 border-gray-600 text-gray-600 font-bold p-4 m-4 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white hover:font-bold" onClick={handleClearItems}>Add items</button> : ""} */}
            {cartItems.length > 0 ? <button className="border-2 border-red-600 text-red-600 font-bold p-4 m-4 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white hover:font-bold" onClick={handleClearItems}>Clear Cart</button> : ""}
            
            {cartItems.length > 0 ? <button className="border-2 border-green-600 text-green-600 font-bold p-4 m-4 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white hover:font-bold" ><Link to="/checkout">Checkout</Link></button> : ""}
            
            
        </div>
        
    )
}

export default Cart;