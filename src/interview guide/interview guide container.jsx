import { useState } from "react";
import WebsiteLinks from "./websites links";

const InterviewGuideContainer = ()=>{

const [enableWebsiteLinks, setenableWebsiteLinks] = useState(false);
return <>
{/* subject name */}
<div className="container shadow">
    <div className="list-group">
        <a href="#" className="list-group-item"
            onClick={()=>{
                setenableWebsiteLinks(enableWebsiteLinks ? false : true);
            }
        }>  Websites</a>
        {enableWebsiteLinks && <WebsiteLinks/>}
    </div>

    
    {/* pdf's */}
    <a href="./media/Interview Materials/Java-Interview-Questions.pdf" target="_blank">Java interview questions</a> <br />
    <a href="./media/Interview Materials/Python Interview Q&A.pdf" target="_blank">Python interview questions</a>
</div>
</>
};export default InterviewGuideContainer;