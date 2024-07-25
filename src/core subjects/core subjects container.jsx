import { useState } from "react";
import ReactjsFiles from "./reactjs files";
import MachineLearningFiles from "./machine learning files";
const CourseSubjectContainer = ()=>{

const [enableReactjs, setenableReactjs] = useState(false);
const [enableML, setenableML] = useState(false);
return <>
<div className="container shadow">
    <div className="list-group">

        <a href="https://drive.google.com/drive/folders/1pbl3hnNmWIqvzhm_9d8RbUvjzbmi9ao4?usp=drive_link" 
        target="_blank" className="list-group-item">Python</a>

        <a href="https://drive.google.com/drive/folders/16HV38QZRWFnTlQv1t3eUkjIvniHXvFcc?usp=drive_link" className="list-group-item btn btn-light" target = "_black">Java Programing</a>

        <a href="https://drive.google.com/drive/folders/1SsTSsHSPWQAYNMbfKjDZk5cx9zB2H0tk?usp=drive_link" 
        target="_blank" className="list-group-item">Data Structures</a>

        <a href="https://drive.google.com/drive/folders/1y7fZewbUo0fmQp8dg-jGKfTgVPKtbR6a?usp=drive_link" 
        target="_blank" className="list-group-item">Data Structures & Algorithms</a>

        <a href="https://drive.google.com/drive/folders/1zoCynkviHq7HTigcPqAIxXpRRLinnB9t?usp=drive_link" 
        target="_blank" className="list-group-item">DBMS & SQL</a>

        <div className="list-group-item btn btn-light"
                onClick={()=>{
                    setenableReactjs(enableReactjs ? false : true);
                }
            }>  React.js</div>
        {enableReactjs&& <ReactjsFiles/>}

        <a href="https://drive.google.com/drive/folders/1YCWUTUJNI4Bt4OYDoQSwxl_FuYhNuXDQ?usp=drive_link" 
        target="_blank" className="list-group-item">Web Technologies</a>

        

        <a href="https://drive.google.com/drive/folders/1wusT6w26PUNpepVgknjapcxB2D8R0V3B?usp=drive_link" 
        target="_blank" className="list-group-item">Numpy & Pandas</a>
        
        <a href="https://drive.google.com/drive/folders/1ealpMjT_5pJIJZz_NRslbxybI7AZGCsX?usp=drive_link" target="_blank" className="list-group-item btn btn-light"
        >  Machine Learning</a>

        <a href="https://drive.google.com/drive/folders/1HtgZbdU22Y94lwJyf02yNtfZ6fY4J92R?usp=drive_link" 
        target="_blank" className="list-group-item">Artificial Intelligence</a>

        <a href="https://drive.google.com/drive/folders/1QNAEHiAUUh14wJ1_mywTskyjJBztzjSB?usp=drive_link" 
        target="_blank" className="list-group-item">Cloud Computing</a>

        <a href="https://drive.google.com/drive/folders/1senXyLIhefXipPM83LXhWObkiJ4_5lRm?usp=drive_link" 
        target="_blank" className="list-group-item">Compiler Design</a>

        <a href="https://drive.google.com/drive/folders/18hazuI_x_RDEVKMcEDnYsrTXxTfqIZaj?usp=drive_link" 
        target="_blank" className="list-group-item">Cyber Security</a>

    </div>
        
</div>
    
    </>
};export default CourseSubjectContainer