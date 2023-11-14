const Banner = () => {
  return (
    <div className="my-12">
      <div className="h-[80vh] bg-teal-700 p-5 text-white">
        <p className="lg:text-xl ml-14 ">Helping You To Find Any JOBS</p>
        <h2 className=" lg:text-5xl text-center mt-12">Find Your Dream Jobs Today</h2>
        <div className="h-24 w-3/4 flex justify-evenly items-center text-xl font-semibold   text-black mx-auto mt-28 bg-gray-200 rounded-md ">
            <p >Search</p>
            <p  >Category</p>
            <p>Location</p>

        </div>
      </div>
    </div>
  );
};

export default Banner;
