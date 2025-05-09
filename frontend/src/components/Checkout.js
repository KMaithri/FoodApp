import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import { Link } from "react-router";



const Checkout = () => {

    const dispatch = useDispatch();

    dispatch(clearItems());

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold m-10">Your order is on the way!!</h1>
            <button className="border-2 border-red-600 text-red-600 font-bold p-4 m-4 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white hover:font-bold"><Link to="/">Browse Restaurants</Link></button>
        </div>
    )
}

export default Checkout;