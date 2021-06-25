import React, {useState,useEffect}  from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default (props)=>  
 
 {
    var [UserData,setStateUserData]=useState({
        id:'',
        name:'',
        mail:'',
        phone:''
    });

    //Props History In Hooks
    let {idno} = useParams();

     //Destructing
     let {   id , name , mail , phone } = UserData 

    //Updating Api Data into UserData
    useEffect(()=>{
                        const url = `http://localhost:3001/users/${idno}`

                        axios.get(url).then((result) =>setStateUserData(result.data))
                  },[]);
       

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

                              <Link to="/hooksuser" className="btn btn-success">GoTo Back</Link>

                        </div>
                        
                    </div>
        </>)
    }
 


