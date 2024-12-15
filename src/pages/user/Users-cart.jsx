import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/user-slice";
import { useNavigate } from "react-router-dom";

const UsersCart = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditUser = (id) => {
    navigate(`/login/?q=${id}`);
  };

  const userData = data?.map((item) => (
    <div
      key={item?.id || item?.email}
      className="bg-gradient-to-b from-[#1D2D43] to-[#16202F] text-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 h-auto w-auto"
    >
      <div className="h-[100px] w-[100px] bg-gradient-to-br from-[#00BFFF] to-[#008CBA] rounded-full mx-auto flex items-center justify-center mb-6 shadow-md">
        <span className="text-4xl font-extrabold text-white">
          {item?.fname.charAt(0)}
          {item?.lname.charAt(0)}
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-center mb-4">
        {item?.fname} {item?.lname}
      </h2>
      <p className="text-center text-[#00BFFF] mb-4 break-words text-md font-semibold">
        {item?.email}
      </p>
      <p className="text-center text-gray-400">
        Age: <span className="font-semibold">{item?.age}</span>
      </p>
      <p className="text-center text-gray-400">
        Password: <span className="font-semibold">{item?.password}</span>
      </p>
      <p
        className={`text-center font-semibold mt-3 ${
          item?.gender === "male" ? "text-blue-400" : "text-pink-400"
        }`}
      >
        Gender: {item?.gender}
      </p>
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={() => handleDelete(item?.id)}
          className="py-2 px-8 bg-red-600 text-white font-semibold rounded-2xl hover:bg-red-700 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Delete
        </button>
        <button
          onClick={() => handleEditUser(item?.id)}
          className="py-2 px-8 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-5xl font-extrabold text-center text-[#00BFFF] mb-12 drop-shadow-lg">
        User Cards
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-10 max-sm:grid-cols-1">
        {userData}
      </div>
    </div>
  );
};

export default UsersCart;
