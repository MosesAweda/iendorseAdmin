import React from 'react';
import fileicon from './svg/fileicon.svg';
import wallet from './svg/wallet.svg';
import wallet2 from './svg/wallet2.svg';
import grid from './svg/grid.svg';
import gear from './svg/gear.svg';
import users from './svg/users.svg';
import campaigns from './svg/campaigns.svg';  
import permissions from './svg/permissions.svg';
  
const Sidebar = ({ isCollapsed, toggleSidebar }:any) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 x  h-screen transition-all ${
        isCollapsed ? "w-16" : "w-48"
      } bg-customBlue`}
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between py-4 overflow-y-auto">
     
        <ul className="space-y-2">
        <div className='flex  justify-start sm:justify-end'>
        {/* <button
          onClick={toggleSidebar}
          aria-controls="default-sidebar"
          type="button"
          className={`inline-flex hidden md:block items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
        >
          <span className="sr-only">Toggle sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button> */}
       </div>

       



          <li>
            <a
              href="/Dashboard"
              className="grid  items-center p-2 text-gray-50  hover:bg-white hover:text-customBlue "
            >
             <div className='flex justify-center mb-1'> 
               <img className="bg-gray-200  " src={grid}  alt="Dashboard icon "  title='Dashboard' />  </div>

              {!isCollapsed && 
              <div className="flex justify-center    whitespace-nowrap">Dashboard</div>}
            </a>
            </li>

                
            <li>
            <a
              href="/Users"
              className="grid  items-center p-2 text-gray-50  hover:bg-white hover:text-customBlue "
            >
             <div className='flex justify-center mb-1'>  <img className="  " src={users}  alt="Users icon "  title='Dashboard' />  </div>

              {!isCollapsed && 
              <div className="flex justify-center    whitespace-nowrap">Users</div>}
            </a>
          </li>


          <li>
            <a
              href="/Campaigns"
              className="grid  items-center p-2 text-gray-50  hover:bg-white hover:text-customBlue "
            >
             <div className='flex justify-center mb-1'>  <img className="  " src={campaigns}  alt="Campaigns  icon "  title='Dashboard' />  </div>

              {!isCollapsed && 
              <div className="flex justify-center    whitespace-nowrap"> Campaigns</div>}
            </a>
          </li>

          <li>
            <a
              href="/Permissions"
              className="grid  items-center p-2 text-gray-50  hover:bg-white hover:text-customBlue "
            >
             <div className='flex justify-center mb-1'>  <img className="bg-gray-200 rounded-sm  " src={permissions}  alt="Campaigns  icon "  title='Dashboard' />  </div>

              {!isCollapsed && 
              <div className="flex justify-center    whitespace-nowrap"> Permissions </div>}
            </a>
          </li>



  
        </ul>

       
      </div>
    </aside>
  );
};

export default Sidebar;
