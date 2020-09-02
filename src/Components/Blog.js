import React from 'react'
import Image from '../assets/image1.jpg'
import Image1 from '../assets/image2.jpg'
import Image2 from '../assets/image3.jpg'

export default function Blog() {
    return (
        <div className="flex justify-center md:py-16 text-center">
            <div>
                <h1 className="font-bold text-5xl">From the blog</h1>
                <h1 className="font-thin text-2xl text-gray-700">Blog posts are displayed here. Enjoy your stay here</h1>
                <div className="pt-8 flex justify-between flex-col md:flex-row md:px-8">
                    <div className="shadow-lg md:mr-4">
                        <div className="w-full">
                            <img src={Image} alt="Blog1" className="object-cover"></img>
                        </div>
                        <div className="py-4 px-8 text-left">
                            <h1 className="text-indigo-600">Blog</h1>
                            <h1 className="text-2xl pb-4">Boost your conversion rate</h1>
                            <h1 className="text-gray-700 text-lg font-thin">Behaviour we improving at
                                something to. Evil true high lady roof men had open. To projection considered it
                                precaution an melancholy or. Wound young you thing worse along being ham.
                                Dissimilar of favorable solicitude</h1>
                                <div className="flex justify-around items-center py-8">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <div>
                                    <h1 className="text-lg">Captain A</h1>
                                    <h1 className="font-thin text-gray-700">Mar 16,2020 - 6 min read</h1>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="shadow-lg md:mr-4">
                        <div className="w-full">
                            <img src={Image1} alt="Blog1" className="object-cover"></img>
                        </div>
                        <div className="py-4 px-8 text-left">
                            <h1 className="text-indigo-600">Blog</h1>
                            <h1 className="text-2xl pb-4">Boost your conversion rate</h1>
                            <h1 className="text-gray-700 text-lg font-thin">Behaviour we improving at
                                something to. Evil true high lady roof men had open. To projection considered it
                                precaution an melancholy or. Wound young you thing worse along being ham.
                                Dissimilar of favorable solicitude</h1>
                                <div className="flex justify-around items-center py-8">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <div>
                                    <h1 className="text-lg">Captain A</h1>
                                    <h1 className="font-thin text-gray-700">Mar 16,2020 - 6 min read</h1>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="shadow-lg">
                        <div className="w-full">
                            <img src={Image2} alt="Blog1" className="object-cover"></img>
                        </div>
                        <div className="py-4 px-8 text-left">
                            <h1 className="text-indigo-600">Blog</h1>
                            <h1 className="text-2xl pb-4">Boost your conversion rate</h1>
                            <h1 className="text-gray-700 text-lg font-thin">Behaviour we improving at
                                something to. Evil true high lady roof men had open. To projection considered it
                                precaution an melancholy or. Wound young you thing worse along being ham.
                                Dissimilar of favorable solicitude</h1>
                                <div className="flex justify-around items-center py-8">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <div>
                                    <h1 className="text-lg">Captain A</h1>
                                    <h1 className="font-thin text-gray-700">Mar 16,2020 - 6 min read</h1>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
