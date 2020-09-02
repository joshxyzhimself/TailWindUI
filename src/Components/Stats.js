import React from 'react'

export default function Stats() {
    return (
        <div className="flex justify-center text-center pt-16 bg-gray-100">
            <div>
                <h1 className="text-2xl md:text-4xl">Trusted by developers all over the world</h1>
                <h1 className="text-lg text-gray-600 ">We assure you quality, performance and optimal size. Hold on to your seats.</h1>
                <div className="flex justify-center flex-col xl:flex-row pt-8">
                    <div className="flex justify-center items-center shadow-lg xl:mr-4 py-4 px-4 md:px-32">
                            <div>
                                <h1 className="text-5xl font-bold text-indigo-600">100%</h1>
                                <h1 className="text-md font-thin">Pepperoni</h1>
                            </div>
                    </div>
                    <div className="flex justify-center items-center shadow-lg xl:mr-4 py-4 px-4 md:px-32">
                            <div>
                                <h1 className="text-5xl font-bold text-indigo-600">24/7</h1>
                                <h1 className="text-md font-thin">Delivery</h1>
                            </div>
                    </div>
                    <div className="flex justify-center items-center shadow-lg py-4 px-4 md:px-32">
                            <div>
                                <h1 className="text-5xl font-bold text-indigo-600">100k</h1>
                                <h1 className="text-md font-thin">Calories</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
