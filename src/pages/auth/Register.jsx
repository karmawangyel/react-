import React from "react";
import Forms from "./components/form/Forms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";

const Register = () => {
  const navigate = useNavigate();
  //yo https request garna kei certain time lagcha teivaera async await use garchau taki aru code run bhairahos yo nahuda pani.
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, data);
      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Forms type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
