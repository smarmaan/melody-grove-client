const PopularClassCard = ({ info }) => {
  const { name, description, image, students, rating, activities } = info;

  return (
    <>
      <div className=" card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure className="w-full h-full">
          <img src={image} className="object-cover w-full h-full" alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{students}</h2>
          <h2 className="card-title">{rating}</h2>
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
