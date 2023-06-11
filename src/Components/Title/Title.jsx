const Title = ({ heading, subheading }) => {
  return (
    <div className="text-center w-[424px] h-[140px] px-10 rounded-3xl mx-auto my-16 md:my-32 font-Cambria  bg-[url('https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80')] bg-cover">
      <h1 className="md:text-4xl text-[#ffffff] bg-black bg-opacity-20 py-5 md:my-10 drop-shadow-2xl shadow-2xl rounded-2xl">
        {heading}
      </h1>
      <h2 className="text-[#d96b04] md:text-xl ">{subheading}</h2>
    </div>
  );
};

export default Title;
