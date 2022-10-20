import "./DisplaySingleEntry.css";
import LikeDislikeButtons from "../LikeDislikeButtons/LikeDislikeButtons";

const DisplaySingleEntry = (props) => {
    return ( 
        <div className="entry-border">
            <p className="person-styling">{props.entry.person}</p>
            <p className="message-styling">{props.entry.post}</p>
            
            <div className="d-flex justify-content-end button-styling">
                <LikeDislikeButtons />
            </div>

        </div>
        
     );
}
 
export default DisplaySingleEntry;