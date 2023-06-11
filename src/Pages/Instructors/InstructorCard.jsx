const InstructorCard = ({ info }) => {
  const { name, age, email, students, rating, image, classes, details } = info;

  return (
    <div className="card w-full shadow-xl mt-28">
      <figure className="">
        <img src={image} className="w-full h-96" alt={name} />
      </figure>
      <div className="card-body  bg-gradient-to-r from-[#ffce01] to-[#f8db63] bg-cover rounded-es-xl rounded-ee-xl">
        <h2 className="card-title md:text-3xl">{name}</h2>
        <h2 className="card-title">Age: {age}</h2>
        <h2 className="card-title md:text-lg">Email: {email}</h2>
        <p>Number of Students : {students}</p>
        <p>Rating : {rating}</p>
        <p>{details}</p>
        <div className="">
          {classes.map((classes, index) => (
            <div className="flex-col gap-10" key={index}>
              <li>Class Name : {classes.name}</li>
              <p> ------ Number of Classes : {classes.numClasses}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
