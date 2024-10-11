import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";
import { FETCH_STATUS } from "@/constants/statuses";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [status, setStatus] = useState(FETCH_STATUS.PENDING);

  useEffect(() => {
    setStatus(FETCH_STATUS.PENDING);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatus(FETCH_STATUS.RESOLVED);
      } else {
        setStatus(FETCH_STATUS.REJECTED);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    isLoading: status === FETCH_STATUS.PENDING,
    isSuccess: status === FETCH_STATUS.RESOLVED,
    isError: status === FETCH_STATUS.REJECTED,
  };
};

export default useAuth;
