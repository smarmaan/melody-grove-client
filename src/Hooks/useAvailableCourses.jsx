import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAvailableCourses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const {
    data: availableCourses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["available-Courses"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/available-Courses");

      return res.data;
    },
  });

  return [availableCourses, isLoading, refetch];
};

export default useAvailableCourses;
