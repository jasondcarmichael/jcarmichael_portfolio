import { Route, Routes } from 'react-router-dom'
import Resume from './Resume'
import AboutMe from '../pages/AboutMe'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'


export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="portfolio" element={ <Portfolio /> } />
                <Route exact path="resume" element={ <Resume /> } />
                <Route exact path="about-me" element={ <AboutMe /> } />
            </Routes>
        </div>
    )
}