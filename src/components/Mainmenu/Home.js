

// Main React  And Fragment Import
import React , {Fragment} from 'react'

import jumbo from './../../assets/images/jumbo.jpg'
import mypic from  './../../assets/images/mypic.jpg'

function Home()
{

    
    return(<Fragment>
                 
                 <div className="jumbotron mt-0 text-white">
                      <div className="container">
              
                     <div className="row">

                            <div className="col-lg-6 name">
                            <h1 className="h1 pt-3 mt-5 ">I am Satheesh Kumar Modala </h1>
                            <h5 className="bg-success p-2 mt-3 w-75 text-center">Full Stack Developer</h5>


                            </div>

                            <div className="col-lg-6">
                            <img src={mypic} className="img-thumbnail"/>

                            
                            </div>
                     </div>



     </div>
    </div>

        
       
       </Fragment>)
    
    
}

//exporting
export default Home;


