import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-removebg-preview.png";
// import image from '../../assets/images/logo192.png'

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav navBarBg sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-iconm whiteShadow noBg">
            <img className="w-100 sidebar-brand-iconm whiteShadow noBg" src={Logo} alt="all4Sports" />
          </div>
        </Link>

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active ">
          <Link to="/" className="nav-link">
            <i class="fas fa-home"></i>
            <span>All4Sports ~ Home</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link to="/OfertProduct" className="nav-link collapsed">
            <i className="fas fa-tag"></i>
            <span>Productos en Oferta</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/fdksjnksdjnfsk" className="nav-link collapsed">
            <i className="fas fa-fw fa-folder"></i>
            <span>Error404</span>
          </Link>
        </li>
        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link to="/Users" className="nav-link">
            <i class="fas fa-users"></i>
            <span>Comunidad</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/AllProducts" className="nav-link">
            <i className="fas fa-tshirt"></i>
            <span>Ver todos los productos</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SearchProducts" className="nav-link">
            <i className="fas fa-search"></i>
            <span>Buscar Producto</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}

export default SideBar;
