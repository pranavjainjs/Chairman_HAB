import React, { useEffect } from "react";
import Sidebar from "../../components/Admin/Sidenav/Sidebar";
import "./AdminScreen.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import useAuthCheck from "../../hooks/useAuthCheck";

const AdminScreen = () => {
  // let userData = useSelector((store) => store.auth);
  // console.log("timepass", { userData });
  // const isLoggedIn = useAuthCheck();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login", { replace: true });
  //     return;
  //   }
  // }, [isLoggedIn]);

  return (
    <div className="bg-gray-100 font-family-karla flex">
      {/* {userData ? (
        <>
          {userData?.is_staff ? ( */}
            <Sidebar>
              <Routes>        
              </Routes>
            </Sidebar>
          {/* ) : (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-1/2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-center">
                  You are Not Authorized.
                </h1>
                <p className="text-center mt-2 text-xl">
                  Go back to{" "}
                  <Link to="/" className="text-blue-600 hover:underline">
                    home
                  </Link>
                </p>
              </div>
            </div>
          )}
        </> */}
      {/* ) : (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-1/2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Welcome to Admin Panel.
            </h1>
            <p className="text-xl sm:text-2xl text-center mt-3">
              Please{" "}
              
              <Link to="/login">
                <button className="border-2 py-1 px-4 rounded-md text-sm font-medium">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AdminScreen;