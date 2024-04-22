const Team = ({img, name}: {img:string, name:string}) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src={img}
            alt="real-madrid" 
            className="h-[55px]" 
            />
             <p>{name}</p>
        </div>
        
    )
}
const ScoreBoard = () => {
    return (
        <section className="bg-[#0F2145] text-white pt-8 pb-5 px-14">
            <div className="text-center text-sm">
                <p className="font-bold text-base mb-1">La Liga</p>
                <p>Estadio Santiago Bernabue</p>
                <p>Football · First Team · Male</p>
            </div>
            <div className="flex justify-evenly items-start mt-5">
                <div>
                    <Team img="./assets/images/real-madrid.webp" name="Real Madrid" />
                </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex text-6xl items-center gap-8">
                            <p>7</p>
                            <p  className="text-3xl text-gray-500 gap=10">-</p>
                            <p>3</p>
                        </div>
                        <div className="text-xs font-semibold text-center p-1 mx-auto w-fit rounded bg-blue-50 text-blue-900">
                            <p>23:30</p>
                        </div>
                    </div>
                <div>
                    <Team img="./assets/images/barcelona.webp" name="FC Barcelona"/>
                </div>
            </div>
            <button className=" border-2 border-blue-50/10 w-full mt-5 py-1 rounded-lg hover:bg-white hover:text-indigo-600 transition-all ease-in-out duration-700 font-semibold text-sm hover:border-indigo-600">
                Follow the match
            </button>
        </section>
    )
}
export default ScoreBoard