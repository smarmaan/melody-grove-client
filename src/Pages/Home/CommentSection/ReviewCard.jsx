const ReviewCard = ({ data }) => {
  const { name, image, review } = data;

  return (
    <div className=" card w-96  mx-7 bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img
            data-aos="zoom-in"
            data-aos-offset="00"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            src={image}
          />
        </div>
      </div>

      <div className="card-body md:h-56 font-Cambria">
        <h2 className="card-title mx-auto">{name}</h2>
        <p className="text-justify">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
