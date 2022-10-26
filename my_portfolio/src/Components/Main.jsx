import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import Resume from './Resume'
import AboutMe from './AboutMe'
import Home from './Home'


export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="projects" element={ <Projects /> } />
                <Route exact path="resume" element={ <Resume /> } />
                <Route exact path="about-me" element={ <AboutMe /> } />

            <h2> Main Content Here </h2>

            </Routes>
        </div>
    )
}