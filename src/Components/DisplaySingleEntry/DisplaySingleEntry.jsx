import "./DisplaySingleEntry.css"

const DisplaySingleEntry = (props) => {
    return ( 
        <div className="entry-border">
            <p className="person-styling">{props.entry.person}</p>
            <p className="message-styling">{props.entry.post}</p>
            <p className="d-flex justify-content-end">&#128077; &#128078;</p> {/* Placeholder for Like/Dislike buttons */}
        </div>
        
     );
}
 
export default DisplaySingleEntry;
