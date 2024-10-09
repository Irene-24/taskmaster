"use client";

import { auth } from "@/firebase/config";
import useGetPath from "@/hooks/useGetPath";
import { useLazyGetUserByIdQuery } from "@/services/users";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useLayoutEffect, useState } from "react";
import DashboardSpinner from "@/components/ui/db-spinner";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const { url } = useGetPath();

  const [triggerGetAppUserProfile] = useLazyGetUserByIdQuery();

  const router = useRouter();

  useLayoutEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        triggerGetAppUserProfile(user.uid);
        setLoading(false);
      } else {
        // GET current route and pass to callvakUrl for login
        // router.push(`/auth/login?callbackUrl=${url}`);
      }
    });

    return () => unsubscribe();
  }, [triggerGetAppUserProfile, router, url]);

  if (loading) {
    return (
      <>
        <DashboardSpinner />
      </>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
