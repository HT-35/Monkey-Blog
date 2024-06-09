import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  //const value = { userInfo, setUserInfo };
  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo }}
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
