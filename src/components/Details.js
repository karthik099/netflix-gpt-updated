import { useParams } from "react-router-dom"

const Details = () => {

    const params = useParams()
    console.log(params)
    return <div>
        <p>Details {params.id}</p>
    </div>
}
export default Details