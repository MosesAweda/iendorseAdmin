import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import useResponsiveCollapse from './useResponsiveCollapse';
import bell from './svg/bell.svg';
import dot from './svg/dot.svg';
import column from './svg/column.svg';
import arrowRight from './svg/arrowRight.svg';
import arrowLeft from './svg/arrowLeft.svg';
import search from './svg/search.svg'

const Users = () => {
  const [isCollapsed, toggleSidebar] = useResponsiveCollapse();

  return (
    <div className="">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 ${isCollapsed ? 'ml-16' : 'ml-48'} p-4`}>
        <Navbar Title="Users" message="1200 Users" />
        <div className='flex justify-between pb-5  pt-2'>   
        <div  className='relative'>            
           <input placeholder='search' className='border p-2 rounded-md px-4 focus:outline-none rounded-lg   pl-10'  />
           <img src={search} className='absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-4 h-4' />
            </div>
            <div>
                <input  type="date" 
                 
                className='border   rounded-md px-4 focus:outline-none  p-2  ' placeholder='Select Date'  />
            </div>
        </div>

        
        {/* Table wrapper with horizontal scrolling */}
        <div className="w-full   shadow-md sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">User's Name</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">Sex</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">Email Address</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">Phone Number</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">Registration Date</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">Status</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    William Alex
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Male</td>
                  <td className="px-6 py-4 whitespace-nowrap">useremail@gmail.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">080293239223</td>
                  <td className="px-6 py-4 whitespace-nowrap">23 Sep, 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">Active</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><img src={column} alt="column menu" /></td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    William Alex
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Male</td>
                  <td className="px-6 py-4 whitespace-nowrap">useremail@gmail.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">080293239223</td>
                  <td className="px-6 py-4 whitespace-nowrap">23 Sep, 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">Suspended</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><img src={column} alt="column menu" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex sm:justify-end my-5">
          <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Previous</span>
                  <img src={arrowLeft} alt="Previous" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  1
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Next</span>
                  <img src={arrowRight} alt="Next" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Users;   