import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";


function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[900px] mt-[-60px] h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#4f6dc0] font-bold p-2">hello world</p>
        <h1 className=" text-4xl  md:text-7xl sm:text-6xl font-bold md:py-6 ">
          Grow with me
        </h1>
        <div className="flex justify-center items-center w-full">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for you
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 "
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></ReactTyped>
        </div>
        <div>
          <button className="bg-[#4f6dc0] w-[200px] rounded-xl font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300">
            <Link to={'/login'}>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
