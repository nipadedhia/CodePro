import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/index";
import Hero from "../../components/Hero";
import CourseCard from "../../components/CourseCard";

import Api from "../../Utils/API";

function Home() {
  const [products, setProducts] = useState([]);

  // when the page loads a call is made to the db to display all the courses
  useEffect(() => {
    Api.getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <CourseCard products={products} />
    </>
  );
}

export default Home;
