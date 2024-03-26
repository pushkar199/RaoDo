import React from 'react'
import './style.css'
import bolt from "../../Media/bolt.svg";
import boltmobile from "../../Media/bolt-mobile.svg";
function Banner() {
  return (
    <div class="banner">
    <div class="bannerContainer">
      <h6 class="bannerTitle">Unlock premium stats</h6>
      <p class="bannerPara">
        Get up to 10TB of storage for a limited time
      </p>
    </div>
    <button class="upgrade">
      <img
        src={bolt}
        class="desktop"
      />
      <img
        src={boltmobile}
        class="mobile"
      />
      <span>Upgrade</span>
    </button>
  </div>
  )
}

export default Banner