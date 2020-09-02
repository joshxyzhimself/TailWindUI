import React, {useState} from 'react'
export default function Cta() {
    let [isVisible,
        setVisible] = useState(false);
    let popUp = () => {
        setVisible(!isVisible);
    }
    return (
        <div
            className="text-center p-8 md:p-16 w-full flex justify-center items-center">
            <div>
                <h1 className="text-4xl font-bold">Ready to dive in?</h1>
                <h1 className="text-4xl font-bold">Start your free trial today.</h1>
                <div className="flex justify-center p-8">
                    <button
                        className="flex items-center justify-center bg-indigo-600 text-white px-5 py-4 mr-4 rounded-md">Get Started</button>
                    <button
                        className="flex items-center justify-center bg-gray-100 text-indigo-600 px-5 py-4 rounded-md"
                        onClick={popUp}>Learn More</button>
                </div>
            </div>
            {isVisible
                ? <div className="fixed z-50 inset-0 overflow-y-auto">
                        <div
                            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <i className="fa fa-check text-green-500" aria-hidden="true"></i>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                We offer different services like 2,3,4
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm leading-5 text-gray-500">
                                                    Cool Themes and Cool Wallpapers are a big plus exactly
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-red-600 text-base font-medium text-white shadow-sm hover:bg-red-500 sm:text-sm"
                                            onClick={popUp}>
                                            Close
                                        </button>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                : ""}

        </div>
    )
}
