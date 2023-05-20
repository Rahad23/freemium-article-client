import React from "react";

function Checkbox({ label,label2, checked, onChange }) {
    return (
      <>
    {/* <label className="relative flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        checked={checked}
        onChange={onChange}
      />
          <span className="ml-2">{label}</span>
            </label> */}
            

 <div className="form-control mb-8">
                <label className="cursor-pointer label">
            <span className="label-text">{label}<br/>{label2}
            </span>
                 
                    <input type="checkbox" checked={checked}
                  onChange={onChange}
                        className="checkbox checkbox-success" />
                </label>
</div>

      </>




      
  );
}

export default Checkbox;
