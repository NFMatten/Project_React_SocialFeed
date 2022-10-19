import "./DisplaySingleEntry.css"

const DisplaySingleEntry = (props) => {
    return ( 
        <div>
            <p className="person-styling">{props.entry.person}</p>
            <p className="message-styling">{props.entry.post}</p>
        </div>
        
     );
}
 
export default DisplaySingleEntry;
