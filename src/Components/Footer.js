import React from 'react'
import Logo from '../assets/logo.svg'
export default function Footer() {
    return (
        <div className="border-b-4 border-t-2">
            <div
                className="flex justify-around flex-col md:flex-row pb-8 px-4 pt-8">
                <div className="grid grid-cols-1">
                    <img src={Logo} alt="Logo" className="w-12 h-12"></img>
                    <p className="text-gray-600 py-4">Making the world a better place through elegant hierarchies</p>
                    <div className="flex justify-between py-4 text-gray-600">
                        <i
                            className="fa fa-facebook-official cursor-pointer hover:text-black fa-2x"
                            aria-hidden="true"></i>
                        <i
                            className="fa fa-apple cursor-pointer hover:text-black fa-2x"
                            aria-hidden="true"></i>
                        <i
                            className="fa fa-windows cursor-pointer hover:text-black fa-2x"
                            aria-hidden="true"></i>
                        <i
                            className="fa fa-google cursor-pointer hover:text-black fa-2x"
                            aria-hidden="true"></i>
                        <i
                            className="fa fa-font-awesome cursor-pointer hover:text-black fa-2x"
                            aria-hidden="true"></i>
                    </div>
                </div>
                <div
                    className="flex w-full md:w-3/4 justify-around flex-col md:flex-row text-gray-800 font-thin text-lg md:px-12">
                    <div className="text-center md:text-left">
                        <h1 className="text-gray-600 pb-2">SOLUTIONS</h1>
                        <h1 className="pb-2">Marketing</h1>
                        <h1 className="pb-2">Analysis</h1>
                        <h1 className="pb-2">Commerce</h1>
                        <h1 className="pb-2">Insights</h1>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-gray-600 pb-2">SUPPORT</h1>
                        <h1 className="pb-2">Pricing</h1>
                        <h1 className="pb-2">Documentation</h1>
                        <h1 className="pb-2">Guides</h1>
                        <h1 className="pb-2">API Status</h1>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-gray-600 pb-2">COMPANY</h1>
                        <h1 className="pb-2">About</h1>
                        <h1 className="pb-2">Blog</h1>
                        <h1 className="pb-2">Jobs</h1>
                        <h1 className="pb-2">Press</h1>
                        <h1 className="pb-2">Partners</h1>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-gray-600 pb-2">LEGAL</h1>
                        <h1 className="pb-2">Claim</h1>
                        <h1 className="pb-2">Privacy</h1>
                        <h1 className="pb-2">Terms</h1>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-gray-500 text-xl">&#169; 2020 Workflow, Inc. All rights reserved.</p>
            </div>
        </div>

    )
}
