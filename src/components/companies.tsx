import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react'
// import fetch from "node-fetch";

const fetchURL = "http://localhost:3001/companies/"

interface Props {

}

interface Companies {
    city: string
    contact_persons: Object[]
    country: string
    description: string
    email: string
    employee_count: number
    id: string
    logo: string
    name: string
    phone: string
    revenue: number
    slug: string
    street: string
    website: string
    zip_code: string
}

interface Api {
    config: {}
    data: Object[]
    headers: {}
    request: {}
    status: number
    statusText: string
}

function Companies({ }: Props): ReactElement {
    const [data, setData] = useState<Api[] | Companies[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<Api[]>(fetchURL);
                console.log(result)
                setData(result.data);
            } catch (error) {
                console.error(error)
            }
        }
        console.log(data)
        fetchData();

    }, [])

    return (
        <div>

        </div>
    )
}

export default Companies;
