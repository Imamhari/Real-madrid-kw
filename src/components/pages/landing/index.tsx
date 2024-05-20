import Navbar from "../../molecules/navbar"
import ScoreBoard from './../../molecules/ScoreBoard/index';
import Jumbotron from '../../molecules/Jumbotron/index';
import NextEvent from "../../molecules/NextEvent";

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <ScoreBoard/>
            <Jumbotron/>
            <NextEvent/>
        </div>
    )
}

export default LandingPage 

