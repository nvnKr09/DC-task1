import React from "react";
import "../Styles/dashboard.css";
import Post from "../Components/Post";

// icons
import homeIcon from "../Assets/home.svg";
import notificationIcon from "../Assets/notification.svg";
import ShopIcon from "../Assets/heart-grey.svg";
import ConversationIcon from "../Assets/message.svg";
import WalletIcon from "../Assets/wallet.svg";
import SubscriptionIcon from "../Assets/favorite.svg";
import MyProfileIcon from "../Assets/profile.svg";
import SettingsIcon from "../Assets/setting.svg";
import LogoutIcon from "../Assets/logout.svg";
import SearchIcon from "../Assets/search.svg";
import FilterIcon from "../Assets/filter.svg";

import { paintingData, postsData } from "../Data/data";
import { artistsData } from "../Data/data";
import ArtistCard from "../Components/ArtistCard";
import PaintingPricingCard from "../Components/PaintingPricingCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* left-column */}
      <div className="logo-navbar">
        <div className="logo">LOGO</div>
        <div className="navbar">
          <div className="navlink active">
            <img className="icon" src={homeIcon} />
            <span>Home</span>
          </div>
          <div className="navlink">
            <img className="icon" src={notificationIcon} />
            <span>Notifications</span>
          </div>
          <div className="navlink">
            <img className="icon" src={ShopIcon} />
            <span>Shop</span>
          </div>
          <div className="navlink">
            <img className="icon" src={ConversationIcon} />
            <span>Conversation</span>
          </div>
          <div className="navlink">
            <img className="icon" src={WalletIcon} />
            <span>Wallet</span>
          </div>
          <div className="navlink">
            <img className="icon" src={SubscriptionIcon} />
            <span>Subscription</span>
          </div>
          <div className="navlink">
            <img className="icon" src={MyProfileIcon} />
            <span>My Profile</span>
          </div>
          <div className="navlink">
            <img className="icon" src={SettingsIcon} />
            <span>Settings</span>
          </div>
          <div className="navlink logout">
            <img className="icon" src={LogoutIcon} />
            <span>Logout</span>
          </div>
        </div>
      <div className="footer">
        <span>2024©</span>
        <span>Developed by Naveen kr</span>
      </div>
      </div>
      {/* middle column */}
      <div className="search-posts">
        <div className="search-container">
          <div className="search">
            <img src={SearchIcon} />
            <input type="text" placeholder="Search here..." />
          </div>
          <div className="filter-btn">
            <img src={FilterIcon} />
            <span>Filters</span>
          </div>
        </div>
        <div className="posts">
            {postsData.map((postInfo, i) => <Post key={i} postInfo={postInfo}/>)}
        </div>
        <div className="painting-card-slider">
          {paintingData.map((paintingInfo)=> <PaintingPricingCard paintingInfo={paintingInfo} /> )}
        </div>
      </div>
      {/* right column */}
      <div className="suggestions-column">
        <div className="seller-btn">Become a Seller</div>
        <div className="artists-photographers-container">
            <div className="artists-photographers">
                <div className="artists active">Artists</div>
                <div className="photographers">Photographers</div>
            </div>
            <div className="artists-slide">
              {artistsData.map((artistInfo, i) => <ArtistCard key={i} artistInfo={artistInfo} />)}
            </div>
            <div className="footer">
              <span>Privacy</span>
              <span>Terms of Service</span>
              <span>Cookie Notice</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
