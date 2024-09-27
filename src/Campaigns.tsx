import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import useResponsiveCollapse from './useResponsiveCollapse';
import bell from './svg/bell.svg';
import dot from './svg/dot.svg';
import column from './svg/column.svg';
import arrowRight from './svg/arrowRight.svg';
import arrowLeft from './svg/arrowLeft.svg';
import search from './svg/search.svg';


const Campaigns = () => {
  const [isCollapsed, toggleSidebar] = useResponsiveCollapse();

  return (
    <div className="">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 ${isCollapsed ? 'ml-16' : 'ml-48'} p-4`}>
        <Navbar Title="Campaigns" message="2000  campaigns" />

        <div className='flex sm:justify-between mx-5 mt-3'>
            <div  className='relative'>           
           <input placeholder='search' className='border p-1 rounded-md px-4 focus:outline-none rounded-lg p-2 pl-10'  />
           <img src={search} className='absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-4 h-4' />
            </div>

            <div>
                <input type="date"    />
            </div>
        </div>
  

        <div className='flex sm:justify-start mt-8 mb-10 mx-5  '>
                <div className="flex text-sm justify-center mb-3   rounded-lg  border">
                    <button
                        className={`px-6 py-2 ${4 > 3 ? 'bg-customBlue text-white' : 'bg-white text-gray-800'}  w-full`}
                       
                    >
                        Pendnig 
                    </button>
                    <button
                        className={`px-6 py-2 ${3 > 4  ? 'bg-customBlue text-white' : 'bg-white text-gray-800'}  w-full`}
                      
                    >
                        Active
                    </button>
                    <button
                        className={`px-6 py-2 ${3 > 4  ? 'bg-customBlue text-white' : 'bg-white text-gray-800'}  w-full`}
                      
                    >
                        Inactive
                    </button>
                </div>
            </div>
    </div>
    </div>
  );
};

export default Campaigns;   