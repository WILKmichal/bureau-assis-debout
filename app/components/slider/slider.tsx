"use client"
import React, { useState } from 'react';

export default function Testt() {

    const [progress, setProgress] = useState(30);

    return (
        <div className='h-full flex'>
            <div className='bottom-0' style={{ bottom: `20%` }}>
                { /* eslint-disable-next-line */}
                <img className="object-none" src='./draggable.svg' draggable={false}></img>
            </div>
            <div className="relative w-7 min-w-7 h-full bg-slate-300 rounded">
                <div className="absolute bottom-0 left-0 w-7 h-1/2 bg-sky-950 rounded" style={{ height: `${progress}%` }}></div>
            </div>
            <div>
                { /* eslint-disable-next-line */}
                <img className="transform rotate-180 object-none" src='./draggable.svg' draggable={false}></img>
            </div>
        </div>
    );
}
