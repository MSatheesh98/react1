import {React} from 'react'

export default (props)=>
{
    var numbers=[]//Empty Array

    var {totalposts,DefaultMaxDisplayposts}=props

    var NumberofButton =Math.ceil(totalposts/DefaultMaxDisplayposts) 

    for (let i=1; i<=NumberofButton; i++)
    {
        numbers.push(i);//Defined Arrey
    }

   return(<div>
               
               <div className="container text-center">

                   <ul className="pagination">
                       {
                           numbers.map((bno,i)=><li class="page-item">
                           <a class="page-link" onClick={()=>props.getButtonNumbers(bno)} >{bno}</a></li>)
                       }

                   </ul>


               </div>
         
   </div>)
}