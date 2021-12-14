import React from 'react';
import './Home.css';

function BranchList() {

  let marcas = ["Nike", "Adidas", "Puma", "Under Armour", "Reebok", "Vans", "Jordan", "Quiksilver", "Topper", "Crocs"]
  
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas con las que trabajamos
          </h5>
        </div>
        <div className="car-bdody">
            <div className="row">
              {marcas.map((marca, i) =>
                <div className="col-lg-6 mb-4" key={i}>
                  <div className="card bg-dark text-white shadow" key={i}>
                    <div className="card-body" key={i}>{marca}</div>
                  </div>
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default BranchList;