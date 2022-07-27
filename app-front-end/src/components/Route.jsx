export const Route = ({route}) => {

    return (
        <tr>    
            <td>{route.id}</td>
            <td>{route.truck.headquarter.city},{route.truck.headquarter.state}</td>
            <td>Needs to be implemented</td>
        </tr>
    );
}