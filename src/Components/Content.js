import React from 'react'
import Content2 from '../assets/content2.jpg';
import Content3 from '../assets/content3.jpg';
export default function Content() {
    return (
        <div className="flex justify-center text-center text-gray-600 py-8 md:px-40">
            <div>
                <h1 className="text-indigo-600 text-xl">Introducing</h1>
                <h1 className="text-black text-5xl font-bold">React.js for beginners</h1>
                <div className="py-4 flex justify-center items-center text-left">
                    <p>And sir dare view but over man. So at within mr to simple assure. Mr
                        disposing continued it offending arranging in we. Extremity as if breakfast
                        agreement. Off now mistress provided out horrible opinions. Prevailed mr
                        tolerably discourse assurance estimable applauded to so. Him everything
                        melancholy uncommonly but solicitude inhabiting projection off. Connection
                        stimulated estimating excellence an to impression.</p>
                </div>
                <div className="flex flex-col xl:flex-row justify-between text-left">
                    <img src={Content2} alt="javascript" className="object-contain h-64"/>
                    <div>
                        <p className=" md:pl-4 pt-8">Am terminated it excellence invitation projection
                            as. She graceful shy believed distance use nay. Lively is people so basket
                            ladies window expect. Supply as so period it enough income he genius. Themselves
                            acceptance bed sympathize get dissimilar way admiration son. Design for are
                            edward regret met lovers. This are calm case roof and.</p>
                        <p className="md:pl-4">Am terminated it excellence invitation projection as. She
                            graceful shy believed distance use nay. Lively is people so basket ladies window
                            expect. Supply as so period it enough income he genius. Themselves acceptance
                            bed sympathize get dissimilar way admiration son. Design for are edward regret
                            met lovers. This are calm case roof and.</p>

                    </div>
                </div>
                <div className="flex w-full pt-8">
                    <img src={Content3} alt="code"/>
                </div>
                <p className="italic text-xl"> JavaScript is the 2nd most used language around the globe.</p>
                <div className="flex pt-8">
                    <p className="text-black italic px-4 border-l-2 text-left text-2xl">"Heart beats fast Colors and promises How to be brave How can I love when I'm
                        afraid to fall But watching you stand alone All of my doubt, suddenly goes away
                        somehow One step closer I have died everyday, waiting for you Darling, don't be
                        afraid, I have love"- Christina Perri - A Thousand Years</p>
                </div>

            </div>
        </div>
    )
}
