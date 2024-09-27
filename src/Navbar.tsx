import React, {useState} from 'react';
import ubaRed from './svg/ubaRed.svg'
import exit from './svg/exit.svg'
import Logout from './Logout'
import bell from './svg/bell.svg'
import bell_filled from './svg/bell_filled.svg'

const Navbar = (props:any) => {
 
    return (
        <>
        <div className="  p-4 flex justify-between ">
            <div className='mx-4'>
               <div className='font-medium text-2xl'> {props.Title}</div> 
               <div className='text-xs mt-2'> {props.message}</div>
             </div>
            <div className='flex'>
                <div className='px-2'>
                    <a href='/Notifications' >    
                    <img className='py-2 ' src={props.Title === 'Notifications' ? bell_filled : bell} />
                    </a>
                </div>
                <div className='px-3 py-2'>  Admin Username </div>

               <div className='py-1  '>  
                <a href='/Profile'>
                 <img className="rounded-full border-2 border-white" style={{ boxShadow: '0 0 0 1px #0D236E' }} 
               src="./images/avatar.png" width={35} height={35} alt="Avatar" />
               </a>
               </div> 
            </div>
        </div>


        
         
        </>
    );
};

export default Navbar;
