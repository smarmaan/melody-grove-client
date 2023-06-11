import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useBookedCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: bookedCart = [] } = useQuery({
    queryKey: ["booked-courses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/booked-courses?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return [bookedCart, refetch];
};

export default useBookedCart;
