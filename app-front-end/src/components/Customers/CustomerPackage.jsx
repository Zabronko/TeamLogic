
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const CustomerPackage = ({pack}) => {
  const navigate = useNavigate();
  
  const handleClick = async (pack) => {
    axios.get(`http://localhost:8080/packages/packageId=${pack.id}`)
    .then(res => navigate(`/warehouses/${res.data}`));

}

  return (
    <tr onClick={() => handleClick(pack)} key={pack.id}>
    <td >{pack.id}</td>
    <td>{pack.description}</td>
    <td>{pack.status.status}</td>
  </tr>
  )
}
