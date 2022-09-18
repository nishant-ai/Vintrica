import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../NumAndValidity/MyComponents/Header";
import Footer from "../NumAndValidity/MyComponents/footer";

function SubmittedData() {
  const submittedData = useSelector((state) => {
    return {
      country: state.country.label,
      vehicleCategory: state.vehicleCategory,
      duration: state.duration,
      countryOfRegistration: state.countryOfRegistration.label,
      validityPeriod: state.validityPeriod,
    };
  });

  useEffect(() => {
    console.log(submittedData);
  });

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <p className="text-center bg-blue-300 h-32 text-4xl flex items-center justify-center w-screen mb-14">
          Your Response have been successfully recorded!
        </p>
      </div>
      <div className="flex flex-col items-center mb-52">
        <div className="flex flex-col items-center rounded-xl bg-green-200 border-2 border-green-700 h-100 w-90 px-20 pb-5">
          <ul className="flex flex-col">
            <li className="text-2xl font-bold text-green-700 mt-6">
              Country: {submittedData.country}
            </li>
            <li className="text-2xl font-bold text-green-700 mt-6">
              Vehicle Category: {submittedData.vehicleCategory}
            </li>
            <li className="text-2xl font-bold text-green-700 mt-6">
              Duration: {submittedData.duration}
            </li>
            <li className="text-2xl font-bold text-green-700 mt-6">
              Country of Registration: {submittedData.countryOfRegistration}
            </li>
            <li className="text-2xl font-bold text-green-700 mt-6 w-4/5">
              Validity Period: {submittedData.validityPeriod}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SubmittedData;
