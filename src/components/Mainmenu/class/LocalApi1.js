 import React, { Component } from 'react'

 import { Link } from 'react-router-dom'

 import axios from 'axios';

 //Golbal Variable From Online
 const url=`http://localhost:3001/users`
 
 class LocalApi1 extends Component
{
       
       constructor(props) {
         super(props)
       
         this.state = 
         { 
            userData:[]   //empty array for accessing the url data
         }
       }

       getData = () =>
       {
        axios.get(url).then( (result) => this.setState({userData:result.data }));
       }
       
 DeleteHandler=(id)=>
 {
        

         if( window.confirm(`You Selected Record For Delete is ${id} ?`))
           
         {
                 axios.delete(`${url}/${id}`)

                 this.getData();
         }

 }     
       
       
       
       
       
        render()
         {
            return (<>

            <div className="container-fluid" style={{backgroundColor:"#85939e"}}>

            <h2 className="text-center  py-5 ">Fetching_LocalApi_Data into React</h2>

            <div className="container ">
               
            
         <table className="table table-bordered table-dark text-center ">

               <thead className="table local text-center">

                                 
                                <th>Id</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Phone</th>
                                <th colSpan="3">Action</th>
                </thead>

                <tbody>
                {
                       this.state.userData.map( (res,i)=> 
                       {
                            return(<tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{res.name}</td>
                                    <td>{res.mail}</td>
                                    <td>{res.phone}</td>
                                     
                                    <td>
                                            <Link to={`/localapi1/view/${res.id}`} className="btn btn-primary">VIEW</Link>
                                    </td>
                                    <td>
                                            <Link to={`/localapi1/edit/${res.id}`} className="btn btn-warning">EDIT</Link>
                                    </td>
                                    <td>
                                            <Link onClick={()=> this.DeleteHandler(res.id)} className="btn btn-danger">DELETE</Link>
                                    </td>
                               
                            
                            </tr>)
                         })
               }        
                 </tbody>

                </table>
               
            

            </div>
            </div>
                    
                </>)
         }

         componentDidMount()
         {
                this.getData();
         }
 }
 

 export default LocalApi1; 