const Team = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src="./assets/images/real-madrid.webp" 
            alt="real-madrid" 
            className="h-[55px]" 
            />
             <p>Real Madrid</p>
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
            <div className="flex justify-between items-center">
                <div>
                    <Team/>
                </div>
                    <div className="flex text-6xl items-center gap-8">
                        <p>7</p>
                        <p  className="text-3xl text-gray-500">-</p>
                        <p>3</p>
                    </div>
                <div>
                    <Team/>
                </div>
            </div>
        </section>
    )
}
export default ScoreBoard