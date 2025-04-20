import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            user : {
                name : "dummy",
                url : "dummy url"
            }
        }
        
        console.log(this.props.name + "child constructor called")
    }
    
    // API call to get user data
    async componentDidMount(){
        console.log(this.props.name + "child component-did-mount called")
        const data = await fetch("https://api.github.com/users/KMaithri");
        const json = await data.json();
        this.setState({
            user:{
                name:json.name,
                url: json.url
            }
        })
    }

    componentDidUpdate(){
        console.log("component updated")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }
    
    render(){
        // debugger;
        console.log(this.props.name + "child render called")
        const{name,url} = this.state.user;
        return(
            <div className="text-center">
                <h1 className="text-2xl font-bold my-4">About</h1>
                <h2 className="text-xl my-4">{name}</h2>
                {/* <h2 className="my-4">{url}</h2> */}
            </div>
        )
    }

}

export default UserClass;