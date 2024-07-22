import { useState } from "react";
import JavaFiles from "./java files";
import ReactjsFiles from "./reactjs files";
const CourseSubjectContainer = ()=>{

const [enableJava, setenableJava] = useState(false);
const [enableReactjs, setenableReactjs] = useState(false);
return <>
<div className="container shadow p-2">
            {/* subject 1 */}
            <a href="#"
                onClick={()=>{
                    setenableJava(enableJava ? false : true);
                }
            }>  Java</a>
            {enableJava && <JavaFiles/>}
            <br />
            {/* subject 2 */}
            <a href="#"
                onClick={()=>{
                    setenableReactjs(enableReactjs ? false : true);
                }
            }>  React.js</a>
            {enableReactjs&& <ReactjsFiles/>}
        </div>
    
    </>
};export default CourseSubjectContainer