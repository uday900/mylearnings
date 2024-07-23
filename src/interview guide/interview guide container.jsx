import { useState } from "react";
import WebsiteLinks from "./websites links";

const InterviewGuideContainer = ()=>{

const [enableWebsiteLinks, setenableWebsiteLinks] = useState(false);
return <>
{/* subject name */}
<div className="container p-2 shadow">
    {/* chapters */}
    <a href="#"
        onClick={()=>{
            setenableWebsiteLinks(enableWebsiteLinks ? false : true);
        }
    }>  Websites</a>
    {enableWebsiteLinks && <WebsiteLinks/>}<br />
    
    {/* pdf's */}
    <a href="./media/Interview Materials/Java-Interview-Questions.pdf" target="_blank">Java interview questions</a> <br />
    <a href="./media/Interview Materials/Python Interview Q&A.pdf" target="_blank">Python interview questions</a>
</div>
</>
};export default InterviewGuideContainer;