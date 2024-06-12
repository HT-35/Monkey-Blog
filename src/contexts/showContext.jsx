import { createContext, useContext, useState } from "react";

const showContext = createContext();

function ShowProvider(props) {
  const [show, setShow] = useState(false);
  const activeShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <showContext.Provider
      value={{ show, activeShow }}
      {...props}
    ></showContext.Provider>
  );
}

function useShowContext() {
  const context = useContext(showContext);

  if (context === "undefine") {
    throw new Error("Component must be within a Provider");
  }
  return context;
}

export { useShowContext, ShowProvider };
