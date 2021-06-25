import {React,useState,useEffect} from 'react'
import axios from 'axios';

import Pager from './Pager.js'

const apiurl=`https://jsonplaceholder.typicode.com/comments `

export default (props)=>
{
    // posts Update by Api
    var [posts , setStateposts]=useState([]);
   
    //DefaultDesplayPosta
    var [DefaultMaxDisplayposts]=useState(20);

    //DefaultFirstButton
    var [DefaultButton,setStateDefaultButton] = useState(1);

    //LastIndex
    var Lastindex =DefaultButton*DefaultMaxDisplayposts
    var Firstindex=Lastindex-DefaultMaxDisplayposts

    //Api calls By Hooks
    useEffect(()=>{

        axios.get(apiurl).then((result)=>setStateposts(result.data))
    },[])

    var DisplayDefaultButtonRecords=posts.slice(Firstindex,Lastindex )

     var totalposts=posts.length

     let ButtonChange =(btnnumber)=>
     {
        setStateDefaultButton(btnnumber)
     }

    return(<>

            <br/><br/> 

            <h1 className="text-center m-3">React Hooks Pagination</h1>

            <br/><br/> 

            <div className="container ">
                <h4>Showing Results {Firstindex+1} – {Lastindex} of {totalposts} Posts Data.......</h4>
            </div><br/>

            {/*Pagination  
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
            </nav>
            {/*Pagination   */}

            <div className="container edit1 text-white">

                 
                    {
                       DisplayDefaultButtonRecords.map((res,i)=>
                        {
                            return(<ul key={i}>

                                       
                                          <h4>{res.id}.{res.name}</h4>
                                          <p>{res.email} <br/>
                                             {res.body}
                                          </p>
                                      
                                  
                                  </ul> )
                        })
                    }
                    
                    </div> 
            
                  
                  
                  <br/> <br/> <br/>
                           <div className="container pager">
                                <Pager
                                totalposts={totalposts} 
                                DefaultMaxDisplayposts={DefaultMaxDisplayposts} 
                                getButtonNumbers={(bno)=>ButtonChange(bno)}/>
                           </div>
                  <br/> <br/> <br/>

                 
                
          
    
    
    </>)
}