import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent constructor called")
    }

    componentDidMount(){
        // used for making API calls
        console.log("Parent component-did-mount called")
    }

    render(){
        console.log("Parent render called")
        
        return (
            <div >
                <UserClass />
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div >
//             <UserClass name ={"Maithri"} location={"hyderabad"}/>
//         </div>
//     );
// }

export default About;