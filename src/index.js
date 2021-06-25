
        //**************====== Main Index file Of the React ====**************//


import React ,{Fragment} from 'react'

// Import React
import ReactDOM from 'react-dom'

//Importing bootstrap Setup From Moduloes
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Importing External CSS file
import './../src/assets/css/custom.css'

 //import packages from sources
 import Routings from './components/Routings.js'

 import { Provider } from "react-redux";

 import store from "./store/index";


 //calling method
 ReactDOM.render(<Provider store={store}> 
                  <Routings/>
                </Provider>,document.getElementById('root'))
       