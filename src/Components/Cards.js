import React from 'react'
import Card from './Card';
export default function Cards() {
    return (
        <div className="flex justify-center flex-col md:flex-row bg-black p-8">

            <div className="text-center">
                <h1 className="text-gray-300 font-thin text-2xl">Pricing</h1>
                <h1 className="font-bold text-5xl">Right price for you, whoever you are</h1>
                <h1 className="font-thin text-gray-300 text-3xl pb-8">Affordable prices for great content and lifetime support
                    <br></br>
                    Access to 250+ components</h1>
                <div className="flex justify-between flex-col md:flex-row">
                    <Card popular={false}/>
                    <Card popular={true}/>
                    <Card popular={false}/>
                </div>

            </div>
        </div>
    )
}
