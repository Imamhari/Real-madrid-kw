import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Checkbox from './../../atoms/Checkbox/index';

const NextEvent = () => {
   const [openModal, setOpenModal] = useState(false)
  return (
    <section className="mb-40 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Next Events</h1>
        <FaArrowRight size={25} className="text-gray-400"/>
      </div>
      <div>
        <button onClick={() => setOpenModal(!openModal)}>Filter Teams</button>
      </div>
     {
      openModal ? ( 
      <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen backdrop-blur-2xl ">
        <div className="w-full h-full relative">
          <div className="bg-white w-full absolute bottom-0 p-5 rounded-t-3xl px-5 lg:px-20 flex flex-col gap-3">
            <div className=" flex justify-between">
              <button className="text-indigo-600 font-semibold text-sm">Reset Filters</button>
              <button onClick={() => setOpenModal(!openModal)}>X</button>
            </div>
            <p className="text-xl font-bold">Filter teams</p>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-lg font-bold">Football</p>
                <Checkbox/>
                <Checkbox/>
                <Checkbox/>
              </div>
              <div>
                <p className="text-lg font-bold">Basketball</p>
                <Checkbox/>
                <Checkbox/>
                <Checkbox/>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#3E31FB] to-[#8250F6] text-white py-3 rounded-lg font-bold">Show Events</button>
          </div>
        </div>
      </div>) : null
     } 
    </section>
  )
}

export default NextEvent
