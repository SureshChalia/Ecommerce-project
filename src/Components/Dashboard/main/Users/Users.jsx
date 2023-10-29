import React, { useState } from 'react'
import { getAllUsers } from '../../../../services/operations/userAPI';
import Spinner from '../../../../Pages/Spinner';
import { useEffect } from 'react';


const Users = () => {
  const [loading, setLoading] = useState(false);
  const [allusers, setAllusers] = useState([]);

  async function fetchAllUsers() {
    setLoading(true);
    try {
      const result = await getAllUsers();
      setAllusers(result.data);
      console.log(result, "all users");
    } catch (error) {
      console.log("Error occured during fetching the all users", error);
      setAllusers([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchAllUsers();
  }, [])

  console.log(allusers, "all users outside useeffect ");

  return (
    <div>
      {
        loading ? <Spinner /> :
         (
          Array.isArray(allusers) && allusers.length > 0 ?
          <div className='flex flex-wrap gap-4 '>
            {
           allusers.map((user) => (<div className='flex flex-col items-center justify-center p-4 border rouned-md gap-2 rounded-md' key={user._id}>
             <img src={user.image} alt="profile" className='rounded-full w-20 h-20 ' />
             <p>{user.name}</p>
             <p>#{user._id}</p>
             <p>{user.email}</p>
             <button className='px-4 py-1 bg-[#0095ff] text-white text-sm rounded-sm shadow-md cursor-pointer select-none leading-normal  whitespace-nowrap border border-transparent active:bg-[#0064bd] active:shadow-none  hover:shadow-[0_0_0_4px_rgba(0, 149, 255, .15)]  '>Profile</button>
           </div>))
         }
          </div> :
          
            <div className="flex justify-center items-center">
              <p>No Users Found...?</p>
            </div>
          
         )
      }
    </div>
  )
}
export default Users