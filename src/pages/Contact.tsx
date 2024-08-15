import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-white lg:flex ">
      <div className="w-[800px] flex flex-col ">
        <div className="mt-[50px] pl-6">
          <h3 className="text-white-800 text-6xl">Contact</h3>
        </div>
        <div className="my-[10px] px-6 text-xl">
          <p className="text-gray-600 font-serif">Some context intro stuff</p>
        </div>
      </div>
     <div className="w-full">
     <div className="mt-7 mx-6 text-black md:grid grid-cols-2">
        <div className="mr-6">
          <p className="py-3 text-[#4f6dc0] text-2xl ">Name</p>
          <input
            type="text"
            placeholder="Name"
            className="h-[40px] pl-4 w-full md:h-[50px]  md:ml-auto md:mr-5 "
          />
        </div>
        <div className="md:px-4 mr-6">
          <p className="py-3  text-[#4f6dc0] text-2xl">Topic</p>
          <input
            type="text"
            placeholder="Topic"
            className="h-[40px] pl-4 w-full md:h-[50px] md:mr-auto  rounded-"
          />
        </div>
      </div>
      <div className="ml-7 mr-8">
        <p className="py-3  text-[#4f6dc0] text-2xl">Email</p>
        <input
          type="text"
          placeholder="Email"
          className="h-[50px] pl-4 w-full  text-black"
        />
      </div>
      <div className="ml-7 mr-8">
        <p className="py-3  text-[#4f6dc0] text-2xl">Message</p>
        <input
          type="text"
          placeholder="Message"
          className="h-[50px] pl-4 w-full  text-black "
        />
      </div>
      <div className="py-4 mx-8">
        <button className="bg-[#4f6dc0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          <Link to={"/thanks"}>Submit</Link>
        </button>
      </div>
     </div>
    </div>
  );
};

export default Contact;
