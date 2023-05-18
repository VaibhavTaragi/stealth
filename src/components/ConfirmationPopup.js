import { MdDelete} from 'react-icons/md';
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';

const ConfirmationPopup = ({ popupPosition, setShowConfirmation }) => {

  
    return (
        <div
            className="absolute bg-white border border-gray-300 shadow-lg rounded text-sm"
            style={{ top: popupPosition.top, left: popupPosition.left }}
          >
            {/* Popup content */}
            <div className="flex items-center space-x-2 bg-slate-200 p-2 font-bold">
              <div className="text-gray-500">
                <MdDelete size={15} />
              </div>
              <div className="text-gray-600 font-nunito">Remove</div>
            </div>
            <div className="flex items-center mt-2 space-x-4 p-2">
                <span className='text-slate-500 font-nunito text-sm'>Are you sure</span>
              {/* Delete button */}
              <button
                className=" text-green-500"
                onClick={()=>setShowConfirmation(false)}
              >
                <AiFillCheckCircle size={20}/>
              </button>
              {/* Cancel button */}
              <button
                className="text-red-600"
                onClick={()=>setShowConfirmation(false)}
              >
                <AiFillCloseCircle size={20} />
              </button>
            </div>
          </div>
    );
  };

  export default ConfirmationPopup;