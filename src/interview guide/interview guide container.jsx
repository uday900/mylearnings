import { useState } from "react";
import WebsiteLinks from "./websites links";

const InterviewGuideContainer = ()=>{

const [enableWebsiteLinks, setenableWebsiteLinks] = useState(false);
return <>
{/* subject name */}
<div className="container shadow">
    <div className="list-group">
        <div className="list-group-item btn btn-light"
            onClick={()=>{
                setenableWebsiteLinks(enableWebsiteLinks ? false : true);
            }
        }>  Websites</div>
        {enableWebsiteLinks && <WebsiteLinks/>}
    </div>


    {/* pdf's */}
    <a href="https://drive.google.com/file/d/121VwhbisBVp6KFWsnn7fI0UDf1pDdkSQ/view?usp=drive_link" target="_blank">Java interview questions</a> <br />
    <a href="https://drive.google.com/file/d/12IAdt8gaZCcwpGHlsMTjcZQ_xz9m5joa/view?usp=drive_link" target="_blank">Python interview questions</a> <br />
    <a href="https://docs.google.com/document/d/1qFmmXD8p_-wCUoNVNaAllDIQio-EvXpr/edit?usp=drive_link&ouid=113064704097444808273&rtpof=true&sd=true" target="_blank">SQL and DBMS questions</a> <br />
    <a href="https://drive.google.com/file/d/1OOtUbDuXE3ySbW9rBO9-tyTVqaXibqLe/view?usp=drive_link" target="_blank">Trees&Graphs(data structures) questions</a> <br />
    <a href="https://drive.google.com/file/d/1wCN5r4dCuDMbqanJUwfdXqQMtUNWrMjF/view?usp=drive_link" target="_blank">Stack & queues questions</a> <br />
    
</div>
</>
};export default InterviewGuideContainer;