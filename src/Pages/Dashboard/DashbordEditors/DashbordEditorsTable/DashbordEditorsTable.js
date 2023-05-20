import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineTransaction } from "react-icons/ai";
import {
  RiArrowDropDownLine,
  RiArrowUpDownFill,
  RiUserFollowLine,
} from "react-icons/ri";
import { BiImageAlt } from "react-icons/bi";
import "./DashordEditorsTable.css";
import { Link } from "react-router-dom";
import { APIContext } from "../../../../contexts/APIProvider";
import Swal from "sweetalert2";
const DashbordEditorsTable = ({ selectedNumber }) => {
  const [users, setUsers] = useState([]);
  const { isDarkMode, searchResults, writerSuggestions } = useContext(APIContext);
  // console.log(searchResults)
  useEffect(() => {

    fetch(`${process.env.REACT_APP_API_URL}/all-users/${selectedNumber}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [selectedNumber, users]);

  const deleteWriter = (_id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete this user",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_API_URL}/writer-delete/${_id}`, {
          method: "DELETE",
      })
          .then((res) => res.json())
          .then((data) => {
              // console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'the user has been deleted.',
                  'success'
                )
              }
          });
       
      }
    })
     // console.log(id);
  }
  return (
    <div>
      <div className="overflow-x-auto hideScrollbar">
        <table
          className={
            isDarkMode
              ? "table w-full text-black-350 p-4"
              : "bg-base-100 text-black-350 table w-full"
          }
        >
          {/* <!-- head --> */}
          <thead className="bg-white">
            <tr>
              <th>
                <div className="flex items-center text-sm font-medium">
                  <BiImageAlt className="mr-1 text-lg font-bold text-gray-900" />{" "}
                  Image
                </div>
              </th>
              <th>
                <div className="flex items-center text-sm font-medium">
                  <RiArrowUpDownFill className="mr-1 text-lg font-bold text-gray-900" />{" "}
                  Name
                </div>
              </th>
              <th>
                <div className="flex items-center text-sm font-medium">
                  <RiUserFollowLine className="mr-1 text-lg font-bold text-gray-900" />{" "}
                  Follows
                </div>
              </th>
              <th>
                <div>
                  <div className="flex items-center text-sm font-medium">
                    <AiOutlineTransaction className="mr-1 text-lg font-bold text-gray-900" />{" "}
                    Action
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          {
            writerSuggestions?.length === 0 
            ?
<tbody>
            {users.map((userData) => (
              <tr>
                <td>
                  {userData?.picture ? (
                    <img src={userData?.picture} className="w-20" alt="" />
                  ) : (
                    <h4 className="text-gray-900 font-medium">Not found</h4>
                  )}
                </td>
                <td>
                  <h4 className="font-serif font-medium text-gray-900">
                    {userData?.name ? userData?.name : "Not found"}
                  </h4>
                </td>
                <td>
                  <h4>
                    {userData?.following ? userData?.following?.length : 0}
                  </h4>
                </td>
                <td>
                  {/* <button >Action<RiArrowDropDownLine className='text-xl' /></button> */}
                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className="btn btn-sm bg-green-550 hover:bg-green-550 border-none text-white flex items-center"
                    >
                      Action
                      <RiArrowDropDownLine className="text-xl" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow-lg rounded-box w-52 bg-white"
                    >
                      <li>
                        {/* <Link to={""} className="font-semibold text-gray-900">
                          Message
                        </Link> */}
                      </li>
                      <li>
                        <span onClick={()=>deleteWriter(userData?._id)} className='text-red-600 font-semibold'>Delete user</span>
                        {/* <Link to={""} className="font-semibold text-gray-900">
                          Report user
                        </Link> */}
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          :
          <tbody>
            {writerSuggestions.map((userData) => (
              <tr>
                <td>
                  {userData?.picture ? (
                    <img src={userData?.picture} className="w-20" alt="" />
                  ) : (
                    <h4 className="text-gray-900 font-medium">Not found</h4>
                  )}
                </td>
                <td>
                  <h4 className="font-serif font-medium text-gray-900">
                    {userData?.name ? userData?.name : "Not found"}
                  </h4>
                </td>
                <td>
                  <h4>
                    {userData?.following ? userData?.following?.length : 0}
                  </h4>
                </td>
                <td>
                  {/* <button >Action<RiArrowDropDownLine className='text-xl' /></button> */}
                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className="btn btn-sm bg-green-550 hover:bg-green-550 border-none text-white flex items-center"
                    >
                      Action
                      <RiArrowDropDownLine className="text-xl" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow-lg rounded-box w-52 bg-white"
                    >
                      {/* <li>
                        <Link to={""} className="font-semibold text-gray-900">
                          Message
                        </Link>
                      </li> */}
                      <li>
                      <span onClick={()=>deleteWriter(userData?._id)} className='text-red-600 font-semibold'>Delete user</span>
                        {/* <Link to={""} className="font-semibold text-gray-900">
                          Report user
                        </Link> */}
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          }
          
        </table>
      </div>
    </div>
  );
};

export default DashbordEditorsTable;
