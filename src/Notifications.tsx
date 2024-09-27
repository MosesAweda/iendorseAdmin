import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import bell from './svg/bell.svg'
import dot from './svg/dot.svg'

const Notifications = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => {
      setIsCollapsed(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 ${isCollapsed ? 'ml-16' : 'ml-48'} p-4`}>
        <Navbar  Title= "Notifications"/>

        <div className="p-4 max-w-xl shadow-sm bg-white rounded-lg my-2 border">
                            <div className="flex items-center justify-between">
                                <div className="flex mb-3">
                                    <div className="  rounded-full border-customBlue border">
                                       <div className='p-3'> 
                                         <img src={bell}   alt="notification" className="   " />
                                       </div>
                                       </div>
                                         
                                </div>
                                <div className="mouse-pointer">
                                    <img src={dot} alt="dot" />
                                </div>
                            </div>
                            <div className="my-2 pr-20">
                                <h1 className="font-medium">
                                 title title
                                </h1>
                                <div className="mt-2">
                                   message message
                                    <p className="text-xs mt-8">
                                      23 Sep, 2024
                                    </p>
                                </div>
                            </div>
                        </div>  
 
       
      </div>
    </div>
  );
};

export default Notifications;
