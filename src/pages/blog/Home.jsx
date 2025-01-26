import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card";
import { baseUrl } from "../../config";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`);
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Layout>
        <div className="home my-5 flex gap-10 flex-wrap justify-center align-middle gap-3">
          {blogs.length > 0 &&
            blogs.map((blog) => {
              console.log(blog);
              return <Card blog={blog} />;
            })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
