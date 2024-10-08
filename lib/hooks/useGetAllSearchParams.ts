import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const buildQueryString = (obj: any) => {
  const queryString = Object.keys(obj)
    .filter(
      (key) => obj[key] !== "" && obj[key] !== undefined && obj[key] !== null
    )
    .map(
      (key: string) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
    )
    .join("&");

  return queryString;
};

function useGetAllSearchParams() {
  const searchParams = useSearchParams();
  const params = useMemo(() => {
    const res: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      res[key] = value;
    });

    return res;
  }, [searchParams]);

  return { params, queryString: buildQueryString(params) };
}

export default useGetAllSearchParams;
