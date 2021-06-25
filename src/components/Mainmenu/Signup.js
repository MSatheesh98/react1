import React, { Component } from 'react'
import axios from 'axios'

const url = `http://localhost:3001/users`

export default class Signup extends Component {

    constructor(props) {
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
    nameHandling = (e) => {
        this.setState({ name: e.target.value })
    }


    //Email_input_textbox
    mailHandling = (e) => {
        this.setState({ mail: e.target.value })
    }


    //Phone_input_textbox
    phoneHandling = (e) => {
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

        axios.post(url, FormData)
            .then(() => {
                window.alert("....ACCOUNT CREATED SUCCESSFULLY..."); 
                this.props.history.push('/localapi1')
            });

  
    }


    render() {

        console.log(this.props)

        //Destructuring...
        var {  name, mail, phone, txtConformation } = this.state

        return (<>
            <div className="container-fluid     p-3">

                <h4 className="py-3 text-center">User Registration [Class_Component]</h4>


                <div className="container forv  ">

                    <form onSubmit={this.submitHandler.bind(this)}>

                      <div class="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" class="form-control"
                                value={name}
                                onChange={this.nameHandling.bind(this)} />

                        </div>

                        <div class="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" class="form-control"
                                value={mail}
                                onChange={this.mailHandling.bind(this)} />
                        </div>

                        <div class="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" class="form-control"
                                value={phone}
                                onChange={this.phoneHandling.bind(this)} />
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
}
