import React from "react"

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) =>{
    return (
        <div className=" w-full bg-custom-purple-800 h-14 bg-custom-blue flex items-center">
          <div className="w-64 flex justify-center items-center">
            <img className='self-center' src="" alt="logo" />
          </div>
          <div className="w-0 h-10 border border-teal-300 rounded-lg overflow-hidden"></div>
          
          <div className="flex flex-grow px-4 items-center justify-between">
            <p className='text-white'><span>Ayuda</span></p>
            <div className="flex items-center gap-3">
              <select name="" id="" className="mr-2 px-4 py-1 rounded-2xl">
                <option className='bg-white' value="las" >San Diego</option>  
                <option className='bg-white' value="DNI">La Libertad</option>
                <option className='bg-white' value="Pasaporte">Ancash</option>
              </select>
              <div className='bg-white  px-1 py-2 rounded-3xl'>
                <img src="" alt="notification icon" className="mr-2" />
              </div>
              <div className='bg-white  px-1 py-2 rounded-3xl'>
                <img src="" alt="message icon" />
              </div>
              <div className='flex items-center gap-3 text-teal-300'>
                <div>
                  <h2 className='text-lg'>Javier</h2>
                  <p className='text-sm'>LucasFil</p>
                </div>
                <div>
                  <img  src="" alt="" />
                </div>
                <div className='w-6 h-6 mr-24'>
                  Holass
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Header;