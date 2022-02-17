import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ContentHome from './ContentHome';
import './Home.css';

function Home() {
  return (
    <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <NavBar/>
                    <ContentHome />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
  );
}

export default Home;