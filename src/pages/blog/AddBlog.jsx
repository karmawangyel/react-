import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";
import { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        headers: {
          "content-type": "multipart/form-data", //data ma file cha bhane chai esari headers ma content type change garnu parcha..By default application/json huncha.
          //file chaina bhane headers nahalda huncha.
          Authorization: localStorage.getItem("token"), //headers authorization ma backend le token magekole tyo nameko container ma localstorage bata nikaleko token name ma baseko.
        },
      });

      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Layout>
        <Form heading="Add blog" onSubmit={handleCreateBlog} />
      </Layout>
    </>
  );
};

export default AddBlog;
