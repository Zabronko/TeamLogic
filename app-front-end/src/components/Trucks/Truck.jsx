
export const Truck = ({truck, warehouse}) => {

    const packageOutput = () => {
        return truck.packages !== undefined ? truck.packages.length : 'None';
    }

    return (
        <tr>
            <td>{truck.id}</td>
            <td>{truck.type}</td>
            <td>{warehouse.city},{warehouse.state}</td>
            <td>{packageOutput()}</td>
            <td>{truck.capacity}</td>
            <td>
                {truck.packages.length>0?`${truck.packages[0].customer.city},${truck.packages[0].customer.state}`:""}
            </td>
            <td>{truck.status.status}</td>
        </tr>
    );
}