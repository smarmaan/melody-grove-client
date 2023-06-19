import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import moment from "moment";

const PaymentHistory = () => {
  const [userPaymentData, setUserPaymentData] = useState([]);

  const { user } = useContext(AuthContext);

  console.log();
  useEffect(() => {
    fetch(`http://localhost:5000/user-stats/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserPaymentData(data);
      });
  }, [user.email]);

  console.log(userPaymentData);

  return (
    <div>
      {" "}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center uppercase">
              <th></th>
              <th>transaction Id</th>
              <th>email</th>
              <th>transaction Time</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {userPaymentData.map((data) => (
              <tr key={data._id}>
                <th></th>
                <td>{data.transactionId}</td>
                <td>{data.email}</td>
                <td>{moment(data.date).format("LLL")}</td>
                <td>${data.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
