import React, { useEffect, useState } from 'react';
import { FILES_API } from '../constants/constants';
import { MdDelete } from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';
import ConfirmationPopup from './ConfirmationPopup';

const AllItems = () => {

  const [data, setData] = useState([]); 
  const [selectedRows, setSelectedRows] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const fetchData = async () => {
    const res = await fetch(FILES_API);
    const data = await res.json();
    setData(data);
  }; 

  const handleDeleteClick = (event) => {
    const { top, left } = event.target.getBoundingClientRect();
    setShowConfirmation(true);
    setPopupPosition({ top: top - 10, left: left - 10 });
  };


  useEffect(()=>{
    fetchData();
  },[]);

  const handleSelectAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const handleSelectRow = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className='bg-white p-4 mb-8 '>
      <h1 className='font-bold text-lg mb-8 text-slate-700'>All items</h1>
      <table className="min-w-[1000px] divide-y divide-gray-200 text-slate-500">
      <thead>
        <tr>
          <th className="px-2 py-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={handleSelectAllRows}
                className="form-checkbox h-3 w-3 text-purple-500"
              />
            </label>
          </th>
          <th className="px-2 py-2 text-left">NAME</th>
          <th className="px-2 py-2 text-left">OWNER</th>
          {/* <th className="px-2 py-2 text-left">Labels</th> */}
          <th className="px-2 py-2 text-left">TYPE</th>
          <th className="px-2 py-2 text-left">MODIFIED</th>
          <th className="px-2 py-2 text-left">ACTION</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.id}>
            <td className="px-2 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-3 w-3 text-purple-600"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                />
              </label>
            </td>
            <td className="px-2 py-2"><div className='flex gap-4'>
              <img src={row?.file} alt="Owner" className="h-8 w-8" />
                <span>{row.Name}</span>
              </div></td>
            <td className="px-2 py-2">
              <img src={row.Owner} alt="Owner" className="h-8 w-8 rounded-full" />
            </td>
            {/* <td className="px-2 py-2">{row.Labels.map((label) => label.Name).join(', ')}</td> */}
            <td className="px-2 py-2">{row.Type}</td>
            <td className="px-2 py-2">{formatDate(row.ModifietAt)}</td>
            <td className="px-2 py-2">
              <div className="flex space-x-2">
                <FiEdit className="text-purple-500 cursor-pointer" />
                <MdDelete className="text-purple-500 cursor-pointer" onClick={handleDeleteClick}/>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* Confirmation Popup */}
    {showConfirmation && (
        <ConfirmationPopup
          popupPosition={popupPosition}
          setShowConfirmation={setShowConfirmation}
        />
      )}
    </div>
  )
}

export default AllItems