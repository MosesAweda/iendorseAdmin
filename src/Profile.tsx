import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import useResponsiveCollapse from './useResponsiveCollapse';
import bell from './svg/bell.svg';
import dot from './svg/dot.svg';
import column from './svg/column.svg';
import arrowRight from './svg/arrowRight.svg';
import arrowLeft from './svg/arrowLeft.svg';

const Profile = () => {
  const [isCollapsed, toggleSidebar] = useResponsiveCollapse();

  return (
    <div className="">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 ${isCollapsed ? 'ml-16' : 'ml-48'} p-4`}>
        <Navbar Title="Profile" message="" />

     <div className=' flex sm:justify-end   mt-5 '>   
        <button className='bg-customBlue text-white rounded-md px-6 py-2 mx-1 text-xs'>  Edit Profile</button> 
        <button className='bg-customBlue text-white rounded-md px-6 py-2 mx-1 text-xs'>  Change Profile </button> 
     </div>
       
        <div className="relative p-4 w-full max-w-md max-h-full">
    
        
          <div className="py-3">
            <div className='px-5'>
           

              <div className="flex-col max-w-sm space-y-3 justify-center mb-5">
      
 

              <div className="relative w-full">
                  <label className="absolute left-3 top-1 text-xs text-gray-900 px-1">
                    Full Name
                  </label>
                  <input
                    name=" FullName"
                    className="w-full pt-5 pb-2 px-4 text-xs  rounded-md border text-gray-900"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative w-full">
                  <label className="absolute left-3 top-1 text-xs text-gray-900 px-1">
                  Email Address
                  </label>
                  <input
                    name="Email Address"
                    className="w-full pt-5 pb-2 px-4 text-xs  rounded-md border text-gray-900"
                    placeholder="Email Address"
                  />
                </div>


                <div className="relative w-full">
                  <label className="absolute left-3 top-1 text-xs text-gray-900 px-1">
                   Phone  Number
                  </label>
                  <input
                    name="Phone Number"
                    className="w-full pt-5 pb-2 px-4 text-xs  rounded-md border text-gray-900"
                    placeholder="Phone Number"
                  />
                </div>


                <div className='w-full '> 
                  
                </div>
             


 

              
 
 
              </div>

              <button
              
                className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center
                  "cursor-not-allowed bg-gray-600" : "bg-customBlue hover:bg-blue-900 focus:ring-4 focus:ring-blue-300`}
              >
             <span className='inline'> save    </span> 
           jjj
              </button>
            </div>
          </div>
      
      </div>
      
      </div>



 
    
    </div>
  );
};

export default Profile;   