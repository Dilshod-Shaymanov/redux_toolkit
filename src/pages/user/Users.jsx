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
         
          </div>
        ) : (
          <UsersCart data={users} />
        )}
      </div>
    </div>
  );
};

export default Users;
