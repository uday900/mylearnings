import { useState } from "react";
import './index.css';
import CourseSubjectContainer from "./core subjects/core subjects container";
import AptitudeContainer from "./aptitude/aptitide container";
import InterviewGuideContainer from "./interview guide/interview guide container";

const HomePage = ()=>{
const [enableCoreTopics, setenableCoreTopics] = useState(true);
const [enableAptitude, setenableAptitude] = useState(true);
const [enableInterviewGuide, setenableInterviewGuide] = useState(true);

return <>
<div className="container-fuild">
    <div className="container-fluid p-2 bg-primary text-white text-center">
        <div className="h3">My Learnings --uday</div>
    </div>

    {/* course container */}
    <div className="container shadow-sm p-3 ">
        <a href="#" className="h4"
            onClick={()=>{
                setenableCoreTopics(enableCoreTopics ? false : true);
            }
        }>Core Subjects</a>
        {enableCoreTopics && <CourseSubjectContainer/>}
    </div>

    <div className="container shadow-sm p-3 ">
        <a href="#" className="h4"
            onClick={()=>{
                setenableAptitude(enableAptitude ? false : true);
            }
        }>Aptitude</a>
        {enableAptitude && <AptitudeContainer/>}
    </div>

    <div className="container shadow-sm p-3">
        <a href="#" className="h4"
        onClick={()=>{setenableInterviewGuide(enableInterviewGuide ? false : true)}}>
            Interview Guide
        </a>
        {enableInterviewGuide && <InterviewGuideContainer/>}
    </div>
    

    
</div>


</>
};export default HomePage;;