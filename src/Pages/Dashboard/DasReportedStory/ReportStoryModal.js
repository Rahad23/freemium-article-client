import React from 'react';

const ReportStoryModal = ({title,message,closeReportedModal,btnName,deleteHandler,itemData}) => {
    return (
        <div>
               <input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">   
     <label onClick={()=>deleteHandler(itemData)} htmlFor="delete-modal" className="btn btn-primary ">{btnName}</label>
     <button onClick={closeReportedModal} className='btn btn-outline'>cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReportStoryModal;