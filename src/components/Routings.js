
        //**************====== Main Index file Of the React ====**************//


import React ,{Fragment} from 'react'

//Class Components files Exportings
import Class1 from './Mainmenu/class/Class1.js'
import Lifecycle from './Mainmenu/class/Lifecycle.js'
import RestApi1 from './Mainmenu/class/RestApi1.js'
import LocalApi1 from './Mainmenu/class/LocalApi1.js'
import View from './Mainmenu/LocalApi/View.js'
import Edit from './Mainmenu/LocalApi/Edit.js'
import Signup from './Mainmenu/Signup.js'
import Rrc from './Mainmenu/Rrc.js'

//Function Components Files Importings
import Header from './Mainmenu/Header.js'
import Home from './Mainmenu/Home.js'
import About from './Mainmenu/About.js'
import Services from './Mainmenu/Services.js'
import Contact from './Mainmenu/Contact.js'
import Footer from './Mainmenu/Footer.js'
import Pagenotfound from './Pagenotfound.js'
import Itservices from './Mainmenu/Itservices.js'

//Hooks Components
import Hooks1 from './Mainmenu/Hooks1.js'
import Hooks2 from './Mainmenu/Hooks2.js'
import Pagination from './Mainmenu/Pagination.js'
import Hooksuser from './Mainmenu/HooksUser/Hooksuser.js'
import HooksView from './Mainmenu/HooksUser/Hooksview.js'
import HooksEdit from './Mainmenu/HooksUser/Hooksedit.js'
import HooksSignup from './Mainmenu/HooksUser/Hookssignup.js'
import HooksRedux from './Mainmenu/HooksRedux.js'


//Import BrowserRoute File From 'react-router-dom'
import { BrowserRouter , Route , Link , Switch , Redirect } from 'react-router-dom'
 

function Routings()
{

        return( <BrowserRouter>
               
               {/* Navbar Links */}
               <Header/>
                {/* Navbar Links */}

 <Switch>
            
            {/* Default React Path Calling*/}
           <Route exact path="/" component={Home}/>

           {/*React Path Calling*/}
           <Route  path="/home" component={Home}/>
           
           <Route path="/about" component={About}/>

           <Route path="/services" component={Services}/>

           <Route path="/itservices" component={Itservices}/>

           <Route path="/contact" component={Contact}/>

           <Route path="/class1" component={Class1}/>

           <Route path="/lifecycle" component={Lifecycle}/>

           <Route path="/restapi1" component={RestApi1}/>

           <Route exact path="/localapi1" component={LocalApi1}/>
                  <Route path="/localapi1/view/:uid" component={View}/>
                   <Route path="/localapi1/edit/:uid" component={Edit}/>

           <Route path="/signup" component={Signup}/>

           <Route path="/rrc" component={Rrc}/>

           <Route path="/hooks1" component={Hooks1}/>

           <Route path="/hooks2" component={Hooks2}/>

           <Route path="/pagination" component={Pagination}/>

           <Route exact path="/hooksuser" component={Hooksuser}/>
                 <Route path="/hooksuser/view/:idno" component={HooksView}/>
                 <Route path="/hooksuser/edit/:idno" component={HooksEdit}/>

           <Route path="/hookssignup" component={HooksSignup}/>

           <Route path="/hooksredux" component={HooksRedux}/>     
           
          {/*React Path Calling*/}




         {/*Redirect Path Calling*/}

            <Redirect to="/home"/>

         {/*Redirect Path Calling*/}

           {/*Page Not found Page 
           
           <Route component={Pagenotfound}/>
            
            Page Not found Page link*/} 
            

 </Switch>

            {/*  Footer Bar */} 
                <Footer/>
            {/*  Footer Bar */}

              </BrowserRouter>)
}

export default Routings;
 


 
       