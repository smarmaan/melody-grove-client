import Marquee from "react-fast-marquee";

import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../../Components/Title/Title";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
AOS.init();

const CommentSection = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  return (
    <div className="my-20 container mx-auto">
      <Title
        heading={"Review Section "}
        subheading={"Precious reviews of our Students"}
      ></Title>

      <div>
        <div>
          <Marquee
            className="font-bold py-6 rounded-2xl bg-[url('https://t3.ftcdn.net/jpg/05/51/97/18/360_F_551971815_nXv1fCga04nd9fkjYr0rV0lbu5mG4lHk.jpg')]  shadow-2xl"
            pauseOnHover={true}
            speed={160}
          >
            {reviewData.map((data) => (
              <ReviewCard key={data._id} data={data}></ReviewCard>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
