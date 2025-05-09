import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log("Error Message: " + err);
    return (
        <div className="w-9/12 mx-auto my-10 text-center">
            <h1 className="font-bold text-xl my-4">Oops!!!</h1>
            <h2 className="font-bold text-xl my-4">Something happened!! </h2>
            <h3 className="text-red-600 my-4 font-bold">{err.status} - {err.data}</h3>
        </div>
    )
}

export default Error;