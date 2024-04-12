"use client"
import React, { useState } from 'react';

export default function Testt() {

    const [progress, setProgress] = useState(70);

    return (
        <div className='h-full flex flex-row relative'>
            <div className='relative w-24 min-w-24 h-full' >
                <div className="absolute object-none bottom-0" style={{ height: `calc(${progress}% + 20px)` }}>
                    <img className="object-none top-0" src='./draggable.svg' draggable={false}></img>
                </div>
            </div>
            <div className="relative w-7 min-w-7 h-full bg-slate-300 rounded">
                <div className="absolute bottom-0 left-0 w-7 h-1/2 bg-sky-950 rounded" style={{ height: `${progress}%` }}></div>
            </div>
            <div className='relative w-24 min-w-24 h-full'>
                <div className="absolute object-none  bottom-0" style={{ height: `calc(75% + 20px)` }}>
                    <img className="object-none top-0 transform rotate-180" src='./draggable.svg' draggable={false}></img>
                </div>

                <div className="absolute object-none  bottom-0" style={{ height: `calc(50% + 20px)` }}>
                    <img className="object-none top-0 transform rotate-180" src='./draggable.svg' draggable={false}></img>
                </div>

                <div className="absolute object-none  bottom-0" style={{ height: `calc(25% + 20px)` }}>
                    <img className="object-none top-0 transform rotate-180" src='./draggable.svg' draggable={false}></img>
                </div>
            </div>
        </div>
    );
}
