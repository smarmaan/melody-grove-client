import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const {
    data: reviewData = [],

    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");

      return res.data;
    },
  });

  return [reviewData, refetch];
};

export default useReviews;

