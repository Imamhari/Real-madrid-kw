const CardNews = ({isHeader, title, imageUrl } : {isHeader?:boolean, title:string, imageUrl:string}) => {
  return (
    <main className='group'>
        
        {
            isHeader?(
               <>
                    <div className='overflow-hidden rounded-xl bg-[#F2F5F8] lg:grid lg:grid-cols-3 lg:mb-10 cursor-pointer'>
                        <div className="overflow-hidden col-span-2 rounded-l-lg">
                            <img src= {imageUrl}
                            alt="image-news"
                            className='group-hover:scale-105 transition-all ease-in-out duration-[1500ms] ' />
                        </div>
                       
                        <div className="flex justify-center items-center ">
                            <a 
                                href="#"
                                className='font-bold group-hover:text-indigo-600 transition-all ease-in-out duration-[1500ms] mt-5 mb-10 hidden lg:block text-xl xl:text-3xl  mx-10'
                            >
                                {title}
                            </a>
                        </div>
                    </div>
                     <a 
                        href="#"
                        className='font-bold text-sm md:text-3xl group-hover:text-indigo-600 transition-all ease-in-out duration-[1500ms] mt-5 mb-10 block lg:hidden'
                    >
                        {title}
                    </a>
               </>
            ) : (
                <>
                    <div className='overflow-hidden rounded-xl  cursor-pointer xl:rounded-xl '>
                        <img src={imageUrl} 
                        alt="image-news"
                        className='group-hover:scale-105 transition-all ease-in-out duration-[1500ms] xl:rounded-xl hover:rounded-xl' />
                    </div>
                    <a 
                        href="#" 
                        className="text-sm md:text-base font-bold my-3 group-hover:text-indigo-600 transition-all ease-in-out duration-[1500ms] line-clamp-3"
                    >{title}</a>
                </>
            
        )}
    </main>
  )
}

export default CardNews
