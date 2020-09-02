import React from 'react'

export default function Card(props) {
    return (
        <div className="w-full shadow-md border-2 border-blue-500 mx-0 md:mx-4 bg-white my-4 h-full">
                
            <div>
                <div className=" text-2xl text-center py-8">
                    <h1 className="text-5xl">Growth</h1>
                    <h1 className="text-6xl font-bold">
                        <span className="text-lg">$</span>149<span className="text-lg">/month</span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 bg-gray-100 p-4 px-16 text-xl pb-32">
                    <div className="flex flex-start items-center py-4">
                        <i className="fa fa-check text-green-500 " aria-hidden="true"></i>
                        <h1 className=" text-gray-700 px-8 font-thin ">Life time support 24x7</h1>
                    </div>
                    <div className="flex flex-start items-center py-4">
                        <i className="fa fa-check text-green-500" aria-hidden="true"></i>
                        <h1 className=" text-gray-700 px-8 font-thin">Life time support 24x7</h1>
                    </div>
                    <div className="flex flex-start items-center py-4">
                        <i className="fa fa-check text-green-500" aria-hidden="true"></i>
                        <h1 className=" text-gray-700 px-8 font-thin">Life time support 24x7</h1>
                    </div>
                    <div className="flex flex-start items-center py-4">
                        <i className="fa fa-check text-green-500" aria-hidden="true"></i>
                        <h1 className=" text-gray-700 px-8 font-thin">Life time support 24x7</h1>
                    </div>
                    <div className="flex flex-start items-center py-4">
                        <i className="fa fa-check text-green-500" aria-hidden="true"></i>
                        <h1 className=" text-gray-700 px-8 font-thin">Life time support 24x7</h1>
                    </div>
                   {props.popular?<button className="p-4  w-40 md:w-full bg-indigo-600 rounded-md text-white"> Start your trial</button>:
                   <button className="p-4 w-40 md:w-full bg-white rounded-md text-indigo-600 shadow-md hover:text-white hover:bg-indigo-600"> Start your trial</button>
                   } 
                </div>
            </div>
        </div>
    )
}
