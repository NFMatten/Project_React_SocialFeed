import DisplaySingleEntry from "../DisplaySingleEntry/DisplaySingleEntry";

const DisplayEntries = (props) => {
    return ( 
        <div> 
            <div>
                {props.parentEntries.map((entry, index) => {
                    return (
                    <DisplaySingleEntry key={index} entry={entry} index={index} />
                    );
                })}
            </div>
        </div>
     );
}
 
export default DisplayEntries;