import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    // use state variables need to declared first inside the functional component only
    const[btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext)

    // subscribing to the store using a selector (REdux)
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return(
        <div className="flex justify-between">
            <div>
                <img className="w-25 m-1.5" src={LOGO_URL}/>
            </div>
            <div className="content-center">
                <ul className="flex m-2 border-0">
                    <li className="p-2 m-2">Online Status: {(onlineStatus) ? "✅" : "🔴"}</li>
                    <li className="p-2 m-2 hover:bg-orange-500 hover:text-white hover:font-bold hover:rounded-lg"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2 hover:bg-orange-500 hover:text-white hover:font-bold hover:rounded-lg font-bold"> <Link to="/cart"> Cart ({cartItems.length}) </Link></li>
                    {/* changing login button to logout and vice versa on click */}
                    <li className="p-2 m-2 hover:bg-orange-500 hover:text-white hover:font-bold hover:rounded-lg"><button onClick={ () => {
                        
                        (btnName == "Login")?setBtnName("Logout"):setBtnName("Login")
                    }
                    }>{btnName}</button></li>
                    <li className="p-2 m-2 font-bold">{loggedInUser}</li>
                    
                </ul>
            </div>

        </div>
    )
}

export default Header;