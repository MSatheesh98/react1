import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const url=`http://localhost:3001/users` 
 

  export default (props)=>
  {

    var [UserData, setStateUserData] = useState({
                                                    name: '',
                                                    mail: '',
                                                    phone: ``,
                                                    txtConformation: ''
                                                });
useEffect(()=>{

                 const url=`http://localhost:3001/users/${idno}` 
                                  
                axios.get(url).then((result) =>setStateUserData(result.data));
                                  
        },[])                                              
    

 //Destructing The Data
 var {  name , mail , phone } = UserData
   
 //Props History Data
 let {idno}=useParams();

/*     
  //Name_input_textbox
  nameHandling = (e) => 
  {
      this.setState({ name: e.target.value })
  }


  //Email_input_textbox
  mailHandling = (e) =>
   {
      this.setState({ mail: e.target.value })
  }


  //Phone_input_textbox
  phoneHandling = (e) => 
  {
      this.setState({ phone: e.target.value })
  }
*/

  let formHandling=(e)=>
  {
      setStateUserData({...UserData,[e.target.name]:e.target.value})
  }


  let submitHandler = (e) => {

      e.preventDefault();

      var FormData =
      {   
          'name': UserData.name,
          'mail': UserData.mail,
          'phone':UserData.phone
      }

     
      
      //alert(JSON.stringify(FormData));


      /*
      axios.post(url, formdata)
          .then(() => window.alert("....CREATED..."))
          .catch(() => window.alert("ERROR"));
      
      */
  /*
     
      axios.post(url, FormData)
          .then(() => this.setState({ txtConformation: 'Account Created...' }))
          .catch(() => this.setState({ txtConformation: 'Accounted Failed...' }));
    */

      axios.put(`${url}/${idno}`, FormData)
          .then(() => {
              window.alert("....Account Updated Successfully..."); 
              props.history.push('/hooksuser')
          });


  }   

        return (<>
                    <div className="container-fluid   p-2 ">

                        <h3 className="text-center">User_Data_Edit</h3>

                      <div className="container   forv">

                  <form onSubmit={submitHandler.bind(this)}>
                        
                        <div className="mb-3">
                           <label className="form-label">Name</label>
                           <input type="text" className="form-control" 
                            value={name} name="name"
                           onChange={formHandling.bind(this)}/>
                        </div>

                        <div className="mb-3">
                           <label className="form-label">Mail</label>
                           <input type="email" className="form-control"
                            value={mail} name="mail"
                            onChange={formHandling.bind(this)}/>
                        </div>

                        <div className="mb-3">
                           <label className="form-label">Phone</label>
                           <input type="number" className="form-control" 
                           value={phone} name="phone"
                            onChange={formHandling.bind(this)}/>
                        </div>

                              <Link to="/hooksuser" className="btn btn-success m-2">GoTo Back</Link>

                               <button className="btn btn-warning mx-3 m-2" type="submit" value="Update"> Update  </button> 
                        
                     </form>  
                        </div>
               
              </div>
        </>)
    }

   


 