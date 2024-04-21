import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    return (
        <nav className="bg-white h-[9vh]">
            <div className="flex justify-between p-4">
                <div className="flex items-center gap-3 ">
                    <button
                        className={`rounded-lg p-[6px] ${isOpenSidebar ? 'bg-indigo-200 text-indigo-800' : ''}`} 
                        onClick={() => setIsOpenSidebar (!isOpenSidebar)}>
                    <RxHamburgerMenu size={30}/>
                    </button>
                    <div className="flex items-center gap-3">
                        <img 
                            src="./assets/images/logo-real-madrid.png" 
                            alt="logo-real-madrid"
                            className="h-[6vh]" 
                        />
                        <div className="h-[5vh] bg-slate-300 w-px"></div>
                        <img 
                            src="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e05c6091-9f39-4b04-8af2-d5cb7e37dbfa/champions.app.png?preferwebp=true" 
                            alt="14-ucl"
                            className="h-[6vh]" 
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <button className=" border-2 border-indigo-600 text-indigo-600 p-2 flex items-center justify-center rounded-lg gap-3 font-medium"> <CiUser size={25} /> Sign in</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar