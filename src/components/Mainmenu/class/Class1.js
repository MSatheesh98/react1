import React,{setState} from 'react' 


var jk1="This Outside of the class function Global VAriable"
class Class1 extends React.Component
{
     

   constructor(props)
   {
       super();
       this.state=
       {
           id:6523,
           mail:'AravindaHari665@gmail.com',
           phone:9841253687
       }
    }    
    
       changes = ()=>
       {
           this.setState
            ({
                 id:10245,
                 mail:'Karuna_Kuamri_priya@0231',
                 phone:7541235862

           })
       }



  

   render()
   {
       var jk="This IS Function Global VAriable"
       return(<>
                 <div className="container-fluid p-2 bg-dark text-white">  

                     <div className="container p-2 text-center">          
                     
                          <h1>REACT_CLASS_COMPONENT</h1>
                          <p className="m-5">  
                            <h3>
                                {/* Accessning The State Object Data from JSX */}
                            Id Is :  {this.state.id} <br/><br/>
                            Name Is :  {this.state.mail} <br/><br/>
                            Phone No Is :  {this.state.phone} <br/><br/>
                            </h3>
                          </p>

                          <button onClick={()=>this.setState({id:9178})}>Change Id</button> &nbsp;&nbsp;&nbsp;
                          <button onClick={()=>this.setState({mail:"Rushi_Vihanka445"})}>Change Name</button>&nbsp;&nbsp;&nbsp;
                          <button onClick={()=>this.setState({phone:8845712365})}>Change Phone No</button>
                  
                              <br/><br/><br/>
                           <button onClick={()=>this.changes()}>Change All </button>           
                  
                    </div>
                 </div>

                        
          </>);
   }


}
export default Class1;
