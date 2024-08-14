import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-white">
      <div className="mt-[50px] pl-6">
        <h3 className="text-white-800 text-6xl">Contact</h3>
      </div>
      <div className="my-[10px] px-6 text-xl">
        <p className="text-gray-600 font-serif">Some context intro stuff</p>
      </div>
      <div className="mt-7 mx-6 text-black md:grid grid-cols-2">
        <div>
          <p className="p text-[#4f6dc0] text-2xl">Name</p>
          <input
            size={40}
            type="text"
            placeholder="Name"
            className="h-[50px] w-50  pl-4 "
          />
        </div>
        <div>
          <p className="py-3  text-[#4f6dc0] text-2xl">Topic</p>
          <input
            size={40}
            type="text"
            placeholder="Topic"
            className="h-[50px] pl-4 w-50  "
          />
        </div>
        <div>
          <p className="py-3  text-[#4f6dc0] text-2xl">Email</p>
          <input
            size={40}
            type="text"
            placeholder="Email"
            className="h-[50px] pl-4 w-50  "
          />
        </div>
        <div>
          <p className="py-3  text-[#4f6dc0] text-2xl">Message</p>
          <input
            size={40}
            type="text"
            placeholder="Message"
            className="h-[50px] pl-4 w-50  "
          />
        </div>
        <div className="py-4">
          <button className="bg-[#4f6dc0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"><Link to={'/thanks'}>Submit</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
