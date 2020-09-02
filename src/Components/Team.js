import React from 'react';
import Team1 from '../assets/Team1.jpg'
import Team2 from '../assets/Team2.jpg'
import Team3 from '../assets/content1.jpg'
export default function Team() {
    return (
        <div className="flex justify-center py-16 text-center">
            <div>
                <h1 className="text-4xl">Our Team</h1>
                <p className="text-gray-600 font-thin text-2xl">Meet our team, The most experienced team in the States.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 py-8 md:px-16">
                    <div className="text-center md:text-left md:mr-8 pb-8">
                        <img src={Team1} alt="Team-Member" className="md:h-64 pb-4 rounded-lg"></img>
                        <p>John Doe</p>
                        <p className="text-indigo-600">CEO</p>
                        <div className="flex text-gray-600 justify-center md:justify-start">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-github ml-4" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="text-center md:text-left md:mr-8 pb-8">
                        <img src={Team2} alt="Team-Member" className="md:h-64 pb-4 rounded-lg"></img>
                        <p>Allison Walton</p>
                        <p className="text-indigo-600">Front-end Developer</p>
                        <div className="flex text-gray-600 justify-center md:justify-start">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-github ml-4" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="text-center md:text-left pb-8">
                        <img src={Team3} alt="Team-Member" className="md:h-64 pb-4 rounded-lg"></img>
                        <p>Andres Thiago</p>
                        <p className="text-indigo-600">Front-end Developer</p>
                        <div className="flex text-gray-600 justify-center md:justify-start">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-github ml-4" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
