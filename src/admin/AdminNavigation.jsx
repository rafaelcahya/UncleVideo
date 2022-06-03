import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import AdminMyUploaded from './myUploaded/AdminMyUploaded'
import AdminUploadVideo from './upload video/AdminUploadVideo'

export default function AdminNavigation() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/admin-login" element={<AdminLogin/>} />
                    <Route path="/admin" exact element={<AdminMyUploaded/>} />
                    <Route path="/admin-upload-video" element={<AdminUploadVideo/>} />
                </Routes>
            </Router>
        </>
    )
}
