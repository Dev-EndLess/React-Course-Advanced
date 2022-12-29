import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Profile() {
  // const {url} = useRouteMatch()

    // {
    //     path: "/user", 
    //     url: "/user", 
    //     isExact: true, 
    //     params: {}
    // }

  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to="/profile/info">Profile Info</Link>
        </li>
        <li>
          <Link to="/profile/settings">Profile Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
