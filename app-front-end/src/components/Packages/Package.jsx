export const Package = ({pack, warehouse}) => {

    return (
        <tr>
            <td>{pack.id}</td>
            <td>{pack.description}</td>
            <td>{warehouse.city},{warehouse.state}</td>
            <td>none</td>
            <td>{pack.customer.name}</td>
        </tr>
    );
}