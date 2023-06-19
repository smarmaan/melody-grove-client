import Marquee from "react-fast-marquee";

import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../../Components/Title/Title";
import ReviewCard from "./ReviewCard";
import useReviews from "../../../Hooks/useReviews";
AOS.init();

const CommentSection = () => {
  const [reviewData] = useReviews();

  return (
    <div className="my-20 container mx-auto">
      <Title
        heading={"Review Section of users"}
        subheading={"Precious reviews of our Students"}
      ></Title>

      <div>
        <div>
          <Marquee
            className="font-bold py-6 rounded-2xl bg-[url('https://t3.ftcdn.net/jpg/05/51/97/18/360_F_551971815_nXv1fCga04nd9fkjYr0rV0lbu5mG4lHk.jpg')] shadow-2xl"
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
