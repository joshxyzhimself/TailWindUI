import React from 'react'

export default function Testimonial() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 text-gray-100">
            <div className="w-full bg-indigo-600 p-8 shadow-md border-4">
                <div className="flex justify-around md:w-1/5 items-center">
                    <i className="fa fa-file-text-o text-gray-300 fa-2x" aria-hidden="true"></i>
                    <p className="text-2xl font-bold">Turtle</p>
                </div>
                <p className="break-all p-4 text-2xl">Carried nothing on am warrant towards.
                    Polite in of in oh needed itself silent course. Assistance travelling so
                    especially do prosperous appearance mr no celebrated.</p>
                    <div className="flex justify-between pl-2 pt-8 w-1/5 text-white ">
                    <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                    <div className="w-full text-lg ml-8">
                        <p>Judith</p>
                        <p>CEO,Turtle</p>
                    </div>
                    </div>
            </div>
            <div className="w-full bg-indigo-600 p-8  shadow-md border-4">
                <div className="flex justify-around md:w-1/4 items-center">
                    <i class="fa fa-home text-gray-300 fa-2x" aria-hidden="true"></i>
                    <p className="text-2xl font-bold">Workcation</p>
                </div>
                <p className="break-all p-4 text-2xl">Carried nothing on am warrant towards.
                    Polite in of in oh needed itself silent course. Assistance travelling so
                    especially do prosperous appearance mr no celebrated.</p>
                    <div className="flex justify-between pl-2 pt-8 w-1/5 text-white ">
                    <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                    <div className="w-full text-lg ml-8">
                        <p>Judith</p>
                        <p>CEO,Turtle</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}
