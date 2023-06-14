import { Fade } from "react-awesome-reveal";

const PopularClassCard = ({ info }) => {
  const { name, description, image, students, rating, activities } = info;

  return (
    <>
      <div className=" card card-compact w-96 shadow-2xl drop-shadow-2xl">
        <figure className="w-full h-full">
          <img src={image} className="object-cover w-full h-80" alt={name} />
        </figure>
        <div className="card-body bg-[#fc712b] rounded-ee-2xl rounded-es-2xl ">
          <Fade delay={1e3} cascade damping={1e-1}>
            <h2 className="card-title md:text-4xl">{name}</h2>{" "}
          </Fade>
          <Fade delay={1e3} cascade damping={1e-1} className="card-title">
            <h2>Number of Students: {students}</h2>
          </Fade>
          <Fade delay={1e3} cascade damping={1e-1} className="card-title">
            <h2>Ratings : {rating}</h2>
          </Fade>

          <Fade delay={1e3} cascade damping={1e-1}>
            <p>{description}</p>
          </Fade>
          <Fade delay={1e3} cascade damping={1e-1}>
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
