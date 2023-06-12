import HtmlImage from './assets/images/html5-logo.webp'
import ReactImage from './assets/images/react-logo.webp'
import CssImage from './assets/images/css-logo.webp'
import JSImage from './assets/images/javascript-logo.webp'
import GitImage from './assets/images/git-logo.webp'
import Github from './assets/images/cat-github.webp'
import VsImage from './assets/images/visualstudio-logo.webp'
import NodeJSImage from './assets/images/nodejs-logo.webp'
import MongodbImage from './assets/images/mongodb-logo.webp'


import './assets/table.css'



function Table(){
    return(
        <>
        <table className='table-competences'>
                           <thead>
                           <tr>
                               <th>Frontend</th>
                               <th>Backend</th>
                               <th>Divers</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <td>
                                <img alt='Placeholder' src={HtmlImage}></img> 
                                <img alt='Placeholder' src={CssImage}></img> 
                                <img alt='Placeholder' src={ReactImage}></img>
                                <img alt='Placeholder' src={JSImage}></img>
                               </td>
                               <td>
                                <img alt='Placeholder' src={NodeJSImage}></img>
                                <img alt='Placeholder' src={MongodbImage}></img>
                               </td>
                               <td>
                                <img alt='Placeholder' src={GitImage}></img>
                                <img alt='Placeholder' src={Github}></img>
                                <img alt='Placeholder' src={VsImage}></img>
                                </td>
                           </tr>
                           </tbody>  
                       </table>
       </>
    );
   
}

export default Table