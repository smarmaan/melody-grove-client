const ClassCard = ({ info }) => {
  const { _id, name, description, image, students, rating, activities } = info;

  return (
    <div className=" card card-compact w-96  shadow-2xl drop-shadow-2xl">
      <figure className="w-full h-full">
        <img src={image} className="object-cover w-full h-96" alt={name} />
      </figure>
      <div className="card-body bg-[#fc712b] bg-cover rounded-ee-2xl rounded-es-2xl ">
        <h2 className="card-title md:text-4xl">{name}</h2>
        <h2 className="card-title">Number of Students: {students}</h2>
        <h2 className="card-title">Ratings : {rating}</h2>
        <p>{description}</p>
        <p>{_id}</p>
        <p>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </p>
        <button className="btn">Enroll now</button>
      </div>
    </div>
  );
};

export default ClassCard;
