import React,{useState} from 'react'
import Nav from './Nav';
import HeroImage from '../assets/heroImage.jpg';
export default function Hero() {
    let [banner,setBanner] = useState(true);
   let bannerHandler = () =>{
        setBanner(!banner);
    }
    return (
        <div>
            <Nav/>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-full bg-gray-100 px-8 flex items-center  pt-12 pb-8">
                    <div >
                        <h1 className="text-5xl font-bold leading-tight">Data to enrich
                            <br></br>
                            your
                            <span className="text-blue-700">
                                &nbsp;online business</span>
                        </h1>
                        <p className="text-gray-700 pt-8 w-full">Duis ante Eleifend amet nonummy vestibulum sed curae;<br></br>
                            donec taciti morbi quis Viverra ligula odio egestas adipiscing.</p>
                        <div className="flex pt-16">
                            <button
                                className="my-1 mr-4 rounded-md text-sm bg-indigo-600 px-8 py-4 text-white font-medium md:mx-4 md:my-0">Sign up</button>
                            <button
                                className="my-1 text-sm bg-white px-8 py-4 text-blue-700 shadow font-medium md:mx-4 md:my-0">Sign up</button>

                        </div>
                    </div>
                </div>
                <div className="w-full flex">
                    <img src={HeroImage} className="object-cover" alt="Hero"/>
                </div>
            </div>
           {banner?<div className="hidden fixed bottom-0 w-full items-center py-2 px-8 z-50 bg-indigo-600 text-white md:flex justify-around">
                <p className="text-2xl">Big News! We're excited to announce a brand new product.</p>
                <div className="flex items-center">
                    <button className="mr-4 rounded-md text-sm bg-white w-full px-8 py-2 lg:py-4 text-indigo-600 font-medium md:mx-4 md:my-0">Sign Up</button>
                    <i className="fa fa-times ml-8 cursor-pointer" onClick={bannerHandler}></i>
                </div>
            </div>:<i className="hidden md:block fa fa-newspaper-o fa-3x cursor-pointer mr-4 text-indigo-600 z-50 fixed bottom-0 right-0" aria-hidden="true" onClick={bannerHandler}></i>}
            
        </div>
    )
}
