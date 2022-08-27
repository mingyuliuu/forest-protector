import React from 'react';

const WildfireDetail = ({ detailInfo }) => {
  return (
    <div className="detail-info">
        <h2>Wildfire Location Info</h2>
        <ul>
            <li>ID: <strong>{ detailInfo ? detailInfo.id : "N/A" }</strong></li>
            <li>TITLE: <strong>{ detailInfo ? detailInfo.title : "N/A" }</strong></li>
        </ul>
    </div>
  )
}

export default WildfireDetail