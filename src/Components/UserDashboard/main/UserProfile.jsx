import React from 'react'

const UserProfile = () => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  return (
    <div>
      <div className=" p-8">
        <div className=" bg-gray-50 p-8 rounded shadow-md">
         <div className='flex items-center gap-5'>
         <div className="flex flex-col justify-center gap-3 ">
            <img
              src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.name}`}
              alt="user"
              className="rounded-full w-24 h-24 object-cover bg-slate-300"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-blue-500">Welcome <span>{user.name}</span></h1>
         </div>
          <div className="flex gap-4 mt-5">
            <div className='w-full space-y-5'>
              <div>
                <p className="block text-gray-700 text-sm font-bold mb-2" > Name </p>
                <p className="border rounded-lg px-3 py-2 w-full">{user.name}</p>
              </div>
              <div>
                <p className="block text-gray-700 text-sm font-bold mb-2" > Email </p>
                <p className="border rounded-lg px-3 py-2 w-full">{user.email}</p>
              </div>
              <div>
                <p className="block text-gray-700 text-sm font-bold mb-2" >Date of Birth </p>
                <p className="border rounded-lg px-3 py-2 w-full">{user.dob}</p>
              </div>
              <div>
                <p className="block text-gray-700 text-sm font-bold mb-2" > Phone </p>
                <p className="border rounded-lg px-3 py-2 w-full">{user.contactNumber}</p>
              </div>
              <div>
                <p className="block text-gray-700 text-sm font-bold mb-2" > Address </p>
                <p className="border rounded-lg px-3 py-2 w-full">{user.address}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile