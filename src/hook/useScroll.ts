import { useEffect, useState } from "react";

export default function useScroll() {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isActive;
}
