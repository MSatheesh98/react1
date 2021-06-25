import React , {Fragment} from 'react'

 //Font Awesome Icons File Importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icons  Importing
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
 

 //Main Function
function Contact()
{

 
    return(<Fragment>
       
       <div className="container-fluid" style={{backgroundColor:'#475562', margin:'1px',border:'1px white'}}>
      <div className="container">
          <div className="row">
              <p className="text-center text-white font display-3">CONTACT US</p>
             
          
                <div className="col-lg-4" >
                    <div className="card text-center  text-white p-3" style={{backgroundColor:'#475562', border:'none'}}  >
                      
                        <div className="card-body">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-weight-bold text-warning fa-4x"/>
                            <h3 className="py-3 m-3">ADDRESS</h3>
                            <p className="text-justify m-3 ">Alekhya Towers,HayathNagar</p>
                            <form>
                                <input className="w-100 m-3 text-white bg-dark border-white"  type="text" placeholder="Name*"  />
                            </form>
                            
                            
                        </div>

                    </div>
                </div>
         

       
             <div className="col-lg-4" >
                <div className="card text-center  text-white p-3" style={{backgroundColor:'#475562', border:'none'}}  >
 
                    <div className="card-body">
                    <FontAwesomeIcon icon={faPhone} className="text-weight-bold text-warning fa-4x"/>
                        <h3 className="py-3 m-3">PHONE</h3>
                        <p className="text-justify m-3 ">040-223514368 , 9866258049</p>
                        <form>
                            <input className="w-100 m-3 text-white bg-dark border-white"  type="email" placeholder="Email*" />
                        </form>
                         
                    </div>

                </div>
            </div>
         

         <div className="col-lg-4" >
            <div className="card text-center  text-white p-3" style={{backgroundColor:'#475562', border:'none'}} >
   
                <div className="card-body">
                <FontAwesomeIcon icon={faBlog} className="text-weight-bold text-warning fa-4x"/>
                    <h3 className="py-3 m-3">WEBSITE</h3>
                    <p className="text-justify m-3 ">http://tejatech.com</p>
                    <form>
                        <input className="w-100 m-3 text-white bg-dark border-white"  type="text" placeholder="Phone*"  />
                    </form>
                    
                </div>

            </div>
        </div>
     

    </div>         
                
             <div className="row">

                <div className="col-lg-12 text-center">

                <textarea className="  bg-dark text-white border-white message" placeholder="Message*" ></textarea>

                </div>
             </div>
         

            

            
                <div className="container ">
                    
                        <button className="btn-warning  width margin1 " type="reset">RESET</button>
                        <button className="btn-primary  width  margin2 " type="submit">SUBMIT</button>
                     
                </div>
            

          </div>
         
      </div>

         

         </Fragment>)
}

export default Contact;