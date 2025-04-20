import { CDN_URL, RATING_URL } from "../utils/constants";

const RestroCard = (props) => {
    const{resData} = props;

    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla
    } = resData?.info;
    
    return(
        <div className="w-[200] h-[400] m-4">
            <img className="w-50 h-50 rounded-xl" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="text-xl font-semibold m-2">{name}</h3>
            <div className="m-2 font-semibold flex"><img className="w-6" src={RATING_URL}></img><p>{avgRating} {""} .{sla?.slaString}</p></div>
            {/* <h4>{costForTwo}</h4> */}
            <h4 className="m-2">{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestroCard;


// higher order function
//  to display "open" label on restaurant card
export const WithPromoted = (RestroCard) => {

    // function returning another function/component
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-300 text-black m-2 p-2 rounded-lg">Open</label>
                <RestroCard {...props}/>
            </div>
        )
    }

}