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
        <a href="#" className="list-group-item"
        onClick={()=>{
            setenableJava(enableJava ? false : true);
        }}>Java Programing</a>
        {enableJava && <JavaFiles/>}

        <a href="#" className="list-group-item"
                onClick={()=>{
                    setenableReactjs(enableReactjs ? false : true);
                }
            }>  React.js</a>
        {enableReactjs&& <ReactjsFiles/>}
        
        <a href="#" className="list-group-item"
            onClick={()=>{
                setenableML(enableML ? false : true);
            }
        }>  Machine Learning</a>
        {enableML&& <MachineLearningFiles/>}
        
    </div>
        
</div>
    
    </>
};export default CourseSubjectContainer