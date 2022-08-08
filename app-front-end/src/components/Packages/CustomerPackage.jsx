

export const CustomerPackage = ({ pack }) => {

    const displayStatus = pack.status.id === 1?'Being Processed':pack.status.id===4?'In Route':'Delivered'

    return (
        <tr>
            <td>{pack.id}</td>
            <td>{pack.description}</td>
            <td>{pack.customer.address} {pack.customer.city},{pack.customer.state}</td>
            <td>{displayStatus}</td>
        </tr>
    );
}