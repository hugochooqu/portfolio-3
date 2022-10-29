import React from "react";

export default function Achievement() {
    return (
        <div className="h-56 lg:flex ">
            <div className="bg-neutral-100 lg:w-4/12">
                <h1 className="text-8xl font-bold text-center tracking-tighter text-fuchsia-500 relative top-5">
                    12
                </h1>
                <p className="text-4xl font-semibold tracking-tighter text-center relative top-3">
                    Years Experience
                </p>
            </div>
            <div className="grid grid-cols-2 gap-2 bg-neutral-100 w-8/12  ">
                <div className="text-center bg-blue-700 w-80 h-20 relative top-6 left-14 text-white leading-6">
                    <h1 className="text-4xl font-bold pt-2 tracking-tighter">60+</h1>
                    <p className="text-lg">Clients</p>
                </div >
                <div className="text-center bg-blue-700 w-80 h-20 relative top-6 left-8 text-white leading-6">
                    <h1 className="text-4xl font-bold pt-2 tracking-tighter">10</h1>
                    <p className="text-lg">Achievements</p>
                </div>
                <div className="text-center bg-blue-700 w-80 h-20 relative top-4 left-14 text-white leading-6">
                    <h1 className="text-4xl font-bold pt-2 tracking-tighter">122+</h1>
                    <p className="text-lg">Completed Projects</p>
                </div>
                <div className="text-center bg-blue-700 w-80 h-20 relative top-4 left-8 text-white leading-6">
                    <h1 className="text-4xl font-bold pt-2 tracking-tighter">30+</h1>
                    <p className="text-lg">Awards</p>
                </div>
            </div>
        </div>
    )
}