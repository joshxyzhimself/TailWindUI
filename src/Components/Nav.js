import React,{useState} from 'react'
import Logo from '../assets/logo.svg';
export default function Nav() {
    let [drop,setDrop] = useState(true);
    let dropHandler = ()=>{
        setDrop(!drop);
    }

    return (

        <div className=" w-full flex justify-between md:p-4 shadow-lg items-center flex flex-col md:flex-row">
           {drop?<i className="fa fa-times text-blue-700 absolute right-0 mr-2 md:hidden cursor-pointer" aria-hidden="true" onClick={dropHandler}></i>:<i className="fa fa-bars text-blue-700 absolute right-0 mr-2 md:hidden cursor-pointer" aria-hidden="true" onClick={dropHandler}></i>} 

            <div className="w-12 h-12">
                <img src={Logo} alt="alt"></img>
            </div>
            {drop? 
            <>
            <div className="flex justify-between flex-col md:flex-row">
                <button className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Solutions</button>
                <button className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Pricing</button>
                <button className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Docs</button>
                <button className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">More</button>
            </div>
            <div className=" flex justify-between flex-col md:flex-row">
            <button className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Sign in</button>
            <button className="my-1 text-sm bg-indigo-600 px-4 py-2 text-white rounded-lg font-medium md:mx-4 md:my-0">Sign up</button>
            </div> 
            </>:""
}
                    </div>
    )
}
