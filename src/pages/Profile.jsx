// import { FaRegCircleUser } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import ReqFieldItem from "../components/ReqFieldItem";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { UserContext } from "../context/userContext";
import { enqueueSnackbar } from "notistack";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditProfile from "./EditProfile";
import ChangePassword from "../pages/ChangePassword.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 280,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
};

const styleForChangePassword = {
  position: "absolute", 
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 370,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
};

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openChangePass, setOpenChangePass] = React.useState(false);
  const handleCloseChangePass = () => setOpenChangePass(false);

  const [requests, setRequests] = useState(null);
  const { user, setUser, isUserInfoReady } = useContext(UserContext);
  const [requestUpdate, setRequestUpdate] = useState(false);
  const [resAPIError, setResAPIError] = useState(false);




  const handleOpenChangePass = () => {
    setOpenChangePass(true);
    axios
      .post(
        "/verifyemail/",
        { mail: user.userDetails.email },
        {
          headers: {
            "X-CSRFToken": user && user["X-CSRFToken"].csrftoken,
          },
        }
      )
      .then((res) => {
        if (res.data.status === 200) {
          enqueueSnackbar(res.data.message, { variant: "success" });
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get("/userrequests/", {
        headers: {
          "X-CSRFToken": user && user["X-CSRFToken"].csrftoken,
        },
      })
      .then(({ data }) => {
        const requestData = data.data;
        setRequests(requestData.reverse());
      })
      .catch((error) => {
        setResAPIError(true);
        console.log(error);
      });
  }, [requestUpdate, user]);

  const logout = () => {
    axios
      .get("/logout/", {
        headers: {
          "X-CSRFToken": user && user["X-CSRFToken"].csrftoken,
        },
      })
      .then(() => {
        setUser(null);
        enqueueSnackbar("Logged out Successfully", { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong", { variant: "error" });
        console.log(error);
      });
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  if(resAPIError){
    return <div className="w-full mt-4">
      <img className="mx-auto" src="https://t4.ftcdn.net/jpg/05/24/04/51/360_F_524045110_UXnCx4GEDapddDi5tdlY96s4g0MxHRvt.jpg" alt="" />
    </div>
  }

  const steps = ["You", "Teacher", "Resource Head", "Principle", "Director"];

  return (
    <>
      <div className=" mx-auto rounded-xl  grid grid-cols-4 gap-4 p-6 max-sm:w-[100%] md:w-[80%] sm:max-md:w-[90%] mt-8 bg-gray-100">
        {isUserInfoReady && user && (
          <div className="col-span-3 gap-6  grid grid-cols-2 px-4 ">
            <ReqFieldItem
              label="Name"
              value={
                user.Username !== ""
                  ? user.Username
                  : "Add Name edit btn"
              }
            />
            <ReqFieldItem label="Position" value={user.Role} />
            <ReqFieldItem label="Email" value={user.email} />
            <ReqFieldItem
              label="Organization"
              value={user.organization}
            />
          </div>
        )}

        <div className="flex flex-col justify-end gap-2 ">
          <button  onClick={handleOpen} className="text-md transition-all duration-300 text-center font-semibold text-white border border-white px-4 py-2 cursor-pointer rounded-xl bg-gray-500 hover:bg-gray-800 hover:text-white">
            Edit
          </button>
          <button onClick={handleOpenChangePass} className="text-md transition-all duration-300 text-center  font-semibold text-white border border-white px-4 py-2 cursor-pointer rounded-xl bg-gray-500 hover:bg-gray-800 hover:text-white">
            Change Password
          </button>
          <button
            onClick={logout}
            className="text-md transition-all duration-300 text-center  font-semibold text-white border border-white px-4 py-2 cursor-pointer rounded-xl bg-gray-500 hover:bg-gray-800 hover:text-red-500 "
          >
            Logout
          </button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <EditProfile
                data='user[" user Details"]'
                closeModal={handleClose}
              />
            </div>
          </Box>
        </Modal>

        <Modal
          open={openChangePass}
          onClose={handleCloseChangePass}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleForChangePassword}>
            <div>
              <ChangePassword closeModalChangePass={handleCloseChangePass} />
            </div>
          </Box>
        </Modal>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {!requests && <Spinner />}

        {requests && requests.length === 0 && (
          <div className="flex gap-10 justify-center items-center mx-auto w-[30%]">
            <h1 className="text-4xl font-bold text-[#202c34]">No Requests Made...</h1>
            <img src="images/no-req-made.png" alt="" />
            </div>
        )}

        {requests &&
          requests.map((request) => (
            <ProgressBar
              steps={steps}
              request={request}
              key={request.booking_id + "req"}
              setRequestUpdate={setRequestUpdate}
            />
          ))}
      </div>
    </>
  );
};

export default Profile;
