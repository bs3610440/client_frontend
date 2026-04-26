import { useState } from "react";

import Profile from './User/Profile.jsx';
import ChangeEmail from './User/ChangeEmail.jsx';
import ChangePassword from './User/ChangePassword.jsx';
import ChangeImg from './User/ChangeImage.jsx';
import Delete from './User/Delete.jsx'
import Setting from './User/Setting.jsx'

export default function HomeBashBoard() {

  const [activeComponent, setActiveComponent] = useState("profile");

  const menuItems = [
    { id: "profile", label: "Profile", component: <Profile /> },
    { id: "changeEmail", label: "Change Email", component: <ChangeEmail /> },
    { id: "changePassword", label: "Change Password", component: <ChangePassword /> },
    { id: "changeImg", label: "Change Image", component: <ChangeImg /> },
    { id: "delete", label: "Delete Account", component: <Delete /> },
    { id: "setting", label: "Setting", component: <Setting /> },
  ];

  const activeItem = menuItems.find((item) => item.id === activeComponent);

  return (
    <div className="text-white h-screen pt-0 mt-0">

      <div className="flex  min-h-screen">

        {/* Left Side */}
        <div className="w-[20%] bg-black p-4 space-y-3">

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`block w-full text-left p-2 rounded ${
                activeComponent === item.id ? "bg-white text-orange-400" : ""
              }`}
            >
              {item.label}
            </button>
          ))}

        </div>

        {/* Right Side */}
        <div className="w-[80%] bg-orange-50">
          {activeItem?.component}
        </div>

      </div>

    </div>
  );
}
