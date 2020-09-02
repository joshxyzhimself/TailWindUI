import React from 'react'

export default function Logocloud() {
    return (
        <div
            className="w-full bg-indigo-600 flex justify-around text-white py-8 md:px-12">
            <i
                className="fa fa-facebook-official fa-2x cursor-pointer hover:text-black"
                aria-hidden="true"></i>
            <i
                className="fa fa-apple fa-2x  cursor-pointer hover:text-black"
                aria-hidden="true"></i>
            <i
                className="fa fa-windows fa-2x  cursor-pointer hover:text-black"
                aria-hidden="true"></i>
            <i
                className="fa fa-google fa-2x  cursor-pointer hover:text-black"
                aria-hidden="true"></i>
            <i
                className="fa fa-font-awesome fa-2x  cursor-pointer hover:text-black"
                aria-hidden="true"></i>
        </div>
    )
}
