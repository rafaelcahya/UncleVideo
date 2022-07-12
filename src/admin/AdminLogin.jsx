import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

function AdminLogin() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const Submit = ()=>{
        if(username == "" && password == ""){
            setErrorMessage("All form must be filled")
        }else if(username == "" || username == null){
            setErrorMessage("Username must be filled")
        }else if(password == ""){
            setErrorMessage("Password must be filled")
        }else{
        Axios.post("http://localhost:3001/user/login", { username: username, password: password }).then((response) => {
            if(response.data.message){
                setErrorMessage(response.data.message)
            }else{
                localStorage.setItem("In", response.data.In)
                localStorage.setItem("code", response.data.code)
                window.location.replace("/admin")
            }
        })
    }
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <>
            <div className='text-black py-24 tracking-wide'>
                <div className='mx-auto p-14 rounded-xl shadow-xl w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='nunito-700 text-[25px]'>UncleHub Admin</p>
                            <p className='nunito-500 text-[#7D7D7D] text-[14px]'>Enter your credential to access your account</p>
                        </div>
                        <form className='nunito-500 flex flex-col gap-7'>  
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[14px] nunito-600 text-[#575757]'>Username</label>
                                <input type="text" placeholder='Input your username' className='nunito border border-[#C9C9C9] focus-within:border-[#AB59FF] text-black w-[350px] text-[14px] px-5 py-2.5 rounded-md outline-none tracking-wide' onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[14px] nunito-600 text-[#575757]'>Password</label>
                                <div className='bg-white border border-[#C9C9C9] focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 rounded-md pr-3'>
                                    <input 
                                        type={passwordShown ? "text" : "password"}
                                        placeholder='Input your password' 
                                        className='text-black text-[14px] px-4 py-2.5 w-full outline-none tracking-wide'
                                        onChange={(event)=>{
                                            setPassword(event.target.value)
                                        }}/>
                                        {
                                            passwordShown ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye stroke-[#666]" onClick={togglePassword}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off stroke-[#666]" onClick={togglePassword}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                        }
                                </div>
                            </div>
                        </form>
                        <div className='flex flex-col gap-5'>
                            <p className="nunito-600 text-[14px] text-[#FF5C58] text-center">{errorMessage}</p>
                            <p onClick={Submit} className='nunito-600 text-[14px] bg-[#AB59FF] text-white text-center py-2.5 rounded-md cursor-pointer'>Sign in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin