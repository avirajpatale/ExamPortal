import React from 'react'
import { toast } from 'react-toastify';
import Home from '../Home';
import useAuth from '../../util/useAuth'

export default function Logout() {
    //useAuth()
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('totalQuestions')
    sessionStorage.removeItem('paperSetterId')
    sessionStorage.removeItem('paperId')
    sessionStorage.removeItem('paperSubject')
    toast.success('You have been logged out')
    return (
        <Home />
    )


}
