import { useEffect, useState } from "react";

const useIsUserOnline = () => {
  const [isUserOnline, setIsUSerOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsUSerOnline(true);
    };
    const handleOffline = () => {
      setIsUSerOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isUserOnline;
};
export default useIsUserOnline;
