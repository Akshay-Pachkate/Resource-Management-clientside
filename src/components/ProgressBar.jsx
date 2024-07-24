/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ReqFieldItem from "./ReqFieldItem";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { getCookie } from "../utilities/getCSRF";
import { X } from "@mui/icons-material";
import XIcon from "./XIcon";


const ProgressBar = ({ steps, request, setRequestUpdate}) => {

  const cancelRequest = async () => {
    console.log("Request Cancelled" + request['booking_id']);
    const res = await axios.get(`/deny/${request['booking_id']}`, { headers: { "X-CSRFToken": getCookie("csrftoken") } });

    if(res.status === 200){
      enqueueSnackbar("Request Cancelled", { variant: "success" });
      setRequestUpdate((prev) => !prev);
    }else{
      enqueueSnackbar(res.data.message, { variant: "error" });
    }
  }

  return (
    <div className="flex flex-col gap-6  items-start justify-center relative  mx-auto bg-gray-100 rounded-2xl max-sm:w-full sm:max-md:w-[99%] md:w-[80%] py-8 px-4 " >
        <div onClick={cancelRequest} className="bg-red-600 hover:cursor-pointer rounded-full absolute sm:hidden max-sm:-top-3 max-sm:-right-3" >
          <XIcon className={'max-sm:w-8 max-sm:h-8'} />
        </div>
        <div className="mx-auto w-fit justify-between flex gap-4">
          <div className="flex gap-4 ">
              <ReqFieldItem label={"Resource"} value={request["Resource"]} />
              <ReqFieldItem label={"Date"} value={request["Date"]}/>
              <ReqFieldItem label={"Timing"} value={request["Timing"]}/>
          </div>
          <button 
          className={"text-md max-sm:hidden flex h-full justify-center items-center my-auto transition-all duration-300 text-center hover:scale-105 font-semibold text-white   border border-white px-4 py-2 cursor-pointer rounded-xl " + ((request.index === (request.length-1)) ? " bg-green-600 " : " bg-red-500 ")}
            onClick={ ((request.index !== (request.length-1)) && cancelRequest )}
          >
            <span>{(request.index !== (request.length-1)) && <XIcon className="w-5 h-5" />}</span>
            <span>{((request.index !== (request.length-1)) ? " Cancel " : " Completed ")}</span>

          </button>
        </div>
        <div className="w-full border-t pt-8 mt-4" >
        <Box sx={{ width: "100%"}} >
          <Stepper activeStep={request.index + 1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel  >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        </div>
      </div>
  );
};

export default ProgressBar;