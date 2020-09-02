import React, {useState} from 'react'

export default function FAQ() {
    let [drop,
        setDrop] = useState(false);
    let [drop1,setDrop1] = useState(false);
    let [drop2,setDrop2] = useState(false);
    let dropHandler = () => {
        setDrop(!drop);
    }
    let dropHandler1 = () => {
        setDrop1(!drop1);
    }
    let dropHandler2 = () => {
        setDrop2(!drop2);
    }
    return (
        <div className=" w-full bg-gray-100 md:p-16">
            <div>
                <h1 className="text-4xl font-bold pb-12 text-center ">Frequently Asked Questions</h1>
                <div
                    className="border-t-4 mx-auto py-4 w-1/2 px-4 my-16 flex justify-between">
                    <h1 className="text-xl font-bold">What's the best thing about Switzerland?</h1>
                    {drop
                        ? <i className="fa fa-arrow-up" aria-hidden="true" onClick={dropHandler}></i>
                        : <i className="fa fa-arrow-down" aria-hidden="true"  onClick={dropHandler}></i>}
                      {drop?<p className="absolute mt-32 md:mt-12 font-gray-600 font-thin text-md">I don't know but the flag is a big plus</p>:""}  
                </div>
                <div
                    className="border-t-4 mx-auto py-4 w-1/2 px-4 pt-8 my-16 flex justify-between">
                    <h1 className="text-xl font-bold">How do you make holy water?</h1>
                    {drop1
                        ? <i className="fa fa-arrow-up" aria-hidden="true" onClick={dropHandler1}></i>
                        : <i className="fa fa-arrow-down" aria-hidden="true"  onClick={dropHandler1}></i>}
                      {drop1?<p className="absolute mt-32 md:mt-12 font-gray-600 font-thin text-md">You boil the hell out of it</p>:""}  
                </div>
                <div
                    className="border-t-4 mx-auto py-4 w-1/2 px-4 pb-16 my-16 flex justify-between">
                    <h1 className="text-xl font-bold">What do you call someone with no body and nose?</h1>
                    {drop2
                        ? <i className="fa fa-arrow-up" aria-hidden="true" onClick={dropHandler2}></i>
                        : <i className="fa fa-arrow-down" aria-hidden="true"  onClick={dropHandler2}></i>}
                      {drop2?<p className="absolute mt-32 md:mt-12 font-gray-600 font-thin text-md">Nobody Knows</p>:""}  
                </div>
            </div>
        </div>
    )
}
