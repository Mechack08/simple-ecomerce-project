import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/categories/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
