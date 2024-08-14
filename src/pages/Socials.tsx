import { github } from "../assets/image"
const Socials = () => {
  return (
    <div className="text-white h-full">
      <div className="flex justify-center items-center">
        <a href="https://github.com/heyavanindra">
        <img  src={github }alt="github" className="cursor-pointer w-10"   />
        </a>
        </div>
    </div>
  )
}

export default Socials