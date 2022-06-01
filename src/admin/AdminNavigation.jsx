import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import AdminHomepage from './homepage/AdminHomepage'

export default function AdminNavigation() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/admin-login" element={<AdminLogin/>} />
                    <Route path="/" exact element={<AdminHomepage/>} />
                </Routes>
            </Router>
        </>
    )
}
