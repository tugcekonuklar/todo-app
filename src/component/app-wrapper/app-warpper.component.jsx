import React from 'react'
import { Header } from '../header/header.component'
import { Footer } from '../footer/footer.component'
import './app-wrapper.style.css'

export function AppWrapper({ children }) {
    return (
        <div className="App">
            <div className='wrapper rows'>
                <Header></Header>
                <div className='columns'>
                    {children}
                </div>
                <div className="column is-12">
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}