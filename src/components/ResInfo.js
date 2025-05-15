import useResInfo from "../utils/useResInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const ResInfo = () => {
    // this hook will get the id of the restaurant that is clicked
    const {resId} = useParams();
    // custom hook to make api call for the data
    const resInfo = useResInfo(resId);

    const[showIndex,setShowIndex] = useState(null);
    
    if(resInfo === null) return <Shimmer/>
    console.log(resInfo)
    
    const{
        name,
       cuisines,
        avgRating,
		costForTwoMessage,
		sla,
        areaName,
        id
    } = resInfo.cards[2]?.card?.card?.info;

    
    //  to filter only the item category cards from all cards
    const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    // console.log(resInfo.cards[4]);
    // console.log("Cards =========",cards);
    return(

        <div>
            <div className="w-10/12 text-center m-auto ">
                <h1 className="text-4xl">{name}</h1>
                <h3 className="my-2 font-bold">{avgRating} .{costForTwoMessage}</h3>
                <p className="my-2">{cuisines.join(", ")}</p>
                <p className="my-2">{areaName}</p>
                <p className="font-bold">{sla.slaString}</p>

                {/*  calling Accordion header component */}
               {
                cards.map((card, index) => <MenuCategory 
                key={card?.card?.card?.title}  
                data = {card?.card?.card}
                showItems = {index == showIndex ? true: false}
                resId = {id}
                resName = {name}
                setShowIndex = {() => setShowIndex(index)}/>)
               }
                

            </div>

            
            
        </div>
    )
}

export default ResInfo;