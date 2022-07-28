
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
            <td>{truck.status.status}</td>
        </tr>
    );
}