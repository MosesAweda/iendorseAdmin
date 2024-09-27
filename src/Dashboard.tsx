import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { LineChart } from '@mui/x-charts/LineChart';

const Dashboard = () => {
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
        <Navbar Title="Dashboard" message="Welcome back, Jane" />

        <div className="grid sm:grid-rows-2 sm:grid-flow-col gap-4">
          <div className="col-span-1 border rounded-lg p-8">
            <div className="flex justify-between">
              <div className="font-medium">Subscriptions</div>
              <div>This Week</div>
            </div>

            <div className="flex justify-center">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    color: '#0D236E',
                  },
                ]}
                
                height={300}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              />
            </div>
          </div>

          <div className="col-span-1 bg--50 rounded-lg p-3">
            <div className="flex justify-between mb-3">
              <div className="font-medium text-lg">Campaigns</div>
              <div className="text-customBlue">View All</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-4">
              {/* Example Campaign Card */}
              <div
                className="rounded-lg border shadow"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backgroundImage: `url(images/photo.png)`,
                  backgroundSize: 'cover',
                  height: 200,
                }}
              >
                <div className="grid items-end h-full  ">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(242, 242, 242, 0.00) 0%, rgba(242, 242, 242, 0.08) 14.58%, rgba(242, 242, 242, 0.78) 50%, #F2F2F2 70.83%, #F2F2F2 100%)`,
                    }}
                    className='w-full'
                  >
                    <div className="flex items-center p-2">
                    <div className="flex items-center justify-center bg-white border-2 border-customBlue rounded-full w-10 h-10 mr-1">
                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-100">
                  {5>2 ? (
                    <img
                      src="images/avatar.png"
                      className="rounded-full object-cover w-full h-full"
                      alt="Avatar"
                    />
                  ) : (
                    <span className="text-customBlue font-bold text-sm">
                     IN
                    </span>
                  )}
                </div>
              </div>
                      <div>
                        <div className="font-semibold text-xs">Owner</div>
                        <div className="text-xs italic">Title</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg border shadow"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backgroundImage: `url(images/photo.png)`,
                  backgroundSize: 'cover',
                  height: 200,
                }}
              >
                <div className="grid items-end h-full  ">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(242, 242, 242, 0.00) 0%, rgba(242, 242, 242, 0.08) 14.58%, rgba(242, 242, 242, 0.78) 50%, #F2F2F2 70.83%, #F2F2F2 100%)`,
                    }}
                    className='w-full'
                  >
                    <div className="flex items-center p-2">
                    <div className="flex items-center justify-center bg-white border-2 border-customBlue rounded-full w-10 h-10 mr-1">
                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-100">
                  {5>2 ? (
                    <img
                      src="images/avatar.png"
                      className="rounded-full object-cover w-full h-full"
                      alt="Avatar"
                    />
                  ) : (
                    <span className="text-customBlue font-bold text-sm">
                     IN
                    </span>
                  )}
                </div>
              </div>
                      <div>
                        <div className="font-semibold text-xs">Owner</div>
                        <div className="text-xs italic">Title</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="row-span-2  bg-gray-50 rounded-lg p-3 shadow-md  ">
                <div className='font-medium text-md mb-2 '> New Users</div>

                <div className='flex bg-gray-100 border rounded-lg p-1 items-center  mb-4'>
                <div> <img src='images/avatar.png'  className='w-8 h-8 '/>
                 </div>

                 <div className='p-1 ml-1'>    
                <div className='text-xs '> Name And Surnmae</div>
                <div className='bg-gray-50' style={{fontSize:'8px'}}>Onboarded:12:00 PM 26 April, 2023</div>
                </div>
                </div>

                 
                <div className='flex bg-gray-100 border rounded-lg p-1 items-center  '>
                <div> <img src='images/avatar.png'  className='w-8 h-8 '/>
                 </div>

                 <div className='p-1 ml-1'>    
                <div className='text-xs '> Name And Surnmae</div>
                <div className='bg-gray-50' style={{fontSize:'8px'}}>Onboarded:12:00 PM 26 April, 2023</div>
                </div>
                </div>

                    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
