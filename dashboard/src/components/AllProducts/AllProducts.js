import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ContentProducts from "./ContentProducts.js";
import "./AllProducts.css";

function AllProducts() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <NavBar />
          <ContentProducts />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllProducts;
