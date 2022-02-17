import React from "react";
import Cards from "./Cards.js"
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Users.css";

function Users() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div >
        {/*<!-- Main Content -->*/}
          <NavBar />
          <div id="">
          <Cards />
          </div>
          <Footer />
      </div>
    </React.Fragment>
  );
}

export default Users;