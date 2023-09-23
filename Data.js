import { useState } from "react";
import Context from "./ContextAPI";
import axios from "axios";
const WaterState = ({ children }) => {
  const [name, setname] = useState("Jinendra");
  const [phone, setphone] = useState("8779153919");
  const [state, setstate] = useState("Uttar Pradesh");
  const [admin, setadmin] = useState(false);
  const [authtoken, setauthtoken] = useState(null);
  const stateAndUTData = [
    {
      id: "1",
      name: "Andaman and Nicobar Islands",
      latitude: 11.7401,
      longitude: 92.6586,
    },
    { id: "2", name: "Andhra Pradesh", latitude: 15.9129, longitude: 79.74 },
    {
      id: "3",
      name: "Arunachal Pradesh",
      latitude: 27.1004,
      longitude: 93.6167,
    },
    { id: "4", name: "Assam", latitude: 26.2006, longitude: 92.9376 },
    { id: "5", name: "Bihar", latitude: 25.0961, longitude: 85.3131 },
    { id: "6", name: "Chandigarh", latitude: 30.7333, longitude: 76.7794 },
    { id: "7", name: "Chhattisgarh", latitude: 21.2787, longitude: 81.8661 },
    {
      id: "8",
      name: "Dadra and Nagar Haveli and Daman and Diu",
      latitude: 20.1809,
      longitude: 73.0169,
    },
    { id: "9", name: "Delhi", latitude: 28.6139, longitude: 77.209 },
    { id: "10", name: "Goa", latitude: 15.2993, longitude: 74.124 },
    { id: "11", name: "Gujarat", latitude: 22.2587, longitude: 71.1924 },
    { id: "12", name: "Haryana", latitude: 29.0588, longitude: 76.0856 },
    {
      id: "13",
      name: "Himachal Pradesh",
      latitude: 31.1048,
      longitude: 77.1734,
    },
    {
      id: "14",
      name: "Jammu and Kashmir",
      latitude: 33.7782,
      longitude: 76.5762,
    },
    { id: "15", name: "Jharkhand", latitude: 23.6102, longitude: 85.2799 },
    { id: "16", name: "Karnataka", latitude: 15.3173, longitude: 75.7139 },
    { id: "17", name: "Kerala", latitude: 10.8505, longitude: 76.2711 },
    { id: "18", name: "Ladakh", latitude: 34.1526, longitude: 77.5771 },
    { id: "19", name: "Lakshadweep", latitude: 10.5667, longitude: 72.6417 },
    { id: "20", name: "Madhya Pradesh", latitude: 23.6345, longitude: 77.7921 },
    { id: "21", name: "Maharashtra", latitude: 19.7515, longitude: 75.7139 },
    { id: "22", name: "Manipur", latitude: 24.6637, longitude: 93.9063 },
    { id: "23", name: "Meghalaya", latitude: 25.467, longitude: 91.3662 },
    { id: "24", name: "Mizoram", latitude: 23.685, longitude: 92.3476 },
    { id: "25", name: "Nagaland", latitude: 26.1584, longitude: 94.5624 },
    { id: "26", name: "Odisha", latitude: 20.9517, longitude: 85.0985 },
    { id: "27", name: "Puducherry", latitude: 11.9416, longitude: 79.8083 },
    { id: "28", name: "Punjab", latitude: 31.1471, longitude: 75.3412 },
    { id: "29", name: "Rajasthan", latitude: 27.0238, longitude: 74.2179 },
    { id: "30", name: "Sikkim", latitude: 27.533, longitude: 88.5122 },
    { id: "31", name: "Tamil Nadu", latitude: 11.1271, longitude: 78.6569 },
    { id: "32", name: "Telangana", latitude: 18.1124, longitude: 79.0193 },
    { id: "33", name: "Tripura", latitude: 23.9408, longitude: 91.9882 },
    { id: "34", name: "Uttar Pradesh", latitude: 26.8467, longitude: 80.9462 },
    { id: "35", name: "Uttarakhand", latitude: 30.0668, longitude: 79.0193 },
  ];

  //AUTHORIZATION
  const sendOtp = async (phone) => {
    phone = "+91" + phone;
    console.log(phone);
    const options = {
      method: "POST",
      url: "https://wipple-sms-verify-otp.p.rapidapi.com/send",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "78366f625fmshf30de0582f26d88p1c772cjsne4295fecd382",
        "X-RapidAPI-Host": "wipple-sms-verify-otp.p.rapidapi.com",
      },
      // Pass the data directly as the request body
      data: {
        app_name: "JalSamadhan",
        code_length: 6,
        code_type: "number",
        expiration_second: 86000,
        phone_number: phone,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  const verifyOtp = async (phone, otp) => {
    phone = "+91" + phone;
    console.log(otp);
    const options = {
      method: "GET",
      url: "https://wipple-sms-verify-otp.p.rapidapi.com/verify",
      params: {
        phone_number: phone,
        verification_code: otp,
        app_name: "JalSamadhan",
      },
      headers: {
        "X-RapidAPI-Key": "78366f625fmshf30de0582f26d88p1c772cjsne4295fecd382",
        "X-RapidAPI-Host": "wipple-sms-verify-otp.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data.is_valid;
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  const BASE_URL = "https://bytebrigade-2023-default-rtdb.firebaseio.com"; // Replace with your server URL

  // User Sign-up function
  const signUp = async (name, phone, state) => {
    try {
      setname(name);
      setphone(phone);
      setstate(state);
      const response = await axios.post(`${BASE_URL}/user.json`, {
        name,
        phone,
        state,
        admin,
      });
      return response.data;
    } catch (error) {
      console.error("Error during sign-up:", error);
      return { success: false, error: "Error occurred during sign-up" };
    }
  };

  // User Login function
  const login = async (phone) => {
    try {
      setphone(phone);
      const response = await axios.get(`${BASE_URL}/user.json`);
      for (i in response.data) {
        console.log(response.data[i].phone);
        if (response.data[i].phone === phone) {
          setname(response.data[i].name);
          setstate(response.data[i].state);
          return response.data[i];
        }
      }
      return {};
    } catch (error) {
      console.error("Error during login:", error);
      return { success: false, error: "Error occurred during login" };
    }
  };

  //AUTHORIZATION

  //Announcement
  const AddAnn = async (title, desc) => {
    try {
      const response = await axios.post(`${BASE_URL}/announcement.json`, {
        title,
        desc,
      });
      return response.data;
    } catch (error) {
      console.error("Error during add-up:", error);
      return { success: false, error: "Error occurred during sign-up" };
    }
  };
  const getAnn = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/announcement.json`);
      let arr = [];
      for (i in response.data) {
        arr.push(response.data[i]);
      }
      return arr;
    } catch (error) {
      console.error("Error during add-up:", error);
      return { success: false, error: "Error occurred during sign-up" };
    }
  };
  //aNNOUNCEMENT

  //SOS
  const SOS = async (image, category, details, longitude, latitude) => {
    try {
      const response = await axios.post(`${BASE_URL}/SOS.json`, {
        name,
        phone,
        state,
        image,
        category,
        details,
        longitude,
        latitude,
      });
      return response.data;
    } catch (error) {
      console.error("Error during add-up:", error);
      return { success: false, error: "Error occurred during sign-up" };
    }
  };
  //SOS

  //COMPLAINT
  const COMPLAINT = async (image, details, add) => {
    try {
      let resolved = false;
      const response = await axios.post(`${BASE_URL}/Complaints.json`, {
        name,
        phone,
        state,
        image,
        details,
        add,
        resolved,
      });
      return response.data;
    } catch (error) {
      console.error("Error during add-up:", error);
      return { success: false, error: "Error occurred during sign-up" };
    }
  };
  const getComplaints = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Complaints.json`);
      let arr = [];
      for (i in response.data) {
        arr.push(response.data[i]);
      }
      console.log(arr);
      return arr;
    } catch (error) {
      console.error("Error during add-up:", error);
      return { success: false, error: "Error occurred during sign-up" };
    }
  };

  //HEATMAP DATA FETCH
  const getPoints = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/SOS.json`);
      let arr = [];
      for (i in response.data) {
        const obj={
          latitude:response.data[i].latitude,
          longitude:response.data[i].longitude
        }
        arr.push(obj);
      }
      return arr;
    } catch (error) {
      console.error("Error during add-up:", error);
      return { success: false, error: "Error occurred during sign-up" };
    }
  };
  //HEATMAP DATA FETCH
  return (
    <Context.Provider
      value={{
        stateAndUTData,
        sendOtp,
        verifyOtp,
        setauthtoken,
        authtoken,
        name,
        phone,
        state,
        signUp,
        login,
        AddAnn,
        getAnn,
        SOS,
        COMPLAINT,
        getComplaints,
        getPoints
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default WaterState;
