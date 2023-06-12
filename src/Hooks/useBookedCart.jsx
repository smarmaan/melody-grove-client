import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useBookedCart = () => {
  const { user, loading } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: bookedCart = [] } = useQuery({
    queryKey: ["booked-courses", user?.email],
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure(`/booked-courses?email=${user?.email}`);

      console.log("response from axios", res);

      return res.data;
    },
  });

  return [bookedCart, refetch];
};

export default useBookedCart;
