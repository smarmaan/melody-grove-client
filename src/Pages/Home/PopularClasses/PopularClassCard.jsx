const PopularClassCard = ({ info }) => {
  const { name, description, image, students, rating, activities } = info;

  return (
    <>
      <div className=" card card-compact w-full  shadow-2xl drop-shadow-2xl">
        <figure className="w-full h-full">
          <img src={image} className="object-cover w-full h-96" alt={name} />
        </figure>
        <div className="card-body bg-[#fc712b] bg-cover rounded-ee-2xl rounded-es-2xl ">
          <h2 className="card-title md:text-4xl">{name}</h2>
          <h2 className="card-title">Number of Students: {students}</h2>
          <h2 className="card-title">Ratings : {rating}</h2>
          <p>{description}</p>
          <p>
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
