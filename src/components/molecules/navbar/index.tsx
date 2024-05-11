import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import NavItem from './../../atoms/NavItems/index';
import { NAV_ITEM } from '../../../constant/const';

const Navbar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    return (
        <div>
        <nav className="bg-white h-[9vh] p-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 ">
                    <button
                        className={`rounded-lg p-[6px] ${isOpenSidebar ? 'bg-indigo-200 text-indigo-800' : ''}`} 
                        onClick={() => setIsOpenSidebar (!isOpenSidebar)}>
                    <RxHamburgerMenu size={30}/>
                    </button>
                    <div className="flex items-center gap-3">
                        <a href="#">
                        <img 
                            src="./assets/images/logo-real-madrid.png" 
                            alt="logo-real-madrid"
                            className="h-[6vh]" 
                        />
                        </a>
                        <div className="h-[5vh] bg-slate-300 w-px"></div>
                        <a href="#">
                        <img 
                            src="./assets/images/champions.webp" 
                            alt="14-ucl"
                            className="h-[6vh]" 
                        />  
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex gap-4">
                    {NAV_ITEM.map((item) => (
                        <NavItem link={item.url} name={item.name}
                        key={item.name}/> 
                    ))}
                
                </div>
                <div className="flex items-center gap-2">
                    <div className="hidden lg:flex items-center gap-5">
                        <a href="#">
                            <img src="./assets/images/emirates_gray.svg" alt="emirates" className="h-[6vh]" />
                        </a>
                        <a href="#">
                            <img src="./assets/images/adidas_gray.svg" alt="adidas" className="h-[6vh]" /> 
                        </a>
                        <button className="text-gray-400 hover:text-indigo-600 transition-all duration-500">
                            <IoMdMore size={30} />
                        </button>
                    </div>
                    <button className=" border-2 border-indigo-600 text-indigo-600 p-2 flex items-center justify-center rounded-lg gap-3 font-medium"> <CiUser size={25} /> Sign in</button>
                </div>
            </div>
        </nav>
        {isOpenSidebar ? <div className="h-[91vh] bg-red-500"></div> : null}
        </div>
    )
}

export default Navbar