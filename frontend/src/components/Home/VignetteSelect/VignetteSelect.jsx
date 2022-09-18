import React from "react";
import LockIcon from "./Icons/LockIcon";
import "./VignetteSelect.css";
import CountrySelect from "./Country/Country";
import Drop from "./DropDown/DropDown";
import { Link } from "react-router-dom";
import { actions } from "../../../store/store.js";
import { useDispatch } from "react-redux";

function VignetteSelect() {
  const dispatch = useDispatch();

  // Set Value in Redux Store
  const handleDurationChange = (dur) => {
    dispatch(actions.addDuration(dur));
  };
  // Set Value in Redux Store
  const handleVehicleChange = (veh) => {
    dispatch(actions.addVehicleCategory(veh));
  };
  // Set Value in Redux Store
  const handleCountryChange = (coun) => {
    dispatch(actions.addCountry(coun));
  };

  return (
    <div className="VignetteSelectContainer">
      <div className="Title">E-Vignettes at vintrica</div>
      <div className="Tagline">
        Buy a motorway e-vignette quickly and easily at vintrica.
      </div>
      <form className="SelectVignette">
        <div>
          <CountrySelect handleCountryChange={handleCountryChange} />
        </div>
        <Drop
          handleChange={handleVehicleChange}
          title={`Vehicle category`}
          options={[
            "Cars",
            "Motorcycles",
            "Cars / Goods transport",
            "Buses",
            "Trailers for Category B2 and D2",
          ]}
        />
        <div>
          <Drop
            handleChange={handleDurationChange}
            title={`Duration`}
            options={["10 Days", "30 Days", "365 Days"]}
          />
        </div>
        <Link
          to="step2"
          className=" font-sans bg-[#296BA4] border-8  border-orange-400 pt-1 pr-12 pb-1 pl-12 flex align-center text-white font-bold text-lg "
        >
          Continue
        </Link>
      </form>
      <div className="SecurityLine">
        <LockIcon />
        <span className="HighLight">Secure:</span> Your data is transmitted
        SSL-encrypted.
      </div>
    </div>
  );
}

export default VignetteSelect;
