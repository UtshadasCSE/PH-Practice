const Hero = () => {
  return (
    <div>
      <div className="max-sm:w-11/12 flex flex-col justify-center items-center gap-4 text-white bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url(../../../public/images/heroimage.jpeg)] h-[70vh] bg-cover bg-center container mx-auto my-9 rounded-md">
        <h2 className="w-3/4 text-center text-3xl font-bold max-sm:text-xl max-sm:w-4/5">
          Welcome to Phone
          <span className="text-red-500 text-4xl">y</span>, your one-stop
          destination for the latest smartphones and accessories!
        </h2>
        <p className="w-4/6 text-center text-slate-200 max-sm:w-11/12  max-sm:text-base">
          Check out our featured deals and promotions to get the best value on
          your next purchase. Shop with confidence knowing that we offer fast
          shipping, secure payment options, and dedicated customer support.
        </p>
        <button className="btn text-[#070F2B]font-semibold bg-[#9290C3] border-none hover:shadow-lg hover:shadow-[#535C91] hover:text-[#535C91] duration-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
