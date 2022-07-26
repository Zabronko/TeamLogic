

export const Headquarter = ({headquarter}) => {

    return (
        <tr>    
            <td>{headquarter.id}</td>
            <td>{headquarter.city}</td>
            <td>{headquarter.state}</td>
        </tr>
    );
}