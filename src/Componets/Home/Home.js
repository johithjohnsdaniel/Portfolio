import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>


        </div>
    )
}

export default Home
