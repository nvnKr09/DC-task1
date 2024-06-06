import React from "react";
import './styles.css';

const ArtistCard = ({artistInfo}) => {
    const {artistName, username, artistImg, coverImg} = artistInfo;
  return (
    <>
      <div style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0)40%, rgba(0, 0, 0, 0.8)), url(${(coverImg)})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="artist-card"
      >
        <div className="artist-info">
            <div className="artist-img">
                <img src={artistImg} />
                <div className="online-sign"></div> 
            </div>
            <div>
                <div className="name">{artistName}</div>
                <div className="username">{username}</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
