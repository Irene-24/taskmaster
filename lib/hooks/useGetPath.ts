"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useGetPath = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useMemo(() => {
    const keys = Array.from(searchParams.keys());

    return keys.reduce((sum, key) => {
      sum = `${sum}${key}=${encodeURIComponent(
        searchParams.get(key) as string
      )}`;
      return sum;
    }, "");
  }, [searchParams]);

  let url = `${pathname}`;

  if (params?.length) {
    url = `${url}?${params}`;
  }

  return { url, pathname, searchParams, params };
};

export default useGetPath;
