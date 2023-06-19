import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import useReviews from "../../../Hooks/useReviews";

const Feedback = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();

  const [, refetch] = useReviews();

  const openModal = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      await axiosSecure
        .post("/reviews", {
          name: user.displayName,
          image: user.photoURL,
          review: text,
        })
        .then((res) => {
          console.log(res.data.insertedId);
          if (res.data.insertedId) {
            refetch();
            Swal.fire("Success", "Feedback submitted successfully!", "success");
            console.log(res);
          }
        });
    }
  };

  return (
    <div className="flex justify-center my-16">
      <button className="btn btn-primary" onClick={openModal}>
        FeedBack
      </button>
    </div>
  );
};

export default Feedback;
