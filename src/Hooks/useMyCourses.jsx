import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyCourses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const {
    data: myCourses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["available-Courses-instructors"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/available-Courses-instructors");

      return res.data;
    },
  });

  return [myCourses, isLoading, refetch];
};

export default useMyCourses;
