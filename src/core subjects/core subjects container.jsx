import { useState } from "react";
import JavaFiles from "./java files";
import ReactjsFiles from "./reactjs files";
import MachineLearningFiles from "./machine learning files";
const CourseSubjectContainer = ()=>{

const [enableJava, setenableJava] = useState(false);
const [enableReactjs, setenableReactjs] = useState(false);
const [enableML, setenableML] = useState(false);
return <>
<div className="container shadow">
    <div className="list-group">

        <a href="https://drive.google.com/drive/folders/1pbl3hnNmWIqvzhm_9d8RbUvjzbmi9ao4?usp=drive_link" target="_blank" className="list-group-item">Python</a>

        <div href="#" className="list-group-item btn btn-light"
        onClick={()=>{
            setenableJava(enableJava ? false : true);
        }}>Java Programing</div>
        {enableJava && <JavaFiles/>}

        <div className="list-group-item btn btn-light"
                onClick={()=>{
                    setenableReactjs(enableReactjs ? false : true);
                }
            }>  React.js</div>
        {enableReactjs&& <ReactjsFiles/>}
        
        <div href="#" className="list-group-item btn btn-light"
            onClick={()=>{
                setenableML(enableML ? false : true);
            }
        }>  Machine Learning</div>
        {enableML&& <MachineLearningFiles/>}
        
    </div>
        
</div>
    
    </>
};export default CourseSubjectContainer