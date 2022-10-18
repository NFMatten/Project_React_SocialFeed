
const DisplayEntries = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>Index</th>
                <th>Person</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.person}</td>
                            <td>{entry.message}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayEntries;