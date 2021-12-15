import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowProduct from './ContentRowProduct';
import './Home.css';
import TableHome from './TableHome';

function ContentHome() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
			</div>
      <ContentRowProduct/>
      <ContentRowCenter/>
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
				<h2 className="h3 mb-0 text-gray-800">Tabla Talles</h2>
			</div>
      <TableHome/>
    </div>
  );
}

export default ContentHome;