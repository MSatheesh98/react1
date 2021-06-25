import {React,useState} from 'react'

export default (props)=>
{

    var [stateEmail , setStateEmail]=useState("SatheeshModala123@gmail.comś");

    let change =()=>
    {
        setStateEmail("KumarModalaYadav654@Gmail.com");
    }

    return(<>
            <h1 className="text-center m-3">React Hooks useState</h1>

            <div className="container text-center p-3">

                {stateEmail} <br/><br/>

                <button onClick={change} className="btn btn-danger">Change_Email</button>

            </div>
    
    
    </>)
}