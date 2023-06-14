import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { MdArrowDropDownCircle } from "react-icons/md";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const [disabledButtons, setDisabledButtons] = useState([]);

  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/users`);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://melody-grove-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now..`,
            showConfirmButton: false,
            timer: 1500,
          });

          setDisabledButtons((prevDisabledButtons) => [
            ...prevDisabledButtons,
            user._id,
          ]);
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://melody-grove-server.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor now..`,
            showConfirmButton: false,
            timer: 1500,
          });

          setDisabledButtons((prevDisabledButtons) => [
            ...prevDisabledButtons,
            user._id,
          ]);
        }
      });
  };

  const isButtonDisabled = (userId) => disabledButtons.includes(userId);

  return (
    <div className="text-center">
      <Helmet>
        <title>Melody Grove | All Users </title>
      </Helmet>

      <h1 className="text-3xl font-semibold my-5">
        Total Users: {users.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="uppercase">{user.role}</td>

                <td
                  className={`uppercase ${
                    user.role === "admin" && "disabled hidden"
                  } `}
                >
                  <div className="dropdown dropdown-top dropdown-end z-10 ">
                    <label tabIndex={0} className="btn btn-xs">
                      <MdArrowDropDownCircle></MdArrowDropDownCircle>
                    </label>

                    <div
                      tabIndex={0}
                      className={`dropdown-content menu p-2 shadow  rounded-box flex gap-2 px-4 bg-red-600 ${
                        user.role === "admin" && " hidden"
                      }`}
                    >
                      <button
                        className={`${
                          user.role === "admin" && "disabled hidden"
                        } btn btn-xs`}
                        onClick={() => handleMakeAdmin(user)}
                        disabled={isButtonDisabled(user._id)}
                      >
                        Admin
                      </button>
                      <button
                        className={`${
                          user.role === "admin" && "disabled hidden"
                        } btn btn-xs`}
                        onClick={() => handleMakeInstructor(user)}
                        disabled={isButtonDisabled(user._id)}
                      >
                        Instructor
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
