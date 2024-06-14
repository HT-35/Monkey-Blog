import { auth } from "firebase-app/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //console.log(user);
      setUserInfo(user);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ userInfo }}
      {...props}
    ></AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === "undefine") {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
