import React from "react";
import Selector from "./Country";
import Date from "./Date";
import LockIcon from "./Icons/LockIcon";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { actions } from "../../../store/store.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import axios from "axios";

export default function Body() {
  const dispatch = useDispatch();

  // Set Value in Redux Store
  const handleCountryOfRegistration = (coun) => {
    dispatch(actions.addCountryOfRegistration(coun));
  };

  // Set Value in Redux Store
  const handleValidityPeriod = (date) => {
    dispatch(actions.addValidityPeriod(String(date)));
  };

  // Set Value in Redux Store
  const submittedData = useSelector((state) => {
    return {
      country: state.country.label,
      vehicleCategory: state.vehicleCategory,
      duration: state.duration,
      countryOfRegistration: state.countryOfRegistration.label,
      validityPeriod: state.validityPeriod,
    };
  });

  // send POST data to the server
  const sendToBackend = async () => {
    console.log("Send to backend");
    await axios.post("http://localhost:8000/", submittedData);
  };

  return (
    <div>
      <div className="greenBox1 flex items-center h-24 w-3/5 bg-[#DFF0D8] ml-72 mt-6 rounded-lg border border-green-800">
        <img
          src={require("../../../assets/checked-car.png")}
          className="car"
          alt="car"
        />
        <p className="text-xl font-bold leading-6 text-green-800 ml-7">
          {submittedData.vehicleCategory !== ""
            ? submittedData.vehicleCategory
            : `Please fill Out Details Step by Step`}
          <br></br>
          <span className="text-base font-light">Up to 3.5 t laden weight</span>
        </p>
      </div>
      <p className="text-base font-bold ml-72">
        Valid in:
        <span className="font-light">
          {" "}
          {submittedData.vehicleCategory !== ""
            ? submittedData.country
            : `Country Not Selected`}
        </span>
      </p>

      <div className="greyBox1 flex items-start flex-col h-44 w-3/5 bg-[#F9F9F9] ml-72 mt-6 rounded-lg">
        <p className="text-2xl ml-4 mt-5 mb-6">Vehicle details</p>
        <div className="flex flex-row">
          <p className="text-lg font-light ml-4 w-60">
            Country of registration
          </p>
          <div>
            <Selector handleCountryOfRegChange={handleCountryOfRegistration} />
            <p className="ml-8 text-gray-500">
              In which country is your vehicle registered?
            </p>
          </div>
        </div>
      </div>
      <div className="greenBox1 flex items-center h-24 w-3/5 bg-[#DFF0D8] ml-72 mt-6 rounded-lg border border-green-800">
        <img
          src={require("../../../assets/calendar.png")}
          className="calender"
          alt="calendar"
        />
        <p className="text-xl font-bold leading-6 text-green-800 ml-7">
          {submittedData.vehicleCategory !== ""
            ? submittedData.duration
            : `Duration Not Selected!`}
          <span className="text-base font-light">
            <br />
            {submittedData.vehicleCategory !== ""
              ? `This e-vignette is valid for ${submittedData.duration} from the validity start date.`
              : `Please Select Duration.`}
          </span>
        </p>
        <p className="text-2xl font-bold leading-6 text-green-700 ml-80 mr-5">
          $16.40
        </p>
      </div>
      <div className="text-right w-3/4">
        <p className="text-xs text-gray-400 mt-2">
          Prices displayed incl. statutory toll charge, incl. service charge and
          statutory VAT.
        </p>
      </div>
      <div className="greyBox1 flex items-start flex-col h-36 w-3/5 bg-[#F9F9F9] ml-72 mt-6 rounded-lg">
        <p className="text-2xl ml-4 mt-5 mb-6">Validity Period</p>
        <div className="flex flex-row">
          <p className="text-lg font-light ml-4 w-60">Start Date</p>
          <Date handleValidityChange={handleValidityPeriod} />
        </div>
      </div>
      <div className="bg-[#F4FAFF] w-3/5 ml-72 flex mt-7 items-center h-12">
        <p className="text-baseline text-blue-400 text-start font-light ml-4">
          Start date:
          <span className="font-bold">Please first select the start date.</span>
        </p>
      </div>
      <button className="bg-[#3486CC] text-white font-bold text-xl w-3/5 ml-72 mt-7 h-12 rounded-lg">
        <Link onClick={sendToBackend} to="/submitted">
          Add to cart
        </Link>
      </button>
      <div className="SecurityLine">
        <LockIcon />
        <span className="font-normal">Secure:</span> &nbsp; Your data is
        transmitted SSL-encrypted.
      </div>
      <Footer />
    </div>
  );
}
