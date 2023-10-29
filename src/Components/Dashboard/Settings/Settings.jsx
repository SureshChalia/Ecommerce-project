import React from "react";
import { faker } from "@faker-js/faker";

const Settings = () => {
  const adminImage = faker.image.avatar();
  return (
    <div>
      <div className=" p-8">
        <div className=" bg-gray-50 p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Admin Profile</h1>
          <form>
            <div className="flex gap-4">
              <div>
                <div className="mb-4 flex gap-4 items-center">
                  <div>
                    <label
                      for="FirstName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="FirstName"
                      name="FirstName"
                      className="border rounded-lg px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label
                      for="LastName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="LastName"
                      name="LastName"
                      className="border rounded-lg px-3 py-2 w-full"
                    />
                  </div>
                </div>

                <div className="mb-4 flex gap-4 items-center">
                  <div>
                    <label
                      for="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border rounded-lg px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label
                      for="Phone"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      id="Phone"
                      name="Phone"
                      className="border rounded-lg px-3 py-2 w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <img
                  src={adminImage}
                  alt="admin"
                  className="rounded-full w-24 h-24 object-cover"
                />
                <input
                  type="file"
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full 
                  file:border-0 file:text-sm file:font-semibold  file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                  accept="image/png,image/jpg,image/jpeg"
                />
              </div>
            </div>

            <div className="mb-4 w-fit">
              <label
                for="dob"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                for="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <textarea
                type="password"
                id="address"
                name="address"
                className="border rounded-lg px-3 py-2 w-11/12 max-w-[500px]"
                rows="5"
                cols="20"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
            >
              Save Profile
            </button>
          </form>
        </div>

        <div className="flex gap-4 items-center mt-5">
          <div className="flex gap-4 rounded-md bg-slate-50 border p-4">
            <div>
              <h2 className="font-bold text-lg">Password</h2>
              <p>You can change your password by click on change button</p>
            </div>
            <button className=" text-gray-600 text-xs bg-gray-100 rounded-full px-4 py-1 border h-fit ">change</button>
          </div>
          <div className="flex gap-4  bg-slate-50 border p-4 rounded-md">
            <div>
              <h2 className="font-bold text-lg">Remove account</h2>
              <p>
                Once you delete your account there is no going back , please be
                certain
              </p>
            </div>
            <button className=" text-red-600 text-xs bg-gray-100 rounded-full px-4 py-1 border h-fit ">Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
