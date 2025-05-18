import React, { useState, useCallback, useEffect, useRef } from 'react'
//password generator 
function PasswordGen() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(true)
    const [password, setpassword] = useState("")

    //callback hook 
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#%^&*(){}[]"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setpassword(pass)
    }, [length, numberAllowed, charAllowed, setpassword])

    //useEffect hook
    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    //useRef hook
    const passwordRef = useRef(null)

    const copyPasswordClickBoard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 10);
        window.navigator.clipboard.writeText(password)
    }, [password])
    return (
        <>
            <div className='w-full h-screen bg-black text-white'>
                <h1 className='text-center'>Password Generator</h1>
                <div className="container max-w-xl text-black-600 mx-auto drop-shadow-lg">
                    <div className='flex'>
                        <input type="text"
                            className='outline-none w-full py-2 px-3 rounded-l-lg text-red-600'
                            value={password}
                            readOnly
                            ref={passwordRef}
                        />
                        <button
                            onClick={copyPasswordClickBoard}
                            className='cursor-pointer bg-cyan-600 rounded-r-lg text-white shrink-0 py-2 px-4'>Copy</button>
                    </div>
                    <div className='flex text-sm gap-x-1'>
                        <div className='flex items-center'>

                            <input type="range"
                                min={6}
                                max={100}
                                onChange={(e) => {
                                    setLength(e.target.value)
                                }}
                                className='outline-none w-full py-2 px-3 cursor-pointer'
                                value={length}
                            />
                            <label className='w-32 px-2'>Length: {length}</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox"
                                defaultChecked={numberAllowed}
                                id='numberInput'
                                onChange={(e) => {
                                    setNumberAllowed((prev) => !prev);
                                }}
                                className='outline-none w-full py-2 px-3 cursor-pointer'
                                value={length}
                            />
                            <label className='px-2'>Number {Number}</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox"
                                defaultChecked={charAllowed}
                                id='numberInput'
                                onChange={(e) => {
                                    setCharAllowed((prev) => !prev);
                                }}
                                className='outline-none w-full py-2 px-3 cursor-pointer'
                                value={length}
                            />
                            <label className='px-2'>Characters{Number}</label>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PasswordGen