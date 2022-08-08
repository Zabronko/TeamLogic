import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { PackageList } from "../components/Packages/PackageList";

export const CustomerPortalPackages = () => {

    const [packages, setPackages] = useState();
    const [cookies,setCookie] = useCookies();

    useEffect(() => {
        axios.get(`http://localhost:8080/customers/packages?username=${cookies['username']}`)
        .then(res => setPackages(res.data));
    }, [])

    if(packages !== undefined) {
        console.log('here')
        return (
            <>
                <PackageList packages={packages}/>
            </>
        );
    }
}