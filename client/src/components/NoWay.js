import React from 'react'
import Header from './header'
import Footer from './footer'

const NoWay = (props) => {

    return (
        <div>
        <Header />
            <h1>You're either trying to view a recipe that doesn't belong to you or you lost your connection</h1>
        <Footer />
        </div>
    )
}

export default NoWay