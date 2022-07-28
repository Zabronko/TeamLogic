import {useNavigate} from 'react-router-dom';

export const Warehouse = ({warehouse}) => {

    const history = useNavigate();

    const handleClick = async() => {
        history(`./${warehouse.id}`)
    }

    return (
        <tr onClick={handleClick}>    
            <td>{warehouse.id}</td>
            <td>{warehouse.city}</td>
            <td>{warehouse.state}</td>
            <td>{warehouse.trucks.length}</td>
            <td>{warehouse.packages.length}</td>
        </tr>
    );
}