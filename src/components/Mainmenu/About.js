import React , {Fragment} from 'react'

import mypic3 from './../../assets/images/mypic3.jpg'

 
 //Main Function
function About()
{
    return(<Fragment>
           
           <div className="container-fluid" style={{backgroundColor:'#12151c'}}>


          <div className="container py-5 w-75 text-center">

              <h1 className=" display-4 font  my-3 text-white">ABOUT US</h1>

              <p className="text-white pb-3">Modala Satheesh Kumar In publishing and graphic design,
                  Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                    of a document or a typeface without relying on meaningful content. 
                  Lorem ipsum may be used as a placeholder before final copy is available.</p>
        <div className="jumbotron text-white " style={{borderRadius: '10px' , height:'430px'}}>
            <div className="row">
              <div className="col-lg-6">
                  <div className="container w-100 py-5">
                      <table className="table table-borderless table text-white mx-4 table">
                          <tr>
                              <th></th>
                              <td><img src={mypic3} style={{borderRadius:'15px' , width:'30%', height:'80px'}}/></td>
                          </tr>

                          <tr>
                              <th>Full_Name</th>
                              <td  ><h6>Modala Satheesh</h6></td>
                          </tr>
                          <tr>
                            <th>Birthday</th>
                            <td><h6>17-05-1995</h6></td>
                        </tr>
                        <tr>
                            <th>Mobile_No</th>
                            <td><h6>9866258049</h6></td>
                        </tr>
                        <tr>
                            <th>E-mail</th>
                            <td><h6>satti9866@gmail.com</h6></td>
                        </tr>

                      </table>
                  </div>


              </div>
              <div className="col-lg-6 p-5">
                  <h4>Skills</h4>
                  <p className="text-left">HTML & CSS</p>
                  <div className="progress" style={{height:'30px'}}>
                      <div className="progress-bar bg-success" style={{width: '95%'}}>95%</div>
                  </div>

                  <p className="text-left">BOOTSTARP</p>
                  <div className="progress" style={{height:'30px'}}>
                      <div className="progress-bar bg-success" style={{width: '90%'}}>90%</div>
                  </div>

                  <p className="text-left">JAVASCRIPT</p>
                  <div className="progress" style={{height:'30px'}}>
                      <div className="progress-bar bg-success" style={{width: '85%'}}>85%</div>
                  </div>

                  <p className="text-left ">REACT</p>
                  <div className="progress" style={{height:'30px'}}>
                      <div className="progress-bar bg-success" style={{width: '90%'}}>90%</div>
                  </div>


              </div>


            </div>

        </div>
</div>
</div>
               
       
         </Fragment>)
}

export default About;