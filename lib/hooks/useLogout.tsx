import { useAppDispatch } from "@/redux/redux-hooks";
import { useLogoutMutation } from "@/services/authApi";
import { baseApi } from "@/services/base";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useLogout = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const [logoutUser] = useLogoutMutation();

  const handleLogout = useCallback(() => {
    router.push("/auth/login");
    logoutUser();

    dispatch(baseApi.util.resetApiState());
  }, [dispatch, logoutUser, router]);

  return { handleLogout };
};

export default useLogout;
