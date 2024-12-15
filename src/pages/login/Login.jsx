import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser } from "../../redux/slices/user-slice";
import { useLocation, useNavigate } from "react-router-dom";
import * as uuid from "uuid";

const Login = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const allUsers = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramsId = new URLSearchParams(useLocation().search).get("q");

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    age: "",
    password: "",
  });

  useEffect(() => {
    if (paramsId) {
      const userToEdit = allUsers.find((user) => user.id === paramsId);
      if (userToEdit) {
        setFormData(userToEdit);
      }
    }
  }, [paramsId, allUsers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { ...formData, id: paramsId ? paramsId : uuid.v4() };

    if (paramsId) {
      dispatch(editUser(userData));
    } else {
      dispatch(createUser(userData));
    }

    setFormData({
      fname: "",
      lname: "",
      gender: "",
      email: "",
      age: "",
      password: "",
    });
    navigate("/users");
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-800 to-blue-900 flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {paramsId ? "Update User" : "Create User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "First Name", name: "fname", type: "text" },
            { label: "Last Name", name: "lname", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Age", name: "age", type: "number" },
            { label: "Password", name: "password", type: "password" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-gray-700 font-medium mb-2"
              >
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <div className="flex items-center space-x-4">
              {[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ].map(({ label, value }) => (
                <label key={value} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={value}
                    checked={formData.gender === value}
                    onChange={handleChange}
                    required
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            {paramsId ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
