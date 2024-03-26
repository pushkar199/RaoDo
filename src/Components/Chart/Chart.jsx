import React from 'react';
import './style.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import green from "../../Media/curve-green.svg";
import blue from "../../Media/curve-blue.svg";
const Chart = () => {
  return (
    <div className="chartContainer">
      <div className="chartHeader">
        <p className="chartTitle">Performance</p>
        <BsThreeDotsVertical className='threedots'/>
      </div>
      <div className="chart">
        <div className="chartContentContainer">
          <div className="y-axis">
            <div>400</div>
            <div>300</div>
            <div>200</div>
            <div>100</div>
            <div>0</div>
          </div>
          <div className="Line">
            <img
              src={green}
              className="green"
              alt="Green Curve"
            />
            <img
              src={blue}
              className="blue"
              alt="Blue Curve"
            />
          </div>
          <div className="x-axis">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
        </div>
      </div>
      <div className="legend">
        <div className="instagram">
          <span className="label instagramColor"></span>Instagram
        </div>
        <div className="facebook">
          <span className="label facebookColor"></span>Facebook
        </div>
      </div>
    </div>
  );
};

export default Chart;
