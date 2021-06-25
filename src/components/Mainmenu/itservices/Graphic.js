import React from 'react' 

function Graphic()
{
    return(<>
         <div className="container-fluid m-1 p-1  " style={{backgroundColor:' #232933'}}>
                 <h2 className="text-center font web p-1  ">Graphic_Design</h2>
                 <p className="content-justify p-1 text-white">  Graphic design is the art, profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.
                       <img src="https://bit.ly/3hToMBD" style={{width:'70%' , height:'300px', padding:'5px'}}/>
                 </p>
         </div>
    </>)
}

export default  Graphic;