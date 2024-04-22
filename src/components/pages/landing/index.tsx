import Navbar from "../../molecules/navbar"
import ScoreBoard from './../../molecules/ScoreBoard/index';

const LandingPage = () => {
    return (
        <div className="h-screen bg-white">
            <Navbar/>
            <ScoreBoard/>
        </div>
    )
}

export default LandingPage 

