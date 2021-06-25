import React, { useState,useEffect } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios';

//Golbal Variable From Online
const url=`http://localhost:3001/users`

export default(props)=>
{
      
       
        var[UserData,setStateUserData]=useState([]);

    //Call API Data Thruogh Hooks useEffect
      useEffect(()=>{
                   getData();
      },[])


     //for Code Reusaqbility Purpose 
      let getData = () =>
      {
       axios.get(url).then( (result) => setStateUserData(result.data));
      }

      //Delate Record Data
      let DeleteHandler=(id)=>
      {
       

        if( window.confirm(`You Selected Record For Delete is ${id} ?`))
          
        {
                axios.delete(`${url}/${id}`)
                 getData();
        }

      }     
      
           return (<>

           <div className="container-fluid" style={{backgroundColor:"#85939e"}}>

           <h2 className="text-center  py-5 ">Fetching_LocalApi_Data into React_Hooks</h2>

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
                       UserData.map( (res,i)=> 
                      {
                           return(<tr key={i}>
                                   <td>{i+1}</td>
                                   <td>{res.name}</td>
                                   <td>{res.mail}</td>
                                   <td>{res.phone}</td>
                                    
                                   <td>
                                           <Link to={`/hooksuser/view/${res.id}`} className="btn btn-primary">VIEW</Link>
                                   </td>
                                   <td>
                                           <Link to={`/hooksuser/edit/${res.id}`} className="btn btn-warning">EDIT</Link>
                                   </td>
                                   <td>
                                           <Link onClick={()=>DeleteHandler(res.id)} className="btn btn-danger">DELETE</Link>
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

         
  

  
