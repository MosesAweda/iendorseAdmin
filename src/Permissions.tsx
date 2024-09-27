import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import useResponsiveCollapse from './useResponsiveCollapse';
import bell from './svg/bell.svg';
import dot from './svg/dot.svg';
import column from './svg/column.svg';
import arrowRight from './svg/arrowRight.svg';
import arrowLeft from './svg/arrowLeft.svg';

const Permissions = () => {
  const [isCollapsed, toggleSidebar] = useResponsiveCollapse();

  return (
    <div className="">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 ${isCollapsed ? 'ml-16' : 'ml-48'} p-4`}>
        <Navbar Title="Permissions" message="" />

     <div className='mx-4'>    
        <div className=' pb-5 pt-2'>
          <a href='/SendInvite'>
        <button className='bg-customBlue text-white rounded-md px-6 py-2'>Send Invite</button>
        </a>
        </div>
        
        {/* Table wrapper with horizontal scrolling */}
        <div className="w-full   shadow-md sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap"> Email</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">Phone Number</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap"> Role</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap"> Status</th>
         
                  <th scope="col" className="px-6 py-3 whitespace-nowrap"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    William Alex
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">useremail@gmail.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">080293239223</td>
            
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-green-100 text-green-800 px-4 py-2     rounded-lg">Active</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><img src={column} alt="column menu" /></td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    William Alex
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">useremail@gmail.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">080293239223</td>
            
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-green-100 text-green-800 px-4 py-2     rounded-lg">Active</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><img src={column} alt="column menu" /></td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    William Alex
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">useremail@gmail.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">080293239223</td>
            
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-blue-50 text-blue-800 px-4 py-2     rounded-lg">Invited</button>
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
    </div>
  );
};

export default Permissions;   