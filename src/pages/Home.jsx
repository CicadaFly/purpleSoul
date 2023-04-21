import { Link } from "react-router-dom"
import FormPage from "../components/FormPage"

const Home = () =>{
  return (
    <div className="container">
    <FormPage/>
    <div>
      <Link to="./Divine">Divine </Link>
      <Link to="./Result">Result </Link>
    </div>
    </div>
  )
}

export default Home