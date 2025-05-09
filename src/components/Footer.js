import { Link } from "react-router";


const Footer = () => {
    return(
        <div className="bg-orange-600 p-4 flex justify-between">
            <div>
            <h5 className="text-white">(c) 2025 Food App</h5>
            </div>
            
            <div className="flex">
            
            
            <li className="p-2 m-2 text-white list-none"><Link to="/about">About us</Link></li>
            <li className="p-2 m-2 text-white list-none"><Link to="/contact">Contact us</Link></li>
            </div>
        </div>
    )
}

export default Footer;