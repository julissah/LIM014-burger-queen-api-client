import { useLocation, useHistory } from "react-router-dom";
export default function ProductsPage() {
    const location = useLocation();
    const history = useHistory();
        console.log(location);

    const query = new URLSearchParams(location.search)
    console.log(query);
    const skip = query.get("skip") || 0
    const limit = query.get("limit") || 15
    console.log(skip, limit);

    const handleNext = () => {
        
        query.set("skip", 100)
        query.set("limit",200)
        history.push("/home")
    }


    return (
        <div>
            <h1>ProductsPage</h1>
            <h2>Skip: {skip}</h2>
            <h2>Limit: {limit}</h2>

            <button onClick={handleNext}> 
                Next
            </button>
        </div>
    )
}
