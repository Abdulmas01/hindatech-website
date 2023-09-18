import { Link } from "react-router-dom";
import ServicesContainer from "../components/ServicesContainer";
import searchit from '../images/searchitLogo.png'
const Download = () => {
    return (
        <div>
            <h1>App List</h1>
            <Link to={"/download/searchit"}>
                <ServicesContainer image={searchit} text={"Searchit"} />
            </Link>
        </div>
    )
}

export default Download