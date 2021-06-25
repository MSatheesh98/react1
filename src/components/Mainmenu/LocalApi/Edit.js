import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const url=`http://localhost:3001/users` 
var idno;

 class Edit extends Component {

    constructor(props) 
    {
      super(props)
    
      this.state =
      {
          name: '',
          mail: '',
          phone: ``,
          txtConformation: ''
      }
  }
 
  

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


  submitHandler = (e) => {

      e.preventDefault();

      var FormData =
      {   
          'name': this.state.name,
          'mail': this.state.mail,
          'phone': this.state.phone
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
              this.props.history.push('/localapi1')
          });


  }

    

    render() {
            
        idno = this.props.match.params.uid
         
             console.log(idno)

             var {  name , mail , phone } = this.state

        return (<>
                    <div className="container-fluid   p-2 ">

                        <h3 className="text-center">User_Data_Edit</h3>

                      <div className="container   forv">

                  <form onSubmit={this.submitHandler.bind(this)}>
                        
                        <div className="mb-3">
                           <label className="form-label">Name</label>
                           <input type="text" className="form-control" 
                            value={name}
                           onChange={this.nameHandling.bind(this)}/>
                        </div>

                        <div className="mb-3">
                           <label className="form-label">Mail</label>
                           <input type="email" className="form-control"
                            value={mail}
                            onChange={this.mailHandling.bind(this)}/>
                        </div>

                        <div className="mb-3">
                           <label className="form-label">Phone</label>
                           <input type="number" className="form-control" 
                           value={phone}
                            onChange={this.phoneHandling.bind(this)}/>
                        </div>

                              <Link to="/localapi1" className="btn btn-success m-2">GoTo Back</Link>

                               <button className="btn btn-warning mx-3 m-2" type="submit" value="Update"> Update  </button> 
                        
                     </form>  
                        </div>
               
              </div>
        </>)
    }

    componentDidMount()
    {
           const url=`http://localhost:3001/users/${idno}` 

           axios.get(url).then((result) => this.setState(result.data));
    }
}


export default Edit;