import React, { useState } from 'react'

function BgChange() {
    const [color, setColor] = useState("olive")

    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
                <div className="container flex gap-5">
                <button
                    className='px-4 py-2 bg-yellow-400 rounded-lg border-none text-slate-800'
                    onClick={() => setColor('yellow')}
                >Yellow</button>
                <button
                    className='px-4 py-2 bg-blue-400 rounded-lg border-none text-slate-800'
                    onClick={() => setColor('blue')}
                >Blue</button> 
                <button
                    className='px-4 py-2 bg-green-400 rounded-lg border-none text-slate-800'
                    onClick={() => setColor('green')}
                >Green</button>
                 <button
                    className='px-4 py-2 bg-red-400 rounded-lg border-none text-slate-800'
                    onClick={() => setColor('red')}
                >red</button>
                </div>
            </div>
        </>
    )
}

export default BgChange