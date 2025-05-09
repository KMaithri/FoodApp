import useOnlineStatus from "../utils/useOnlineStatus";

const Contact = () => {
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Oops! You're Offline, please check your internet connection</h1>
    }
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold my-4">Contact</h1>
        </div>
    )
}

export default Contact;