import React from 'react';
import BranchList from './BranchList';
import './Home.css';
import LastProductInDb from './LastProductInDb';

function ContentRowCenter() {
  return (
    <div className="row">
      <LastProductInDb/>
      <BranchList/>
    </div>
  );
}

export default ContentRowCenter;