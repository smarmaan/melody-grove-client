const InstructorCard = ({ info }) => {
  const { name, age, email, students, rating, image, classes, details } = info;

  return (
    <div className="card w-96 shadow-xl mt-28">
      <figure className="w-full h-full">
        <img src={image} className="w-96 h-96" alt={name} />
      </figure>
      <div className="card-body  bg-[url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover rounded-es-xl rounded-ee-xl">
        <h2 className="card-title md:text-3xl">{name}</h2>
        <h2 className="card-title">Age: {age}</h2>
        <h2 className="card-title md:text-lg">Email:{email}</h2>
        <p>Number of Students : {students}</p>
        <p>Rating : {rating}</p>
        <p>{details}</p>
        <p>
          {classes.map((classes, index) => (
            <div className="flex-col gap-10" key={index}>
              <li>Class Name : {classes.name}</li>
              <p>Number of Classes : {classes.numClasses}</p>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
