import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


var idno;

export default class View extends Component 
 
 {

     constructor(props)
      {
       super(props)
     
       this.state =
                   {
                       
                   }
     }
          
    
    

    render() 
    {
            
       idno = this.props.match.params.uid
         
             console.log(idno)

             var {   id , name , mail , phone } = this.state

        return (<>
                    <div className="container text-center p-3 m-2">

                        <h3>User_View_Data</h3>

                        <div className="container text-center w-50 ">

                              <p>{idno} th Record Data</p>

                               <table className="table table-dark  table-bordered">
                                   
                                   <thead className="table table-light table-bordered">

                                          <th>ID</th>
                                          <th>Name</th>
                                          <th>Mail</th>
                                          <th>Phone</th>
                                   </thead>

                                   <tbody>
                                          <tr>
                                              <td>{id}</td>
                                              <td>{name}</td>
                                              <td>{mail}</td>
                                              <td>{phone}</td>

                                          </tr>
                                   </tbody>
                               </table>
                            

                              <Link to="/localapi1" className="btn btn-success">GoTo Back</Link>

                        </div>
                        
                    </div>
        </>)
    }

    componentDidMount()
    {
       
        const url = `http://localhost:3001/users/${idno}`
        
        axios.get(url).then((result) => this.setState(result.data))

        //Update apidata to empty state object via setState
    }
}


