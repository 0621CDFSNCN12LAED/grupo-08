import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
// import image from '../../assets/images/logo192.png'

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >

        {/*<!-- Sidebar - Brand -->*/}
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={Logo} alt="Digital House" />
          </div>
        </Link>

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link to="/ContentWrapper" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link to="/OfertProduct" className="nav-link collapsed">
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos en Oferta</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link to="/OfertProduct" className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Últimas ofertas</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link to="/ContentRowMovies" className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Comunidad</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/AllProducts" className="nav-link">
            <i className="fas fa-tshirt"></i>
            <span>Ver todos los productos + Buscar Producto</span>
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
