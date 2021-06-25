import React, { useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EmpAction from './../../actions/empaction.js'
import UsersAction from './../../actions/usersaction.js'
import StudentAction from './../../actions/studentaction.js'



let HooksRedux=(props)=> 
 {

  useEffect(()=>{
     props.EmpAction();
     props.UsersAction();
     props.StudentAction();
  },[])
   
  
    return (<>
               <div className="container text-center p-3">
                    
               <h1>Hooks_Redux_Concept</h1>

                </div>

 <div className="container text-center w-75">

          


     <h2 className="m-4"> Synchronous Data[Direct] from Redux_Actions</h2>

     <table className="table table-bordered table-dark text-center ">

                <thead className="table  text-center">

                                
                                <th>Id</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Phone</th>
                                
                </thead>

                    <tbody className=" table-dark ">
                            {
                              props.empdata.map((res,i)=>
                                {
                                        
                                    return( <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{res.name}</td>
                                                <td>{res.mail}</td>
                                                <td>{res.phone}</td>
                                        </tr>)
                                })

                            }
                   </tbody>
          </table> 
          <br/>
          <hr/>


          <h2 className="m-4">ASynchronous RestApi[Global Api]_Data from Redux_Actions </h2>

     <table className="table table-bordered table-light text-center ">

                <thead className="table  text-center">

                                
                                <th>Id</th>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                                
                </thead>

                    <tbody>
                            {
                                props.userdata.map((res,i)=>
                                {
                                        
                                    return( <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{res.name}</td>
                                                <td>{res.username}</td>
                                                <td>{res.email}</td>
                                                <td>{res.phone}</td>
                                                <td>{res.website}</td>
                                        </tr>)
                                })

                            }
                   </tbody>
          </table>

          <br/>
          <hr/>


          <h2 className="m-4">ASynchronous LocalApi_Data from Redux_Actions</h2>

     <table className="table table-bordered table-light text-center ">

                <thead className="table  text-center">

                                
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                 
                                
                </thead>

                    <tbody className="table table-dark">
                            {
                                props.studentdata.map((res,i)=>
                                {
                                        
                                    return( <tr key={i}>

                                                    <td>{i+1}</td>
                                                    <td>{res.name}</td>
                                                    <td>{res.mail}</td>
                                                    <td>{res.phone}</td>
                                            </tr>)
                                          })

                            }
                   </tbody>
          </table>
</div>
           </>)
  }


const mapStateToProps = (state)=>
{
    console.log(state)

   return({
       empdata:state.empReducer,
       userdata:state.usersReducer,
       studentdata:state.studentReducer
   })
}

const mapDispatchToProps = (dispatch)=>
{
      return bindActionCreators({EmpAction,UsersAction,StudentAction},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HooksRedux);