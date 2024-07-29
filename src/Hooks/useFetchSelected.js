import { useCallback } from "react";

const useFetchSelected = () => {
  const fetchSelected = useCallback(async (apiUrl, userEmail) => {
    const queryParams = new URLSearchParams({ userEmail });
    const response = await fetch(`${apiUrl}?${queryParams.toString()}`);
    return response;
  }, []);

  return { fetchSelected };
};

export default useFetchSelected;
