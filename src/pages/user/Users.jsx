import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UsersCart from "./Users-cart";

const Users = () => {
  const [users, setUsers] = useState([]);
  const reduxUsers = useSelector((state) => state.users.value);

  useEffect(() => {
    setUsers(reduxUsers);
  }, [reduxUsers]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-[#f3f4f6] to-[#e2e8f0] py-10">
      <div className="container mx-auto px-4">
        {!users.length ? (
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-5xl font-extrabold text-red-500 text-center mb-6">
              No Users Available
            </h2>
            <p className="text-xl text-gray-600 text-center">
              It looks like there are no users at the moment. Add some users to
              see them here.
            </p>
          </div>
        ) : (
          <UsersCart data={users} />
        )}
      </div>
    </div>
  );
};

export default Users;
