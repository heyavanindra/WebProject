import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const ThankYou = () => {
  return (
    <Fragment>
    <div className="h-screen w-full flex items-center text-[#4f6dc0]">
        <div>
        <h1 className="text-4xl">Thank you for you response</h1>
        <button className="bg-[#4f6dc0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
        <Link to={'/'}>Back To Home</Link></button>
        </div>
        
        
        
        

    
    </div>
    
    </Fragment>
  )
}

export default ThankYou