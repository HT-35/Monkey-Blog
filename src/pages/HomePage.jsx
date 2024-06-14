import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={handleSignOut} className="px-4 py-2 bg-slate-300">
      Đăng Xuất
    </button>
  );
};

export default HomePage;
