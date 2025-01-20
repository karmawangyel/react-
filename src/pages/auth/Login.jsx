import React from "react";
import Forms from "./components/form/Forms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  //yo https request garna kei certain time lagcha teivaera async await use garchau taki aru code run bhairahos yo nahuda pani.
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); //yo bhaneko localstorage bhanne containerma 'token' bhnne room ma chai value haldeu bhaneko
        navigate("/");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Forms type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
