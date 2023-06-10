import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Aboutus from './footer/Aboutus'
import Privacypolicy from './footer/Privacypolicy'
import Home from './Home'
import Login from './papersetter/Login'
import Register from './papersetter/Register'
import Forgetpassword from './papersetter/Forgetpassword'
import Contactus from './footer/Contactus'
import Paperlogin from './student/Paperlogin'
import Instructions from './student/Instructions'
import StudentDetails from './student/StudentDetails'
import Dashboard from './papersetter/Dashboard'
import MainPaper from './student/MainPaper'
import { Switch, Route, withRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Logout from './papersetter/Logout'
import PaperDetails from './papersetter/PaperDetails'
import CreateQuestions from './papersetter/CreateQuestions'
import Publish from './publishPaper/Publish'
import Result from './results/Result'

function Maincomp() {
  return (
    <div className='main-div'>
      <Header />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/privacypolicy' component={Privacypolicy} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/forgetpassword' component={Forgetpassword} />
        <Route path='/contactus' component={Contactus} />
        <Route path='/paperlogin' component={Paperlogin} />
        <Route path='/instructions' component={Instructions} />
        <Route path='/studentdetails' component={StudentDetails} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/paper' component={MainPaper} />
        <Route path='/logout' component={Logout} />
        <Route path='/createpaper' component={PaperDetails} />
        <Route path='/question' component={CreateQuestions} />
        <Route path='/publish' component={Publish} />
        <Route path='/result' component={Result} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

export default withRouter(Maincomp);
