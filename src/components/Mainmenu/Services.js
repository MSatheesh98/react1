

import React , {Fragment} from 'react'

//Font Awesome Icons File Importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icons  Importing
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCropAlt } from '@fortawesome/free-solid-svg-icons'
import { faSnowboarding  } from '@fortawesome/free-solid-svg-icons'
import { faArchway } from '@fortawesome/free-solid-svg-icons' 
import { faVideo } from '@fortawesome/free-solid-svg-icons' 
import { faAd} from '@fortawesome/free-solid-svg-icons'

 


 
//main Function
function Services()
{
    var Servicesdata=
[

    {
	  "icon":faCode,
	  "title":"UI-DESIGN",
	  "Discription":"UI part is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
	},
	
	
    {
	  "icon":faCropAlt,
	  "title":"UX-DESIGN",
	  "Discription":"UX part is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
	},
	
	
    {
	  "icon":faSnowboarding,
	  "title":"BRANDNING",
	  "Discription":"Branding is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
	},
	
	
    {
	  "icon":faArchway,
	  "title":"GRAPHIC-DESIGN",
	  "Discription":"Graphic-Design is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
	},
	
	
    {
	  "icon":faVideo,
	  "title":"ANIMATION",
	  "Discription":"Animation is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
	},
	
	
    {
	  "icon":faAd,
	  "title":"MARKETING",
	  "Discription":"Marketing is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"
	},
]
        
        return(<Fragment>
       
       <div className="container-fluid" style={{backgroundColor:'#12151c'}}>
        <div className="container p-5 text-center">
            <h1 className="pt-2 pb-5 text-white display-3 font">SERVICES</h1>
            <div className="row">
                

                {/* Dynamic Services Data Preparing */}

                {
                   Servicesdata.map((data,i)=>
                   <div className="col-lg-4 content-center " key={i}>
                        <div className="card text-center sr text-white p-3" style={{backgroundColor:'#12151c'}}>
                             <div className="card-body">
                                 <FontAwesomeIcon icon={data.icon} className="font-weight-bold text-center text-warning fa-3x icons"  />
                                  <h3 className="py-3">{data.title}</h3>
                                  <p className="text-justify "> {data.Discription}</p>

                             </div>
                            
                        </div>
                  </div> )
                }
            {/* Dynamic Services Data Preparing */}   
 




        
             {/*  under Code is increase Process  */}
            
             {/* 

                <div className="col-lg-4 content-center ">
                    <div className="card text-center sr text-white p-3" style={{backgroundColor:'#12151c'}}>
                      <div className="card-body">
                        <FontAwesomeIcon icon={faCode} className="font-weight-bold text-center text-warning fa-3x"  />
                            <h3 className="py-3">UI DESIGN</h3>
                            <p className="text-justify ">UI part is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>

                        </div>
                       
                    </div>
                </div>
                 
                  
              <div className="col-lg-4">
                <div className="card text-center sr text-white p-3" style={{backgroundColor:'#12151c'}}>
                
                    <div className="card-body" >
                      <FontAwesomeIcon icon={faCropAlt} className=" text-weight-bold text-warning fa-3x"/>
                        <h3 className="py-3">UX DESIGN</h3>
                        <p className="text-justify ">UX part is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>

                    </div>

                </div>


                </div>
                
                <div className="col-lg-4">
                    <div className="card text-center sr text-white p-3" style={{backgroundColor:'#12151c'}}>
                    
                        <div className="card-body">
                        <FontAwesomeIcon icon={faSnowboarding} className=" text-weight-bold text-warning fa-3x"/>
                            <h3 className="py-3">BRANDING</h3>
                            <p className="text-justify ">Branding is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>

                        </div>

                    </div>


                </div>
                 
                <div className="col-lg-4">
                    <div className="card text-center sr text-white p-3" style={{backgroundColor:'#12151c'}}>
                    
                        <div className="card-body">
                        <FontAwesomeIcon icon={faArchway} className=" text-weight-bold text-warning fa-3x"/>
                            <h3 className="py-3">GRAPHIC DESIGN</h3>
                            <p className="text-justify ">Graphic is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>

                        </div>
                         
                    </div>
                </div>
                  
              <div className="col-lg-4">
                <div className="card text-center sr text-white p-3" style={{backgroundColor:'#12151c'}}>
                
                    <div className="card-body">
                    <FontAwesomeIcon icon={faVideo} className=" text-weight-bold text-warning fa-3x"/>
                        <h3 className="py-3">ANIMATION DESIGN</h3>
                        <p className="text-justify ">Animation is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>

                    </div>
                     
                </div>


                </div>
                
                <div className="col-lg-4">
                    <div className="card text-center sr text-white p-3" style={{backgroundColor:'#12151c'}}>
                    
                        <div className="card-body">
                        <FontAwesomeIcon icon={faAd} className=" text-weight-bold text-warning fa-3x"/>
                            <h3 className="py-3">MARKETING</h3>
                            <p className="text-justify ">Marketing is a in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>

                        </div>
                         
                    </div>


                </div>
            
            */}

             {/*  under Code is increase Process  */}


            </div>

        </div>



    </div>

             
</Fragment>)
}

export default Services;