import React,{setState} from 'react' 
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import EmpAction from '../../../actions/empaction';
import { bindActionCreators } from 'redux';
 


var jk1="This Outside of the class function Global VAriable"
class Lifecycle extends React.Component
{
     

   constructor(props)
   {
       super();
       this.state={}
       console.log(`****** This Is Constructor Mouting Method******`)
    
    }    
    
     componentWillMount()
     {
         console.log(`******* This Is ComponentWillMount Method******`)
     }  

     componentDidMount()
     {
         console.log(`******* This Is ComponentDidount Method******`)

           this.props.EmpAction();

     }  

     


  

   render()
   {
       console.log(`****** This Is Render Mounting Method******`)
       
       return(<>
                 <div className="container-fluid p-2 bg-dark text-white">  

                     <div className="container text-center">          
                     
                          <h1>REACT_CLASS_COMPONENT LIFE_CYCLE</h1>

         <div className="container  text-center m-4" >
              <table className="table table-bordered table-light text-center ">
                 <thead className="table  text-center">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Phone</th>
                           
                   </thead>
                   <tbody>
                      {
                      this.props.empdata.map((res,i)=>
                      {
                          return(<tr key={i}>
                                 <td>{res.id}</td>
                                 <td>{res.name}</td>
                                 <td>{res.mail}</td>
                                 <td>{res.phone}</td>
                                 
                          </tr>)
                      })


                      }





                   </tbody>





                 </table>



                          </div>
                                
                  
                    </div>
                 </div>

                        
          </>);
   }


}
 const mapStateToProps=(state)=>
 {
     console.log(state)
     return({
              empdata:state.empReducer
     })
 }

const mapDispatchToProps=(dispatch)=>
{
    return bindActionCreators ({EmpAction},dispatch)
}


export default connect(mapStateToProps , mapDispatchToProps) (Lifecycle);
