import { useCallback } from "react";

const useUpdateDB = () => {
  const updateDB_Cart = useCallback(async (data, userEmail) => {
    try {
      const body = { userEmail, cart: data };
      await fetch(process.env.REACT_APP_CART, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error("Error updating cart in DB:", error);
    }
  }, []);

  const updateDB_Short = useCallback(async (data, userEmail) => {
    try {
      const body = { userEmail, short: data };
      await fetch(process.env.REACT_APP_SHORT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error("Error updating shortlist in DB:", error);
    }
  }, []);

  return { updateDB_Cart, updateDB_Short };
};

export default useUpdateDB;
