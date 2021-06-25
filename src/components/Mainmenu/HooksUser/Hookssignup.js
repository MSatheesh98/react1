import React, {useState,useEffect} from 'react'
import axios from 'axios'
 

const url = `http://localhost:3001/users`

export default (props)=>
{
        var [UserData , setStateUserData]=useState({
            name: '',
            mail: '',
            phone: ``,
            txtConformation: ''
        });
        
//Destructuring...
 var {  name, mail, phone, txtConformation } = UserData
 
  let formHandling=(e)=>
  {

    setStateUserData({...UserData, [e.target.name]: e.target.value } );
  }


    let submitHandler = (e) => {

        e.preventDefault();

        var FormData =
        {   
            'name': UserData.name,
            'mail': UserData.mail,
            'phone':UserData.phone
        }

       
            
        axios.post(url, FormData)
            .then(() => {
                window.alert("....ACCOUNT CREATED SUCCESSFULLY..."); 
                props.history.push('/hooksuser')
            });

  
    }

       

        return (<>
            <div className="container-fluid     p-3">

                <h4 className="py-3 text-center">User_Registration [Hooks_Concept] </h4>


                <div className="container forv  ">

                    <form onSubmit={submitHandler.bind(this)}>

                      <div class="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" class="form-control"
                                value={name} name="name"
                                onChange={formHandling.bind(this)} />

                        </div>

                        <div class="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" class="form-control"
                                value={mail} name="mail"
                                onChange={formHandling.bind(this)} />
                        </div>

                        <div class="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" class="form-control"
                                value={phone} name="phone"
                                onChange={formHandling.bind(this)} />
                        </div>


                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">CREATE ACCOUNT</button>
                        </div>

                        <p class="text-primary">{txtConformation}</p>

                    </form>


                </div>

            </div>
        </>)
}