import React, { useState } from 'react';
import './App.css';

const profileData = {
  name: 'John Doe',
  username: 'johndoe',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  followers: 500,
  following: 200,
  posts: 150,
};

const App = () => {
  const [profile, setProfile] = useState(profileData);

  return (
    <div className="App">
      <div className="profile-container">
        <img src="profile.jpeg" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p>@{profile.username}</p>
          <p>{profile.bio}</p>
          <div className="profile-stats">
            <div>
              <strong>{profile.followers}</strong> Followers
            </div>
            <div>
              <strong>{profile.following}</strong> Following
            </div>
            <div>
              <strong>{profile.posts}</strong> Posts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
