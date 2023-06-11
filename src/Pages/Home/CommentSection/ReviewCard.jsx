const ReviewCard = ({ data }) => {
  const { name, image, review } = data;

  return (
    <div className=" card w-96 h-full mx-7 bg-[url('https://img.freepik.com/free-vector/white-minimal-hexagons-background_79603-1452.jpg')] opacity-75 hover:opacity-100 shadow-xl">
      <div className="avatar">
        <div className="w-24 rounded-xl mx-auto mt-10">
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

      <div className="card-body md:h-48 font-Cambria">
        <h2 className="card-title mx-auto">{name}</h2>
        <p className="text-justify">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
