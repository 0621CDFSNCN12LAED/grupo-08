import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ContentOfertProduct from './ContentOfertProduct';
import './ofertProduct.css';

function OfertProduct() {
  return (
    <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <NavBar/>
                    <ContentOfertProduct/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
  );
}

export default OfertProduct;