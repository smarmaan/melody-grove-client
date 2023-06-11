import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Welcome = () => {
  const { user } = useContext(AuthContext);

  return <div>
    
    <Helmet>
        <title>Melody Grove | Dashboard</title>
      </Helmet>
    Welcome {user.displayName} </div>;
};

export default Welcome;
