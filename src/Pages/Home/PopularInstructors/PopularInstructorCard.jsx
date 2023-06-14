import { Fade } from "react-awesome-reveal";

const PopularInstructorCard = ({ info }) => {
  const { name, email, image, classes } = info;

  return (
    <div className="card w-96 shadow-xl overflow-hidden relative">
      <>
        <img src={image} className="object-cover w-full h-96" alt={name} />
      </>
      <div className="card-body  bg-opacity-30 opacity-0 hover:opacity-100 flex-col justify-center items-center bg-[#ffe36b] bg-cover rounded-2xl absolute inset-0">
        <Fade delay={1e3} cascade damping={1e-1}>
          <h2 className="card-title md:text-3xl">{name}</h2>
        </Fade>

        <Fade delay={1e3} cascade damping={1e-1}>
          <h2 className="card-title text-[17px] md:text-lg">Email: {email}</h2>
        </Fade>

        <Fade delay={1e3} cascade damping={1e-1}>
          <h2 className="card-title md:text-lg">
            Instructor for{" "}
            {classes.map((classes, index) => (
              <div className="flex-col gap-10" key={index}>
                <h2 className="card-title md:text-lg">{classes.name} </h2>
              </div>
            ))}
          </h2>
        </Fade>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
