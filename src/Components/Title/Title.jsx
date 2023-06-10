const Title = ({ heading, subheading }) => {
  return (
    <div className="text-center w-[424px] h-[140px]  px-10 rounded-3xl mx-auto my-16 md:my-32 font-Cambria  bg-[url('https://i.ibb.co/fScYznz/Screenshot-2023-06-10-114350.jpg')] bg-cover">
      <h1 className="md:text-4xl text-[#e94040] bg-black bg-opacity-20 py-5 md:my-10 drop-shadow-2xl shadow-2xl rounded-2xl">
        {heading}
      </h1>
      <h2 className="text-[#d96b04] md:text-xl ">{subheading}</h2>
    </div>
  );
};

export default Title;
