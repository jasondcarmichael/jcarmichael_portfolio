import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/"> <h2> Home </h2></Link>
            <Link to="/projects"> <h2> Projects </h2></Link>
            <Link to="/resume"> <h2> Resume </h2></Link>
            <Link to="/about-me"> <h2> About </h2></Link>
    
        </div>
    )
}