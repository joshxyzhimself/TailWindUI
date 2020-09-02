import React from 'react'

export default function Feature() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 bg-gray-100">
            <h1 className="font-bold text-5xl">A better way to send
                <br></br>
                money.</h1>
            <div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-8 md:mb-0">
                        <div
                            className="bg-indigo-600 rounded-md text-white w-12 p-2 mb-8 flex justify-center items-center">
                            <i className="fa fa-globe fa-2x hover:text-green-500" aria-hidden="true"></i>
                        </div>
                        <h1 className=" mb-4 text-3xl font-bold">Competitive Rates</h1>
                        <p className="font-lighter text-gray-600">Lorem ipsum, dolor sit amet consectetur
                            <br></br>
                            adipisicing elit.Another text</p>
                    </div>
                    <div>
                        <div
                            className="bg-indigo-600 rounded-md text-white w-12 p-2 mb-8 flex justify-center items-center">
                            <i class="fa fa-credit-card fa-2x hover:text-gray-800" aria-hidden="true"></i>
                        </div>
                        <h1 className=" mb-4 text-3xl font-bold">No Hidden Fees</h1>
                        <p className="font-lighter text-gray-600">Lorem ipsum, dolor sit amet consectetur
                            <br></br>
                            adipisicing elit.Another text</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <div
                            className="bg-indigo-600 rounded-md text-white w-12 p-2 mb-8 flex justify-center items-center">
                            <i className="fa fa-bolt fa-2x hover:text-yellow-500" aria-hidden="true"></i>
                        </div>
                        <h1 className=" mb-4 text-3xl font-bold">Instant transfers</h1>
                        <p className="font-lighter text-gray-600">Lorem ipsum, dolor sit amet consectetur
                            <br></br>
                            adipisicing elit.Another text</p>
                    </div>
                    <div>
                        <div
                            className="bg-indigo-600 rounded-md text-white w-12 p-2 mb-8 flex justify-center items-center">
                          <i className="fa fa-envelope fa-2x hover:text-red-500" aria-hidden="true"></i>

                        </div>
                        <h1 className=" mb-4 text-3xl font-bold">Reminder Mails</h1>
                        <p className="font-lighter text-gray-600">Lorem ipsum, dolor sit amet consectetur
                            <br></br>
                            adipisicing elit.Another text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
