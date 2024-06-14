import { useState } from "react";

const useActive = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => setActive((prev) => !prev);
  return { active, handleActive };
};

export default useActive;
