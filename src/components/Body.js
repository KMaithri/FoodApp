import RestroCard, {WithPromoted}  from "./RestroCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import { API_CALL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const {loggedInUser, setUserName} = useContext(UserContext);

    const RestuarantPromoted = WithPromoted(RestroCard);

    const fetchData  = async () =>  {
        const data = await fetch("/api/data");
        const json = await data.json();
        console.log(json);
        if(json.data.cards[2].card.card.gridElements){
            // optional chaining
            setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }else{
            setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        
    }
    // console.log(listOfRestaurants)
    // this will run only once after the body component is rendered (shimmer ui)
    useEffect(() =>{
        fetchData();
    },[]);

    // console.log("rendering body");

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1 className="text-3xl text-center font-bold my-5 ">Oops! You're Offline, please check your internet connection</h1>
    }

   
   if(listOfRestaurants.length == 0) return(<Shimmer/>)
    //  ternary conditional rendering

    return (
        <div >
            <h2 className="font-bold text-3xl my-[10]">{filteredRestaurants.length} results </h2>
            {/* <h2>Welcome, {loggedInUser}</h2> */}
            <div className="flex flex-wrap">
                {/* Search bar functionality */}
                
                    <input className="border-1 px-4 resize" type="text" value={searchText} placeholder="Search for Restaurant" onChange={(event) => {
                        setSearchText(event.target.value);
                        const filtered_search = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filtered_search);
                    }}></input>
                    {/* top rated restaurants  */}
                    <button className="bg-orange-600  text-white cursor-pointer hover:bg-orange-700 hover:font-bold p-2 mx-2" onClick={ () => {
                    const filtered_text = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4);
                    setFilteredRestaurants(filtered_text);
                    }
                }
                   >Top rated restaurants</button>
                    <button className="bg-green-400  hover:bg-green-600 hover:text-white hover:font-bold p-2 cursor-pointer " onClick={ ()=> {
                        // const filtered_search = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(listOfRestaurants);
                        setSearchText("");
                        } 
                    }>Clear</button>
                    {/* <input value = {loggedInUser} className="border border-black mx-4 px-2" onChange={(event) => setUserName(event.target.value) }></input> */}
                
                
            </div>
            <div className=" flex flex-wrap">
                {
                    
                    // we should add "key" for map filter
                    filteredRestaurants.map((restaurant) => (
                        
                      <Link key = {restaurant.info.id} to={"/restaurant/" + restaurant.info.id } > 
                      {
                        restaurant.info.isOpen ? <RestuarantPromoted resData = {restaurant}/> : <RestroCard  resData = {restaurant}/> 
                      }
                       
                      </Link> 
                    ))
                }
                
            </div>
        </div>
    )
}

export default Body;