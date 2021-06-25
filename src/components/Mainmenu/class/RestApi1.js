 import React, { Component } from 'react'

 import axios from 'axios';

 //Golbal Variable From Online
 const url=`https://jsonplaceholder.typicode.com/todos`
 
 class RestApi1 extends Component
{
       
       constructor(props) {
         super(props)
       
         this.state = 
         {
                 userData:[]  //empty array for accessing the url data
         }
       }
       
       
       
       
       
       
        render()
         {
            return (<>

            <div className="container-fluid" style={{backgroundColor:"#85939e"}}>

            <h2 className="text-center  py-5 "> Fecthing_RestApi_Data through Global URLs/Apis</h2>

            <div className="container ">
               
            
         <table className="table table-bordered table-dark  ">

               <thead className="table table-light text-center">

                                <th>User_Id</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                                <th colSpan="3">Action</th>
                </thead>

                <tbody>
                {
                       this.state.userData.map( (res,i)=> 
                       {
                            return(<tr key={i}>
                                    
                                    <td>{res.userId}</td>
                                    <td>{res.id}</td>
                                    <td>{res.title}</td>
                                    <td>{res.completed ? "true" : "false" }</td>
                                    <td>
                                            <button className="btn btn-primary">VIEW</button>
                                    </td>
                                    <td>
                                            <button className="btn btn-warning">EDIT</button>
                                    </td>
                                    <td>
                                            <button className="btn btn-danger">DELETE</button>
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
                 axios.get(url).then( (result) => this.setState({ userData:result.data }));
         }
 }
 

 export default RestApi1; 