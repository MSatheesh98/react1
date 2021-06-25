import {React,useState,useEffect} from 'react'
import axios from 'axios';

const apiurl=`https://fakestoreapi.com/products`

export default (props)=>
{

    var [products , setStateproducts]=useState([]);

    useEffect(()=>{

        axios.get(apiurl).then((result)=>setStateproducts(result.data))
    },[])

    

    return(<>
            <h1 className="text-center m-3">React Hooks Api Calls</h1>

            <div className="container edit">

                <div className="row">
                    {
                        products.map((res,i)=>
                        {
                            return(<div className="col-lg-3 text-center mx-auto my-2" key={i}>
                             <div className="card">
                                    <h5 className="card-title text p-2">{res.category}</h5>
                                    <img src={res.image} className="card-img-top w-50 mx-auto my-2" style={{height:'200px'}}  />
                                    <div className="card-body">
                                        <h4 className="card-title">{res.title.slice(0,15)}</h4>
                                        <h5 className="card-title">{res.price}</h5>
                                        
                                        
                                        <p className="card-text">{res.description.slice(0,30)} </p>
                                        <a href="#" className="btn btn-primary">BUY NOW</a>
                                    </div>
                            </div>

                            </div>)
                        })
                    }

                </div>

                
            </div>
    
    
    </>)
}