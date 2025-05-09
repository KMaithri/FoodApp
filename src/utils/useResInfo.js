import { useEffect,useState } from "react";
import { RES_API } from "./constants";
import Shimmer from "../components/Shimmer";

const useResInfo = (resId) => {

    const[resInfo,setResInfo] = useState(null);
    
    useEffect(() => {
        fetchInfo();
    }, [])

    const fetchInfo = async() => {
        // const data = await fetch(RES_API + resId);
        const data = await fetch(`/api/restaurant?id=${resId}`);
        const json = await data.json();
        // console.log(json)
        setResInfo(json.data);
    }
    return resInfo;
}

export default useResInfo;