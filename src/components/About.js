import { Link } from "react-router-dom";
const About =()=>{
    return(
        <div className="items-center">
            <p>@@@@About Us Page@@@@</p>
            <p><Link to="/details/123">see more...</Link></p>
        </div>
    )
}
export default About;