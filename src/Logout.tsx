import { useNavigate } from 'react-router-dom';
import closebutton from './svg/closebutton.svg'
 
const Logout = ({ isOpen, onClose }: any) => {

const navigate = useNavigate();
    if (!isOpen) return null;
 
const clear = () => {
    sessionStorage.clear();
    localStorage.clear();
    onClose();
    navigate('/');
}

    return (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
            <div className="bg-white p-7 rounded-lg shadow-lg relative">
                <button type="button" className="absolute top-4 right-2.5 text-gray-400 bg-transparent hover:text-white-900 rounded-md text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="popup-modal" onClick={onClose}>
                    <img src={closebutton} alt="close-button" />  
                </button>
                <div className="py-6 px-16 text-center">
                    <h2 className="mb-3 text-lg font-bold">Logout</h2>
                    <p className='text-gray-600'>Are You Sure You Want To Logout?</p>
                    <br />
                    <button data-modal-hide="popup-modal" type="button" className="text-white-500 bg-grey hover:bg-gray-50 hover:text-black focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5  mr-[1rem] px-[2rem]" onClick={onClose}>Cancel</button>
                    <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-500 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 px-[2rem]" onClick={clear}>Logout</button>
                </div>
            </div>
        </div>
        </>
    );
};
 
export default Logout;