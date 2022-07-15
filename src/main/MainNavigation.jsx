import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/explore/Explore'
import Homepage from './pages/Homepage'

export default function MainNavigation() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Homepage/>} />
                    <Route path="/explore"  element={<Explore/>} />
                </Routes>
            </Router>
        </>
    )
}
