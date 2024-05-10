import Navbar from "../../molecules/navbar"
import ScoreBoard from './../../molecules/ScoreBoard/index';
import Jumbotron from '../../molecules/Jumbotron/index';

const LandingPage = () => {
    return (
        <div className="h-screen bg-white">
            <Navbar/>
            <ScoreBoard/>
            <Jumbotron/>
        </div>
    )
}

export default LandingPage 

