 import React from "react";
 import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
 import Dashboard from "./Dashboard";
 import Notifications from "./Notifications";
 import Users from "./Users";
 import Permissions from "./Permissions";
 import Profile from "./Profile";
 import SendInvite from "./sendInvite";
 import Campaigns from "./Campaigns";
 

 const App  = () => {
   return (
 
      <>
            <Routes>
               <Route path='/Dashboard' element={<Dashboard />} />
               <Route path='/Notifications' element={<Notifications />} />
               <Route path='/Users' element={<Users />} />
               <Route path="/Permissions" element={<Permissions />} />
               <Route path="Profile" element={<Profile />} />
               <Route path="/sendInvite" element={<SendInvite />} />
               <Route path="/Campaigns" element={<Campaigns />} />
            </Routes>
 
      </>
   );
 }
 export default App