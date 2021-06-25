import React from 'react' 
 
//Import BrowserRoute File From 'react-router-dom'
import { BrowserRouter , Route , Link , Switch , Redirect } from 'react-router-dom'

//Nested Routing Files Importing
import WebApplication from './itservices/WebApplication.js'
import MobileApplication from './itservices/MobileApplication.js'
import Uidesign from './itservices/Uidesign.js'
import Animation from './itservices/Animation.js'
import Graphic from './itservices/Graphic.js'
import Ads from './itservices/Ads.js'
import Marketing from './itservices/Marketing.js'
import Agency from './itservices/Agency.js'
import Itr from './itservices/Itr.js'
import Webdata from './itservices/Webdata.js'

function Itservices()
{
   
var services=

[
    {
        title:'WebApplication',
        RouteName:'/webapp',
    },

    {
        title:'MobileApplication',
        RouteName:'/mobileapp',
    },

    {
        title:'UI-UX Design',
        RouteName:'/ui-ux',
    },

    {
        title:'Animation Making',
        RouteName:'/animation',
    },

    {
        title:'Graphic Design',
        RouteName:'/graphic',
    },

    {
        title:'Advertisement',
        RouteName:'/ads',
    },

    {
        title:'Marketing',
        RouteName:'/marketing',
    },

    {
        title:'Agency',
        RouteName:'/agency',
    },

    {
        title:'IT_Recruitment',
        RouteName:'/itr',
    },

    {
        title:'Web_Data_Services',
        RouteName:'/webdata',
    }
]



    return(<>
       <BrowserRouter>
             <div className="container-fluid m-1 text-white p-5" style={{backgroundColor:' #232933'}}>
                 <h2 className="text-center font display-5" >IT SERVICES</h2>
                 <p className="content-justify">
                     Information technology service management are the activities that
                     are performed by an organization to design, build, deliver, operate and control 
                     information technology services offered to customers
                </p>
          </div>

                <div className="container my-1">

                    <div className="row">
                       
                        {/* Data List Links */}
                        <div className="col-lg-3 ">


                            {/* Code Increasing Process */}

                            {/* 
                      
                        <ul class="list-group">
                               <li class="list-group-item"> <Link to="/itservices/webapp">WebApplication</Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/mobileapp" >MobileApplication </Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/ui-ux">UI-UX Design </Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/animation">Animation Making</Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/graphic">Graphic Design</Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/ads">Advertisement</Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/marketing">Marketing</Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/agency" >Agency</Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/itr" >IT Recruitment</Link> </li>
                                <li class="list-group-item"> <Link to="/itservices/webdata">Web Data Services</Link> </li>
                     </ul>
                            */}
                       {/* Code Increasing Process */}

                
                     {/* Dynamic Nested Routings Process */}
               
                       <ul class="list-group">
                       
                                {
                                    services.map((data,i)=>
                                    <li class="list-group-item">
                                            <Link to={`/itservices${data.RouteName}`}>{data.title}</Link>
                                            </li>
                                    )
                                }
                      </ul>
                       {/* Dynamic Nested Routings Process */}

                        </div>


                        {/* Data List Links */}

                        {/* Data display Area */}
                      
                        <div className="col-lg-9">

                     <Switch>
                                {/* Default Path in Nested Routing*/}
                               <Route exact path="/itservices" component={WebApplication}/> 
                                 {/* Default Path in Nested Routing*/}    

                               <Route path="/itservices/webapp" component={WebApplication}/>
                               <Route path="/itservices/mobileapp" component={MobileApplication}/>
                               <Route path="/itservices/ui-ux" component={Uidesign}/>  
                               <Route path="/itservices/animation" component={Animation}/>
                               <Route path="/itservices/graphic" component={Graphic}/>
                               <Route path="/itservices/ads" component={Ads}/>
                               <Route path="/itservices/marketing" component={Marketing}/> 
                               <Route path="/itservices/agency" component={Agency}/> 
                               <Route path="/itservices/itr" component={Itr}/> 
                               <Route path="/itservices/webdata" component={Webdata}/> 


                               <Redirect to="/itservices/webapp"/>

                     </Switch>

                        
                        </div>
                         {/* Data display Area */}


                    </div>



                </div>



       </BrowserRouter>

    </>)
}
export default Itservices;