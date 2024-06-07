import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";



interface Event{
  logoTeamHome: string,
  logoTeamAway: string,
  nameTeamHome: string,
  nameTeamAway: string,
  competitionType: 'UCL' | 'LaLiga',
  steps: string,
  date: string,
  stadium: string
}

const Event = ({
  logoTeamHome,
  logoTeamAway,
  nameTeamHome,
  nameTeamAway,
  competitionType,
  steps,
  date,
  stadium
}

  ) => {
  return (
    <div className="w-[320px]">
      <div className="bg-[#132143] text-white  rounded-t-lg p-10  pt-4 border flex flex-col ">
      <div className="grid grid-cols-3 items-center pt-5">
        <div className="flex flex-col gap-2">
            <img src={logoTeamAway} 
                alt={nameTeamAway}
            className="h-12 mx-auto" />
          </div>
          <div>
            {
              competitionType === 'LaLiga' ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/2048px-LaLiga_logo_2023.svg.png" alt="laliga"
                className="h-12 mx-auto" />
              ) : ( 
                <img src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/4oogyu6o156iphvdvphwpck10-logo.app.svg?$Mobile$&wid=144&hei=144" alt="ucl"
                  className="h-12 mx-auto" />
              )
            } 
          </div>
          <div>
            <img src={logoTeamHome} 
            alt={nameTeamHome}
            className="h-14 mx-auto" />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center pt-4">
        <div>
          <p className="flex justify-center font-semibold text-center text-[15px]">{nameTeamAway}</p>
        </div>
        <div></div>
        <div>
          <p className="flex justify-center font-semibold text-center text-[15px]">{nameTeamHome}</p>
        </div>
      </div>
      </div>
      <div className="relative -top-5 flex flex-col gap-1 p-10 pt-7 rounded-lg bg-white shadow-lg">
        <p className="text-sm">Football · First Team · Male</p>
        <h1 className="font-bold">
          {competitionType === 'LaLiga' ? 'LaLiga' : 'UCL'}
        </h1>
        <h2 className="font-semibold">{steps}</h2>
        <div className="flex flex-col text-slate-600 mt-2">
          <div className="flex gap-2 items-center">
            <SlCalender />
            <p>{date}</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLocationOutline />
            <p>{stadium}</p>
          </div>
        </div>
        <div className="mt-20 flex items-center text-indigo-600">
            <IoMdMore size={20} />
            <button className="font-semibold"> More</button>
        </div>
      </div>
    </div>
  )
}

export default Event
