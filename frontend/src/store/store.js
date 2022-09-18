import { createSlice, configureStore } from "@reduxjs/toolkit";

const vintricaSlice = createSlice({
  name: "vintrica",

  initialState: {
    // inputs from page 1
    country: {}, // obj country
    vehicleCategory: "", // string category
    duration: 0, // int days
    // inputs from page 2
    countryOfRegistration: {}, // obj country of reg.
    validityPeriod: "", // date start [end date = start date + duration]
  },

  reducers: {
    addCountry(state, action) {
      console.log("payload received");
      state.country = action.payload;
      console.log(action.payload);
    },

    addVehicleCategory(state, action) {
      console.log("payload received");
      state.vehicleCategory = action.payload;
      console.log(action.payload);
    },

    addDuration(state, action) {
      console.log("payload received");
      state.duration = action.payload;
      console.log(action.payload);
    },

    addCountryOfRegistration(state, action) {
      console.log("payload received");
      state.countryOfRegistration = action.payload;
      console.log(action.payload);
    },

    addValidityPeriod(state, action) {
      console.log("payload received");
      state.validityPeriod = action.payload;
      console.log(action.payload);
    },
  },
});

export const actions = vintricaSlice.actions;

const store = configureStore({
  reducer: vintricaSlice.reducer,
});

export default store;
