import React from 'react';

const ProfileCard = ({ image, name, position }) => {
  return (
    <div className="profile">
      <img src={image} alt="" />
      <div className="profile-info">
        <h4>{name}</h4>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default ProfileCard;