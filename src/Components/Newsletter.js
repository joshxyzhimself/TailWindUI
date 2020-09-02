import React from 'react'

export default function Newsletter() {
    return (
        <div
            className="w-full bg-indigo-600 p-4 md:px-8 md:py-12 text-white flex flex-col md:flex-row justify-between">
            <div className="pb-4">
                <h1 className="text-3xl">Want products news and updates?</h1>
                <h1 className="text-gray-300 text-2xl">Sign up for our newsletter to stay up to date.</h1>
            </div>
            <div>
                <div className="flex flex-col md:flex-row">
                    <input
                        placeholder="Enter your email"
                        className="bg-white text-black font-bold py-4 mb-8 md:mb-0 px-4 rounded-sm shadow-xl"></input>
                    <button className="w-full md:ml-4 bg-indigo-400 p-4 rounded-sm shadow-xl">Notify Me!</button>
                </div>
                <h1 className="text-gray-400 pt-8">We care about the protection of your data.
                    <span className="font-bold text-white underline cursor-pointer">Read our Privacy Policy</span>
                </h1>
            </div>
        </div>
    )
}
