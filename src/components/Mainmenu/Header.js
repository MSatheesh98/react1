import React from 'react'

import { NavLink } from 'react-router-dom'

 

function Header()

{
    var headernames=["Home","About","Services","Itservices","Contact" ,
                     "Class1","LifeCycle" ,"RestApi1","LocalApi1","Signup",
                     "Rrc","Hooks1","Hooks2","Pagination","Hooksuser","HooksSignup",
                     "HooksRedux"]
    return(<>
         
           
                {/*React NavLinks Calling*/}
              
                <nav className="navbar navbar-expand-lg "
                 
                 style={
                     {
                         backgroundColor:'#475562',
                         border: '10px white',
                        }
                   }>
                  <div className="container-fluid">
          
                     
                    <div className="collapse nav-pills navbar-collapse justify-content-end" id="navbarNav">
                        
                      {/* 
                        <div className= "navbar-nav">
                            
                            <NavLink className="nav-link nav-item text-white mx-3 " activeStyle={{backgroundColor:'#000000'}}  style={{fontSize:'18px'}}   to="/home">HOME</NavLink>
                        
                            <NavLink className="nav-link nav-item text-white mx-3 " activeStyle={{backgroundColor:'#000000'}}  style={{fontSize:'18px'}} to="/about">ABOUT</NavLink>

                            <NavLink className="nav-link nav-item text-white mx-3" activeStyle={{backgroundColor:'#000000'}}  style={{fontSize:'18px'}} to="/services">SERVICES</NavLink>
                
                            <NavLink className="nav-link nav-item text-white mx-3" activeStyle={{backgroundColor:'#000000'}}  style={{fontSize:'18px'}} to="/contact">CONTACT</NavLink>
                       
                        </div>

                       */} 

                       {/* Dynamic Header Formation */}

                        <div className= "navbar-nav">

                                {
                                headernames.map((data,i)=>
                                    
                                    <NavLink key={i} className="nav-link nav-item text-white  "
                                    activeStyle={{backgroundColor:'#000000'}}
                                    style={{fontSize:'16px'}}   to={`/${data.toLocaleLowerCase()}`}>
                                    {data} 
                                    </NavLink>)
                                }
                              
                              {/* Drop Down Links 
                               
           


                              {/* Drop Down Links */}



                        </div>

                        {/* Dynamic Header Formation */} 
                
          </div>
        </div>
      </nav>

                {/*React NavLinks Calling*/} 

    </>)
}
export default Header;