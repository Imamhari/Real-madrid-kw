const CardNews = ({isHeader} : {isHeader?:boolean}) => {
  return (
    <main className='group'>
        <div className='overflow-hidden rounded-xl'>
            <img src="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--742be08d-0609-4bb2-92ab-855d6d4104e9/ND_FUTBOL_CHAMPIONS_RM_BAYERN_ALEGRIA_JOSELU_VINICIUS_BELLINGHAM_HE22332.app.png?preferwebp=true&width=1440" 
            alt="image-news"
            className='group-hover:scale-105 transition-all ease-in-out duration-[1500ms] ' />
        </div>
        {
            isHeader?(
                <a 
                    href="#"
                    className='font-bold text-3xl group-hover:text-indigo-600 transition-all ease-in-out duration-[1500ms] mt-5 mb-10 block'
                >
                    2-1: Comeback to book a place in the Champions League final!
                </a>
            ) : <a 
                    href="#" 
                    className="text-lg font-bold my-3 group-hover:text-indigo-600 transition-all ease-in-out duration-[1500ms]"
                >2-1: Comeback to book a place in the Champions League final! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, molestiae?</a>
        }
    </main>
  )
}

export default CardNews
