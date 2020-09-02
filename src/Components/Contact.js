import React, {useState} from 'react'

export default function Contact() {
    let [radio,
        setRadio] = useState(false);
    let check = () => {
        setRadio(!radio);
    }
    return (
        <div className="flex justify-center text-center py-8 mt-2">
            <div>
                <h1 className="font-bold text-4xl">Contact Sales</h1>
                <h1 className=" font-gray-600 text-lg font-thin">
                    Advantage old had otherwise sincerity dependent additions.Advantage old had
                    otherwise sincerity dependent additions.
                </h1>
                <div className="mt-12 border-2 m-2 shadow-lg py-16 px-4">
                    <div className="flex justify-around flex-col md:flex-row md:px-2">
                        <div className="flex flex-col text-left">
                            <label htmlFor="First name" className="font-thin text-lg">First name</label>
                            <input
                                className="px-8 w-full py-4 shadow-md border-2 rounded-md"
                                placeholder="John Doe"></input>
                        </div>
                        <div className="flex flex-col text-left">
                            <label htmlFor="Last name" className="font-thin text-lg">Last name</label>
                            <input
                                className="px-8 w-full py-4 shadow-md border-2 rounded-md"
                                placeholder="John Doe"></input>
                        </div>
                    </div>
                    <div className="flex flex-col text-left pt-8">
                        <label htmlFor="Company" className="font-thin md:pl-20 md:ml-8 text-lg">Company</label>
                        <input
                            className="w-full  md:w-3/4 px-8 mx-auto py-4 shadow-md border-2 rounded-md"
                            placeholder="Company details"></input>
                    </div>
                    <div className="flex flex-col text-left pt-8">
                        <label htmlFor="Email" className="font-thin md:pl-20 md:ml-8 text-lg">Email</label>
                        <input
                            className="w-full md:w-3/4 px-8 mx-auto py-4 shadow-md border-2 rounded-md"
                            placeholder="johndoe@mail.com"></input>
                    </div>
                    <div className="flex flex-col text-left pt-8">
                        <label htmlFor="Phone Number" className="font-thin md:pl-20 md:ml-8 text-lg">Phone Number</label>
                        <input
                            className="w-full md:w-3/4 px-8 mx-auto py-4 shadow-md border-2 rounded-md"
                            type="number"
                            placeholder="+92121212121"></input>
                    </div>
                    <div className="flex flex-col text-left pt-8">
                        <label htmlFor="Message" className="font-thin md:pl-20 md:ml-8 text-lg">Message</label>
                        <textarea
                            className="w-full md:h-64 md:w-3/4 px-8 mx-auto py-4 shadow-md border-2 rounded-md"
                            placeholder="Enter your message"></textarea>
                    </div>
                    <div className="pt-4">
                        {radio
                            ? <div
                                    onClick={check}
                                    className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input
                                        type="checkbox"
                                        name="toggle"
                                        className="absolute block w-6 h-6 rounded-full bg-white border-4 ml-4 appearance-none cursor-pointer"/>
                                    <label
                                        htmlFor="toggle"
                                        className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer"></label>
                                </div>
                            : <div
                                onClick={check}
                                className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input
                                    type="checkbox"
                                    name="toggle"
                                    className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                <label
                                    htmlFor="toggle"
                                    className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>}
                        <label htmlFor="toggle" className="text-xs text-gray-700">By selecting this, you agree to&nbsp;
                            <span className="text-black underline font-bold">Privacy Policy</span>
                            &nbsp;and&nbsp;
                            <span className="text-black underline font-bold">Cookie Policy</span>
                        </label>
                    </div>
                    <div className="flex flex-col text-left pt-8">
                        <button
                            className="w-full md:w-3/4 px-8 mx-auto py-4 bg-indigo-600 text-white shadow-md border-2 rounded-md">Let's Talk</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
