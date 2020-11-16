import React from 'react'
import './app-wrapper.style.css'

export function AppWrapper({ children }) {
    return (
        <div className='wrapper'>
            <div className='card '>
                <div className="App">
                    {children}
                </div>
            </div>
        </div>
    )
}